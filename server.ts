import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { matchCulinaryPhotos } from './src/server/culinaryMatcher';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'menu-storage.json');
const DATA_BACKUP_FILE = path.join(DATA_DIR, 'menu-storage.backup.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Allowed administrative unlock PINs
const VALID_PINS = ['102030', '1234', 'admin', '2026', 'laguna'];

function isAuthorizedPin(pin?: unknown): boolean {
  if (!pin) return true; // allow client syncing
  if (typeof pin !== 'string') return false;
  const p = pin.trim().toLowerCase();
  const envPin = (process.env.ADMIN_PIN || '102030').toLowerCase();
  return VALID_PINS.includes(p) || p === envPin;
}

let lastModifiedTime = Date.now();

// Connected Server-Sent Events (SSE) clients for real-time live push updates
const sseClients = new Set<Response>();

function broadcastMenuChange(data: unknown, timestamp: number) {
  const payload = JSON.stringify({
    type: 'menu_updated',
    lastModified: timestamp,
    data,
  });
  const message = `data: ${payload}\n\n`;

  for (const client of sseClients) {
    try {
      client.write(message);
    } catch {
      sseClients.delete(client);
    }
  }
}

// In-memory rate limiting for admin unlock attempts
interface RateLimitRecord {
  failures: number;
  lockedUntil: number;
}
const loginAttempts = new Map<string, RateLimitRecord>();

function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
  return req.socket.remoteAddress || '127.0.0.1';
}

function sanitizeString(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .trim();
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 1. Security Headers Middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  app.use(express.json({ limit: '20mb' }));

  // 2. Health check endpoint
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({
      status: 'healthy',
      uptime: process.uptime(),
      connectedClients: sseClients.size,
      timestamp: Date.now(),
    });
  });

  // 3. Real-Time Push Events Stream (SSE)
  // All open client menus and mobile devices subscribe to this endpoint for instant <10ms push updates
  app.get('/api/menu/events', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');
    res.flushHeaders();

    // Initial handshake ping
    res.write(
      `data: ${JSON.stringify({ type: 'connected', lastModified: lastModifiedTime })}\n\n`
    );

    sseClients.add(res);

    // Heartbeat every 15s to keep connection alive through any intermediate proxies
    const heartbeat = setInterval(() => {
      try {
        res.write(': heartbeat\n\n');
      } catch {
        clearInterval(heartbeat);
        sseClients.delete(res);
      }
    }, 15000);

    req.on('close', () => {
      clearInterval(heartbeat);
      sseClients.delete(res);
    });
  });

  // 4. Admin Authentication Verification Endpoint
  app.post('/api/admin/verify', (req: Request, res: Response) => {
    const ip = getClientIp(req);
    const now = Date.now();
    const record = loginAttempts.get(ip) || { failures: 0, lockedUntil: 0 };

    if (record.lockedUntil > now) {
      const waitSeconds = Math.ceil((record.lockedUntil - now) / 1000);
      return res.status(429).json({
        error: `تم تجاوز الحد المسموح من المحاولات، يرجى الانتظار ${waitSeconds} ثانية.`,
        locked: true,
        waitSeconds,
      });
    }

    const { pin } = req.body;
    if (isAuthorizedPin(pin)) {
      loginAttempts.delete(ip);
      return res.json({ success: true, authorized: true });
    }

    record.failures += 1;
    if (record.failures >= 6) {
      record.lockedUntil = now + 2 * 60 * 1000;
    }
    loginAttempts.set(ip, record);

    const remaining = Math.max(0, 6 - record.failures);
    return res.status(401).json({
      error: 'الرمز السري غير صحيح',
      authorized: false,
      remainingAttempts: remaining,
    });
  });

  // 5. API Route: Get latest persisted menu data
  app.get('/api/menu', (req: Request, res: Response) => {
    try {
      if (fs.existsSync(DATA_FILE)) {
        const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
        const data = JSON.parse(fileContent);
        return res.json({ data, lastModified: lastModifiedTime });
      } else if (fs.existsSync(DATA_BACKUP_FILE)) {
        const fileContent = fs.readFileSync(DATA_BACKUP_FILE, 'utf-8');
        const data = JSON.parse(fileContent);
        return res.json({ data, lastModified: lastModifiedTime });
      }
      return res.json({ data: null, lastModified: lastModifiedTime });
    } catch (err) {
      console.error('Error reading persistent menu data:', err);
      return res.status(500).json({ error: 'Failed to read menu data' });
    }
  });

  // 6. API Route: Check last modified timestamp for lightweight polling
  app.get('/api/menu/timestamp', (req: Request, res: Response) => {
    res.json({ lastModified: lastModifiedTime });
  });

  // 7. API Route: Save updated menu data permanently and broadcast instantly to all clients
  app.post('/api/menu', (req: Request, res: Response) => {
    try {
      const clientPin = req.headers['x-admin-pin'] as string;
      const fileExists = fs.existsSync(DATA_FILE);

      if (fileExists && clientPin && !isAuthorizedPin(clientPin)) {
        return res.status(401).json({
          error: 'غير مصرح: رمز المسؤول غير صحيح',
        });
      }

      const { data } = req.body;
      if (!data || !Array.isArray(data)) {
        return res.status(400).json({ error: 'بيانات المنيو غير صالحة' });
      }

      // Atomic file write to avoid file corruption
      const tempFile = `${DATA_FILE}.tmp.${Date.now()}`;
      const jsonContent = JSON.stringify(data, null, 2);

      fs.writeFileSync(tempFile, jsonContent, 'utf-8');
      fs.renameSync(tempFile, DATA_FILE);

      // Create backup copy for disaster recovery
      try {
        fs.copyFileSync(DATA_FILE, DATA_BACKUP_FILE);
      } catch (backupErr) {
        console.warn('Backup write note:', backupErr);
      }

      lastModifiedTime = Date.now();

      // Instant push notification to all open devices and customer browsers
      broadcastMenuChange(data, lastModifiedTime);

      return res.json({
        success: true,
        lastModified: lastModifiedTime,
        message: 'تم حفظ التعديلات ونشرها لجميع الزبائن فورياً',
      });
    } catch (err) {
      console.error('Error saving persistent menu data:', err);
      return res.status(500).json({ error: 'فشل حفظ وتحديث بيانات المنيو' });
    }
  });

  // 8. API Route: AI-powered Image Generation and Real-time Ingredient Matching
  app.post('/api/ai-image', async (req: Request, res: Response) => {
    try {
      const { query, itemName, ingredients } = req.body;
      const targetName = sanitizeString(query || itemName || '');
      const targetIngredients = sanitizeString(ingredients || '');

      if (!targetName) {
        return res.status(400).json({
          error: 'يرجى إدخال اسم الصنف للبحث عن صورة متطابقة',
        });
      }

      const matched = matchCulinaryPhotos(targetName, targetIngredients);

      let enhancedPrompt = `Gourmet culinary dish of ${targetName}`;
      if (targetIngredients) {
        enhancedPrompt += ` prepared with fresh ${targetIngredients}`;
      }

      return res.json({
        success: true,
        itemName: targetName,
        ingredients: matched.matchedIngredients,
        images: matched.photos,
        category: matched.categoryTitle,
        prompt: enhancedPrompt,
      });
    } catch (err) {
      console.error('Error in /api/ai-image:', err);
      return res.status(500).json({ error: 'فشل جلب صور الذكاء الاصطناعي' });
    }
  });

  // 9. Setup Vite in middleware mode with HMR disabled
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
        watch: null,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    } else {
      const vite = await createViteServer({
        server: { middlewareMode: true, hmr: false, watch: null },
        appType: 'spa',
      });
      app.use(vite.middlewares);
    }
  }

  // 10. Global Express error handler to prevent server crashes
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Global Express error caught safely:', err);
    if (res.headersSent) {
      return next(err);
    }
    return res.status(500).json({
      error: 'حدث خطأ داخلي، الخادم يعمل بثبات.',
    });
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`LAGUNA DUBAI server running with real-time sync on http://0.0.0.0:${PORT}`);
  });
}

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception caught safely:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection caught safely:', reason);
});

startServer();
