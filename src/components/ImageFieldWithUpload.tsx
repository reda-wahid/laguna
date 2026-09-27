import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Upload,
  Link2,
  X,
  Check,
  Image as ImageIcon,
  Sparkles,
  Loader2,
  Wand2,
  Layers,
  UtensilsCrossed,
} from 'lucide-react';

interface ImageFieldWithUploadProps {
  value: string;
  onChange: (val: string) => void;
  isAr: boolean;
  itemName?: string;
  itemIngredients?: string;
  label?: string;
  placeholder?: string;
}

/**
 * Compresses an uploaded image file on the client side using HTML5 Canvas.
 * Ensures the resulting base64 data URL is lightweight (~50-90KB) so that
 * saving it to localStorage and server never exceeds storage limits.
 */
export async function compressImageFile(file: File, maxDim = 800, quality = 0.82): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Selected file is not an image'));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Failed to load image'));
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          resolve(reader.result as string);
          return;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        try {
          const webp = canvas.toDataURL('image/webp', quality);
          if (webp && webp.startsWith('data:image/webp')) {
            resolve(webp);
            return;
          }
        } catch {
          // fallback
        }
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export const ImageFieldWithUpload: React.FC<ImageFieldWithUploadProps> = ({
  value,
  onChange,
  isAr,
  itemName = '',
  itemIngredients = '',
  label,
  placeholder,
}) => {
  // Mode: 'ai' | 'upload' | 'url'
  const [activeMode, setActiveMode] = useState<'ai' | 'upload' | 'url'>('ai');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [previewError, setPreviewError] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // AI Matching States
  const [dishTitle, setDishTitle] = useState<string>(itemName);
  const [ingredientsText, setIngredientsText] = useState<string>(itemIngredients);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [matchedTags, setMatchedTags] = useState<string[]>([]);
  const [aiError, setAiError] = useState<string | null>(null);

  // Synchronize inputs when props update
  useEffect(() => {
    if (itemName && !dishTitle) {
      setDishTitle(itemName);
    }
  }, [itemName, dishTitle]);

  useEffect(() => {
    if (itemIngredients && !ingredientsText) {
      setIngredientsText(itemIngredients);
    }
  }, [itemIngredients, ingredientsText]);

  const displayLabel =
    label ||
    (isAr
      ? 'صورة الصنف (مطابقة واقعية بالذكاء الاصطناعي أو رفع محلي أو رابط)'
      : 'Item Photo (AI Real-Ingredient Match, Local Upload or URL)');

  const defaultPlaceholder =
    placeholder ||
    (isAr
      ? 'https://images.unsplash.com/... أو ارفع ملف من جهازك'
      : 'https://... or upload from your device');

  // Trigger AI Real-Ingredient Matching
  const handleFetchAiImages = useCallback(async () => {
    const targetTitle = String(dishTitle || itemName).trim();
    const targetIngs = String(ingredientsText || itemIngredients).trim();

    if (!targetTitle) {
      setAiError(isAr ? 'يرجى كتابة اسم الصنف أولاً للبحث عن صور مطابقة' : 'Please enter an item name');
      return;
    }

    try {
      setIsAiLoading(true);
      setAiError(null);

      const res = await fetch('/api/ai-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itemName: targetTitle,
          ingredients: targetIngs,
          query: `${targetTitle} ${targetIngs}`.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch AI images');
      }

      const data = await res.json();
      if (data.images && Array.isArray(data.images) && data.images.length > 0) {
        setAiSuggestions(data.images);
        if (data.ingredients && Array.isArray(data.ingredients)) {
          setMatchedTags(data.ingredients);
        }
      } else {
        setAiError(isAr ? 'لم نتمكن من مطابقة صورة، يمكنك تعديل الوصف أو المكونات' : 'No images matched, please modify description');
      }
    } catch (err) {
      console.error('Error fetching AI culinary images:', err);
      setAiError(isAr ? 'حدث خطأ أثناء مطابقة الصور، يرجى المحاولة ثانية' : 'Error matching AI images');
    } finally {
      setIsAiLoading(false);
    }
  }, [dishTitle, itemName, ingredientsText, itemIngredients, isAr]);

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      try {
        setIsProcessing(true);
        setPreviewError(false);
        const compressedData = await compressImageFile(file);
        onChange(compressedData);
      } catch (err) {
        console.error('Error uploading image:', err);
        alert(isAr ? 'حدث خطأ أثناء معالجة الصورة، يرجى تجربة ملف آخر' : 'Error processing image');
      } finally {
        setIsProcessing(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    },
    [onChange, isAr]
  );

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files?.[0];
      if (!file || !file.type.startsWith('image/')) return;

      try {
        setIsProcessing(true);
        setPreviewError(false);
        const compressedData = await compressImageFile(file);
        onChange(compressedData);
      } catch (err) {
        console.error('Error dropping image:', err);
      } finally {
        setIsProcessing(false);
      }
    },
    [onChange]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOver(false);
  }, []);

  const handleClear = useCallback(() => {
    onChange('');
    setPreviewError(false);
  }, [onChange]);

  const isUploadedDataUrl = value && value.startsWith('data:image/');

  return (
    <div className="space-y-2.5">
      {/* Header Label and Status */}
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold text-[#dfbe6f]">{displayLabel}</label>
        {value && (
          <span className="text-[11px] text-[#8fa89b] flex items-center gap-1 font-medium">
            <Check size={12} className="text-emerald-400" />
            {isUploadedDataUrl
              ? isAr
                ? 'صورة مرفوعة من الجهاز'
                : 'Uploaded File'
              : isAr
              ? 'صورة معتمدة للصنف'
              : 'Active Photo'}
          </span>
        )}
      </div>

      {/* Main Box */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`p-3.5 rounded-2xl bg-[#020806] border transition-all ${
          dragOver ? 'border-[#dfbe6f] bg-[#0a1e18]' : 'border-[#c9a24b]/25 hover:border-[#c9a24b]/40'
        }`}
      >
        {/* Method Switcher Tabs: AI (Default) | Upload | URL */}
        <div className="flex items-center gap-1.5 p-1 bg-[#051510] rounded-xl border border-[#c9a24b]/20 mb-3.5">
          {/* Option 1: AI Real-Ingredient Match */}
          <button
            type="button"
            onClick={() => {
              setActiveMode('ai');
              if (aiSuggestions.length === 0 && (itemName || dishTitle)) {
                handleFetchAiImages();
              }
            }}
            className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'ai'
                ? 'bg-gradient-to-r from-[#153c31] to-[#0a1e18] text-[#dfbe6f] border border-[#c9a24b]/40 shadow-sm'
                : 'text-[#8fa89b] hover:text-[#f7f4ea]'
            }`}
          >
            <Sparkles size={13} className="text-[#c9a24b]" />
            <span>{isAr ? 'ذكاء اصطناعي (مطابقة المكونات)' : 'AI Ingredient Match'}</span>
          </button>

          {/* Option 2: Upload File */}
          <button
            type="button"
            onClick={() => setActiveMode('upload')}
            className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'upload'
                ? 'bg-gradient-to-r from-[#153c31] to-[#0a1e18] text-[#dfbe6f] border border-[#c9a24b]/40 shadow-sm'
                : 'text-[#8fa89b] hover:text-[#f7f4ea]'
            }`}
          >
            <Upload size={13} />
            <span>{isAr ? 'رفع ملف محلي' : 'Local Upload'}</span>
          </button>

          {/* Option 3: Direct URL */}
          <button
            type="button"
            onClick={() => setActiveMode('url')}
            className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'url'
                ? 'bg-gradient-to-r from-[#153c31] to-[#0a1e18] text-[#dfbe6f] border border-[#c9a24b]/40 shadow-sm'
                : 'text-[#8fa89b] hover:text-[#f7f4ea]'
            }`}
          >
            <Link2 size={13} />
            <span>{isAr ? 'رابط مباشر' : 'Direct URL'}</span>
          </button>
        </div>

        {/* TAB 1: AI & INGREDIENTS REALISTIC MATCHING */}
        {activeMode === 'ai' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Dish Name Input */}
              <div>
                <label className="block text-[11px] font-medium text-[#c9a24b] mb-1">
                  {isAr ? 'اسم الطبق أو المشروب' : 'Dish or Drink Name'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={dishTitle}
                    onChange={(e) => setDishTitle(e.target.value)}
                    placeholder={isAr ? 'مثال: بيتزا مارجريتا نابولي' : 'e.g. Margherita Pizza'}
                    className="w-full px-3 py-1.5 rounded-xl bg-[#051510] border border-[#c9a24b]/30 text-xs text-[#f7f4ea] placeholder-[#647c72] outline-none focus:border-[#dfbe6f]"
                  />
                </div>
              </div>

              {/* Ingredients Input */}
              <div>
                <label className="block text-[11px] font-medium text-[#c9a24b] mb-1">
                  {isAr ? 'المكونات الأساسية للطبق (لمطابقة دقيقة)' : 'Key Ingredients (For exact match)'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={ingredientsText}
                    onChange={(e) => setIngredientsText(e.target.value)}
                    placeholder={isAr ? 'مثال: جبن موزاريلا، صوص طماطم، ريحان فريش' : 'e.g. Mozzarella, tomato sauce, basil'}
                    className="w-full px-3 py-1.5 rounded-xl bg-[#051510] border border-[#c9a24b]/30 text-xs text-[#f7f4ea] placeholder-[#647c72] outline-none focus:border-[#dfbe6f]"
                  />
                </div>
              </div>
            </div>

            {/* Match Trigger Button */}
            <div className="flex items-center justify-between gap-2 pt-1">
              <span className="text-[10px] text-[#8fa89b] flex items-center gap-1">
                <UtensilsCrossed size={12} className="text-[#c9a24b]" />
                {isAr
                  ? 'يطابق الذكاء الاصطناعي صوراً فوتوغرافية حقيقية عالية الدقة 4K'
                  : 'AI matches 4K authentic culinary photography'}
              </span>

              <button
                type="button"
                disabled={isAiLoading}
                onClick={handleFetchAiImages}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#c9a24b] to-[#dfbe6f] hover:from-[#dfbe6f] hover:to-[#c9a24b] text-[#030d0a] text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md disabled:opacity-50 transition-all shrink-0 active:scale-95"
              >
                {isAiLoading ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    <span>{isAr ? 'جاري المطابقة الواقعية...' : 'Matching Real Photo...'}</span>
                  </>
                ) : (
                  <>
                    <Wand2 size={13} />
                    <span>{isAr ? 'مطابقة صور واقعية بالمكونات' : 'Match Real Photo'}</span>
                  </>
                )}
              </button>
            </div>

            {aiError && (
              <p className="text-[11px] text-amber-400 bg-amber-950/30 border border-amber-500/20 px-3 py-1.5 rounded-lg">
                {aiError}
              </p>
            )}

            {/* Matched Tags / Ingredients Breakdown */}
            {matchedTags.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] text-[#8fa89b] flex items-center gap-1">
                  <Layers size={11} className="text-[#c9a24b]" />
                  {isAr ? 'المكونات المكتشفة في الصور:' : 'Detected Ingredients:'}
                </span>
                {matchedTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-[#0a1e18] border border-[#c9a24b]/30 text-[10px] text-[#dfbe6f]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* AI Image Results Grid */}
            {aiSuggestions.length > 0 && (
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] text-[#dfbe6f] font-semibold block">
                  {isAr
                    ? 'اختر صورة من الخيارات المطابقة لمكونات الطبق:'
                    : 'Select a photo matching your dish ingredients:'}
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {aiSuggestions.map((imgUrl, i) => {
                    const isSelected = value === imgUrl;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setPreviewError(false);
                          onChange(imgUrl);
                        }}
                        className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all cursor-pointer group shadow-md ${
                          isSelected
                            ? 'border-[#dfbe6f] ring-2 ring-[#c9a24b]'
                            : 'border-[#c9a24b]/20 hover:border-[#dfbe6f]/70'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt="AI Match"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-[#030d0a]/65 backdrop-blur-[1px] flex flex-col items-center justify-center text-[#dfbe6f]">
                            <Check size={22} className="stroke-[3]" />
                            <span className="text-[10px] font-bold mt-1">
                              {isAr ? 'تم الاعتماد' : 'Selected'}
                            </span>
                          </div>
                        )}
                        <span className="absolute bottom-1 right-1 rtl:right-auto rtl:left-1 px-1.5 py-0.5 rounded text-[9px] bg-black/80 text-[#f7f4ea] backdrop-blur-sm font-medium">
                          {i === 0 ? (isAr ? 'أعلى تطابق' : 'Top Match') : `#${i + 1}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: UPLOAD FROM LOCAL DEVICE */}
        {activeMode === 'upload' && (
          <div className="space-y-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/svg+xml"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              disabled={isProcessing}
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-5 rounded-xl border border-dashed border-[#c9a24b]/40 hover:border-[#dfbe6f] bg-[#051510] hover:bg-[#0a1e18] text-[#dfbe6f] text-xs font-semibold flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-[0.99] disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <Loader2 size={22} className="animate-spin text-[#c9a24b]" />
                  <span>{isAr ? 'جاري ضغط ومعالجة الصورة بجودة ممتازة...' : 'Processing image...'}</span>
                </>
              ) : (
                <>
                  <Upload size={22} className="text-[#c9a24b]" />
                  <span>{isAr ? 'انقر لاختيار ملف من جهازك أو اسحبه هنا' : 'Click to select image or drag & drop'}</span>
                  <span className="text-[10px] text-[#8fa89b]">PNG, JPG, WebP (ضغط تلقائي للحفاظ على سرعة التصفح)</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* TAB 3: DIRECT IMAGE URL */}
        {activeMode === 'url' && (
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-[#c9a24b]/60">
              <Link2 size={14} />
            </div>
            <input
              type="text"
              value={isUploadedDataUrl ? (isAr ? 'صورة مرفوعة جاهزة (ملف محلي)' : 'Uploaded image ready') : value}
              onChange={(e) => {
                setPreviewError(false);
                onChange(e.target.value);
              }}
              readOnly={Boolean(isUploadedDataUrl)}
              placeholder={defaultPlaceholder}
              className={`w-full ps-9 pe-8 py-2 rounded-xl bg-[#051510] border border-[#c9a24b]/30 text-xs text-[#f7f4ea] outline-none focus:border-[#dfbe6f] transition-colors ${
                isUploadedDataUrl ? 'text-[#dfbe6f] font-medium' : ''
              }`}
            />
            {value && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute inset-y-0 end-0 pe-2.5 flex items-center text-[#8fa89b] hover:text-red-400 transition-colors"
                title={isAr ? 'مسح الصورة' : 'Clear image'}
              >
                <X size={14} />
              </button>
            )}
          </div>
        )}

        {/* Live Preview Box of currently active image */}
        {value && !previewError && (
          <div className="mt-3 pt-3 border-t border-[#c9a24b]/15 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#030d0a] border border-[#c9a24b]/30 shrink-0 shadow-md">
                <img
                  src={value}
                  alt="Preview"
                  onError={() => setPreviewError(true)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#f7f4ea] flex items-center gap-1.5 truncate">
                  <Sparkles size={12} className="text-[#c9a24b] shrink-0" />
                  <span>{isAr ? 'معاينة الصورة المعتمدة للصنف' : 'Active photo preview'}</span>
                </div>
                <p className="text-[10px] text-[#8fa89b] truncate max-w-xs mt-0.5">
                  {isUploadedDataUrl
                    ? isAr
                      ? 'صورة مضغوطة عالية الدقة'
                      : 'High-res compressed image'
                    : value}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClear}
              className="px-2.5 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-500/25 text-[11px] font-medium transition-colors cursor-pointer shrink-0"
            >
              {isAr ? 'إلغاء الصورة' : 'Remove'}
            </button>
          </div>
        )}

        {previewError && (
          <div className="mt-2 text-[11px] text-amber-400/90 flex items-center gap-1.5">
            <ImageIcon size={12} />
            <span>
              {isAr
                ? 'تعذر تحميل معاينة الرابط، يرجى اختيار صورة أخرى أو رفع ملف'
                : 'Could not preview image, please try another or upload a file'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
