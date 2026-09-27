import React from 'react';

export type LogoVariant =
  | 'navbar'
  | 'hero'
  | 'footer'
  | 'cup-stamp'
  | 'dish-stamp'
  | 'dish-inline'
  | 'badge'
  | 'raw-icon';

interface LagunaLogoProps {
  variant?: LogoVariant;
  className?: string;
  isAr?: boolean;
}

/**
 * Official LAGUNA DUBAI Official Identity
 * Faithfully matches the official logo provided:
 * - Iconic Burj Khalifa stepped spire standing gracefully on the left
 * - Sleek modern luxury motor yacht in the foreground angled to the right
 * - Dual dynamic ocean waves flowing beneath
 * - Elegant luxury serif "LAGUNA DUBAI" typography in champagne gold
 */
export const LagunaLogo: React.FC<LagunaLogoProps> = ({
  variant = 'navbar',
  className = '',
  isAr = false,
}) => {
  // Official Vector Mark: Burj Khalifa + Yacht + Waves + Typography
  const renderOfficialVectorMark = (size = 40, showWordmark = false) => (
    <svg
      width={size}
      height={showWordmark ? Math.round(size * 1.35) : size}
      viewBox={showWordmark ? "0 0 160 216" : "0 0 160 160"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-[0_2px_14px_rgba(223,190,111,0.45)] transition-transform duration-300 select-none"
      aria-label="LAGUNA DUBAI Official Yacht & Skyline Mark"
    >
      <defs>
        <linearGradient id="lagunaGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff5db" />
          <stop offset="25%" stopColor="#f5e1b5" />
          <stop offset="60%" stopColor="#dfbe6f" />
          <stop offset="100%" stopColor="#c9a24b" />
        </linearGradient>

        <linearGradient id="lagunaGoldHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#faedd0" />
          <stop offset="70%" stopColor="#dfbe6f" />
          <stop offset="100%" stopColor="#b8933b" />
        </linearGradient>
      </defs>

      {/* BURJ KHALIFA TOWER (Architectural Stepped Spire in Background) */}
      <g id="burj-khalifa" fill="url(#lagunaGoldMain)">
        {/* Needle Tip & Spire */}
        <polygon points="62,12 63,28 61,28" />
        <rect x="61.2" y="28" width="1.6" height="11" rx="0.4" />
        <rect x="60.2" y="39" width="3.6" height="9" rx="0.4" />

        {/* Upper Setbacks */}
        <path d="M58.5,48 L58.5,62 L65.5,62 L65.5,48 Z" />
        <path d="M55.5,62 L55.5,78 L68.5,78 L68.5,62 Z" />

        {/* Mid Setbacks */}
        <path d="M52,78 L52,96 L71,96 L71,78 Z" />
        <path d="M48.5,96 L48.5,116 L74,116 L74,96 Z" />

        {/* Lower Left Stepped Tiers (Rising behind yacht) */}
        <path d="M44,116 L44,136 L70,136 L70,116 Z" />

        {/* Architectural fluting lines and shadow depth */}
        <line x1="62" y1="28" x2="62" y2="136" stroke="#030d0a" strokeWidth="0.7" opacity="0.4" />
        <line x1="58.5" y1="48" x2="58.5" y2="136" stroke="#030d0a" strokeWidth="0.6" opacity="0.35" />
        <line x1="65.5" y1="48" x2="65.5" y2="92" stroke="#030d0a" strokeWidth="0.6" opacity="0.35" />
        <line x1="55.5" y1="62" x2="55.5" y2="136" stroke="#030d0a" strokeWidth="0.6" opacity="0.3" />
        <line x1="52" y1="78" x2="52" y2="136" stroke="#030d0a" strokeWidth="0.6" opacity="0.3" />
        <line x1="48.5" y1="96" x2="48.5" y2="136" stroke="#030d0a" strokeWidth="0.6" opacity="0.25" />
      </g>

      {/* LUXURY MOTOR YACHT (Sleek Modern Cruiser in Foreground) */}
      <g id="luxury-yacht">
        {/* Superstructure / Flying Bridge & Cabin Roof */}
        <path
          d="M70,95 L80,84 L102,84 C108,84 116,87 121,93 L126,97 L108,97 Z"
          fill="url(#lagunaGoldHighlight)"
        />
        {/* Radar Mast / Aerial on bridge */}
        <path d="M83,84 L84.2,77 L85.8,77 L87,84 Z" fill="url(#lagunaGoldMain)" />

        {/* Tinted Cabin Windows */}
        <polygon points="86,90 99,90 96,95 84,95" fill="#030d0a" />
        <polygon points="101,90 110,90 108,95 98,95" fill="#030d0a" />

        {/* Yacht Hull (Aerodynamic Bow & Chined Sheerline) */}
        <path
          d="M55,103 L124,103 C131,103 142,99 147,94 C141,104 130,113 112,116 L62,116 C57,116 54,108 55,103 Z"
          fill="url(#lagunaGoldMain)"
        />

        {/* Three Luxury Portholes */}
        <circle cx="96" cy="109" r="1.8" fill="#030d0a" />
        <circle cx="108" cy="108.5" r="1.8" fill="#030d0a" />
        <circle cx="120" cy="107.5" r="1.8" fill="#030d0a" />

        {/* Elegant Hull Deck Line */}
        <path d="M64,102.5 L133,102.5" stroke="url(#lagunaGoldHighlight)" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* DUAL MARINE WAVES (Gracefully Flowing Beneath) */}
      <g id="ocean-waves">
        {/* Upper Flowing Wave Ribbon */}
        <path
          d="M20,121 C44,114 68,123 94,121 C120,118 142,110 154,102 C141,115 116,127 90,127 C64,127 40,123 20,121 Z"
          fill="url(#lagunaGoldHighlight)"
        />

        {/* Lower Flowing Wave Ribbon */}
        <path
          d="M28,127 C51,121 75,129 101,126 C122,124 140,118 149,112 C137,123 114,133 93,133 C67,133 42,128 28,127 Z"
          fill="url(#lagunaGoldMain)"
        />
      </g>

      {/* Prominent Official Wordmark: LAGUNA DUBAI */}
      {showWordmark && (
        <g id="brand-typography">
          <text
            x="80"
            y="172"
            textAnchor="middle"
            fill="url(#lagunaGoldHighlight)"
            fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
            fontSize="19"
            fontWeight="700"
            letterSpacing="4"
          >
            LAGUNA DUBAI
          </text>
          <text
            x="80"
            y="194"
            textAnchor="middle"
            fill="#dfbe6f"
            fontFamily="'Cairo', system-ui, sans-serif"
            fontSize="9.5"
            fontWeight="600"
            letterSpacing="2.5"
          >
            مطعم وكافيه
          </text>
        </g>
      )}
    </svg>
  );

  // 1. Raw Vector Icon Mark
  if (variant === 'raw-icon') {
    return renderOfficialVectorMark(38, false);
  }

  // 2. Cup Stamp (Brand seal on drinks/cups)
  if (variant === 'cup-stamp') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#030d0a]/95 backdrop-blur-md border border-[#c9a24b]/40 shadow-lg shadow-black/80 group-hover:border-[#dfbe6f] transition-all transform-gpu cursor-pointer ${className}`}
        title="LAGUNA DUBAI Official Cup Branding"
      >
        {renderOfficialVectorMark(18, false)}
        <span className="text-[10px] font-bold tracking-widest text-[#dfbe6f] uppercase font-serif-brand">
          LAGUNA
        </span>
      </div>
    );
  }

  // 3. Dish Stamp (Brand seal on gourmet dish photos)
  if (variant === 'dish-stamp') {
    return (
      <div
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#030d0a]/95 backdrop-blur-md border border-[#c9a24b]/40 shadow-lg shadow-black/80 group-hover:border-[#dfbe6f] transition-all transform-gpu cursor-pointer ${className}`}
        title="LAGUNA DUBAI Culinary Seal"
      >
        {renderOfficialVectorMark(18, false)}
        <span className="text-[10px] font-bold tracking-widest text-[#dfbe6f] uppercase font-serif-brand">
          DUBAI
        </span>
      </div>
    );
  }

  // 4. Dish Inline (Brand crest next to product titles)
  if (variant === 'dish-inline') {
    return (
      <span
        className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#0a1e18] border border-[#c9a24b]/30 text-[10px] text-[#dfbe6f] font-serif-brand font-semibold select-none ${className}`}
        title="Official LAGUNA Dish"
      >
        {renderOfficialVectorMark(12, false)}
        <span className="tracking-wider">LAGUNA</span>
      </span>
    );
  }

  // 5. Badge Variant (Used in admin header)
  if (variant === 'badge') {
    return (
      <div className={`flex items-center gap-2 select-none ${className}`}>
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#0a1e18] to-[#030d0a] border border-[#c9a24b]/40 flex items-center justify-center p-1 shadow-md shadow-black/60">
          {renderOfficialVectorMark(30, false)}
        </div>
        <div className="flex flex-col text-start">
          <span className="text-xs font-bold tracking-widest text-[#f7f4ea] font-serif-brand uppercase">
            LAGUNA DUBAI
          </span>
          <span className="text-[10px] text-[#dfbe6f]">
            {isAr ? 'المطعم والكافيه' : 'Restaurant & Café'}
          </span>
        </div>
      </div>
    );
  }

  // 6. Navbar Variant (Clean, non-cluttered: "لاجونا" only as requested)
  if (variant === 'navbar') {
    return (
      <div className={`flex items-center gap-2 sm:gap-2.5 select-none ${className}`}>
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-b from-[#0a1e18] to-[#020a07] border border-[#c9a24b]/45 flex items-center justify-center p-1 shadow-md shadow-black/80 hover:border-[#dfbe6f] transition-all shrink-0">
          {renderOfficialVectorMark(30, false)}
        </div>
        <span className={`text-base sm:text-xl font-bold tracking-wider text-[#f7f4ea] group-hover:text-[#dfbe6f] transition-colors leading-none ${isAr ? 'font-arabic-brand' : 'font-serif-brand uppercase'}`}>
          {isAr ? 'لاجونا' : 'LAGUNA'}
        </span>
      </div>
    );
  }

  // 7. Hero Variant (Majestic large central emblem for the landing section)
  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center justify-center text-center select-none mb-3 ${className}`}>
        <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-105">
          {/* Subtle Ambient Golden Halo behind emblem */}
          <div className="absolute inset-0 bg-[#c9a24b]/15 blur-2xl rounded-full scale-125 pointer-events-none" />
          
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-b from-[#0a1e18]/90 via-[#051510]/95 to-[#020a07] border border-[#c9a24b]/50 p-2.5 sm:p-3 shadow-2xl shadow-black flex items-center justify-center backdrop-blur-md">
            {renderOfficialVectorMark(110, false)}
          </div>
        </div>
      </div>
    );
  }

  // 8. Footer Variant (Warm champagne gold brand mark)
  if (variant === 'footer') {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        <div className="w-16 h-16 rounded-2xl bg-[#030d0a] border border-[#c9a24b]/30 flex items-center justify-center p-1.5 shadow-lg shadow-black/70 mb-2">
          {renderOfficialVectorMark(48, false)}
        </div>
      </div>
    );
  }

  return renderOfficialVectorMark(40, false);
};
