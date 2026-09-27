import React, { useState, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, AlertCircle } from 'lucide-react';
import { MenuItem, Language, RESTAURANT_INFO } from '../data/menuData';
import { ProductImage } from './ProductImage';
import { LagunaLogo } from './LagunaLogo';
import { EASE_OUT_EXPO, TAP_SCALE } from '../animations/variants';

interface ProductCardProps {
  item: MenuItem;
  lang: Language;
  index: number;
  isFood?: boolean;
}

/**
 * Memoized ProductCard component
 * Features:
 * - Prominent LAGUNA DUBAI brand seal on every cup & dish photo
 * - Inline LAGUNA DUBAI brand mark next to product title
 * - Rich deep emerald & warm gold palette matching menu imagery
 * - GPU-accelerated motion (transform & opacity only)
 * - All details and prices displayed directly on card face
 */
export const ProductCard: React.FC<ProductCardProps> = React.memo(({
  item,
  lang,
  index,
  isFood = true,
}) => {
  const isAr = lang === 'ar';
  const shouldReduceMotion = useReducedMotion();
  const [showImageZoom, setShowImageZoom] = useState<boolean>(false);

  const isAvailable = item.isAvailable !== false;
  const primaryName = isAr ? item.name_ar : item.name_en;
  const secondaryName = isAr ? item.name_en : item.name_ar;
  const description = isAr ? item.desc_ar : item.desc_en;
  const currency = isAr ? RESTAURANT_INFO.currency_ar : RESTAURANT_INFO.currency_en;

  // Stagger capped to 0.15s to guarantee snappy rendering
  const revealDelay = shouldReduceMotion ? 0 : Math.min((index % 6) * 0.03, 0.15);

  const handleOpenZoom = useCallback(() => setShowImageZoom(true), []);
  const handleCloseZoom = useCallback(() => setShowImageZoom(false), []);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '80px' }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.3,
          delay: revealDelay,
          ease: EASE_OUT_EXPO,
        }}
        style={{
          contentVisibility: index < 4 ? 'visible' : 'auto',
          containIntrinsicSize: '360px 420px',
        }}
        id={`product-card-${item.id}`}
        className={`group relative flex flex-col justify-between rounded-2xl bg-[#0a1e18] hover:bg-[#0f2b23] border border-[#c9a24b]/20 hover:border-[#c9a24b]/50 shadow-md shadow-black/60 hover:shadow-2xl hover:shadow-black/80 transition-all duration-300 overflow-hidden transform-gpu will-change-transform ${
          !isAvailable ? 'opacity-70 grayscale-[0.3]' : ''
        }`}
      >
        {/* Top Product Image Container */}
        <div className="relative w-full overflow-hidden bg-[#030d0a]">
          <ProductImage
            src={item.image}
            alt={primaryName}
            aspectRatioClass="aspect-[16/10] sm:aspect-[16/9]"
            isFood={isFood}
            priority={index < 4}
            width={640}
            height={400}
          />

          {/* Official LAGUNA DUBAI Brand Crest Stamp (On every cup & dish photo) */}
          <div className="absolute top-2.5 right-2.5 rtl:right-auto rtl:left-2.5 z-10 pointer-events-none">
            {isFood ? (
              <LagunaLogo variant="dish-stamp" isAr={isAr} />
            ) : (
              <LagunaLogo variant="cup-stamp" isAr={isAr} />
            )}
          </div>

          {/* Laguna Signature Badge */}
          {item.isLagunaSpecial && (
            <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 px-2.5 py-1 rounded-full bg-[#030d0a]/95 backdrop-blur-md border border-[#c9a24b]/40 flex items-center gap-1 shadow-lg z-10">
              <Sparkles size={11} className="text-[#dfbe6f]" />
              <span className="text-[10px] font-bold text-[#dfbe6f] tracking-wide">
                {isAr ? 'توقيع لاجونا' : 'Laguna Signature'}
              </span>
            </div>
          )}

          {/* Sold Out / Unavailable Notice */}
          {!isAvailable && (
            <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] flex items-center justify-center z-20">
              <div className="px-3.5 py-1.5 rounded-full bg-[#1e0a0a]/90 border border-red-500/50 text-red-200 text-xs font-bold flex items-center gap-1.5 shadow-xl">
                <AlertCircle size={14} className="text-red-400" />
                <span>{isAr ? 'غير متوفر حالياً' : 'Sold Out Today'}</span>
              </div>
            </div>
          )}

          {/* Zoom button on photo */}
          <motion.button
            type="button"
            whileTap={shouldReduceMotion ? undefined : TAP_SCALE}
            onClick={handleOpenZoom}
            className="absolute bottom-2.5 right-2.5 rtl:right-auto rtl:left-2.5 w-8 h-8 rounded-full bg-[#030d0a]/90 hover:bg-[#123329] text-[#dfbe6f] border border-[#c9a24b]/35 flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer z-10 opacity-90 hover:opacity-100"
            aria-label={isAr ? 'تكبير الصورة' : 'Zoom photo'}
          >
            <Maximize2 size={13} />
          </motion.button>
        </div>

        {/* Card Content: Details displayed clearly */}
        <div className="p-4 flex-1 flex flex-col justify-between gap-3">
          <div>
            {/* Header: Item Titles & Laguna Inline Crest Stamp */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className={`text-base sm:text-lg font-bold text-[#f7f4ea] group-hover:text-[#dfbe6f] transition-colors leading-snug ${isAr ? 'font-arabic-brand' : 'font-sans'}`}>
                    {primaryName}
                  </h3>
                  {/* Laguna Crest Seal beside item */}
                  <LagunaLogo variant="dish-inline" isAr={isAr} />
                </div>
                <p className="text-[11px] sm:text-xs text-[#8fa89b] font-light mt-0.5">
                  {secondaryName}
                </p>
              </div>
            </div>

            {/* Complete Ingredients & Details */}
            {description ? (
              <div className="mt-2.5 pt-2 border-t border-[#c9a24b]/15">
                <p className="text-xs text-[#d0dfd8] leading-relaxed font-normal bg-[#061510]/70 p-2.5 rounded-xl border border-[#c9a24b]/15">
                  {description}
                </p>
              </div>
            ) : (
              <div className="mt-2 text-[11px] text-[#8fa89b]/70 italic">
                {isAr ? 'مُحضر طازجاً بأجود المكونات في لاجونا دبي' : 'Prepared fresh with premium ingredients at Laguna'}
              </div>
            )}
          </div>

          {/* Bottom Pricing Row: Displayed directly on card */}
          <div className="pt-3 border-t border-[#c9a24b]/20 flex items-center justify-between gap-2">
            {item.prices && item.prices.length > 0 ? (
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap w-full">
                {item.prices.map((p, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex-1 min-w-[70px] flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#0e261f] border border-[#c9a24b]/20"
                  >
                    <span className="text-[11px] text-[#8fa89b] font-medium">
                      {isAr ? p.label_ar : p.label_en}
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="font-bold text-[#dfbe6f] tabular-nums text-sm sm:text-base">
                        {p.price}
                      </span>
                      <span className="text-[9px] text-[#8fa89b]">{currency}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-[#8fa89b]">
                  {isAr ? 'السعر' : 'Price'}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-xl font-bold text-[#dfbe6f] tabular-nums">
                    {item.price}
                  </span>
                  <span className="text-xs text-[#8fa89b] font-medium">{currency}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.article>

      {/* Lightweight Photo Zoom Modal */}
      <AnimatePresence>
        {showImageZoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseZoom}
              className="fixed inset-0"
            />
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: EASE_OUT_EXPO }}
              className="relative max-w-2xl w-full bg-[#0a1e18] border border-[#c9a24b]/40 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <div className="relative aspect-[16/11] w-full bg-[#030d0a]">
                <ProductImage
                  src={item.image}
                  alt={primaryName}
                  aspectRatioClass="aspect-[16/11]"
                  isFood={isFood}
                  priority={true}
                  width={800}
                  height={550}
                />
                <button
                  type="button"
                  onClick={handleCloseZoom}
                  className="absolute top-3 right-3 rtl:right-auto rtl:left-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[#030d0a]/90 text-[#f7f4ea] border border-[#c9a24b]/40 cursor-pointer shadow-lg z-20"
                  aria-label={isAr ? 'إغلاق' : 'Close'}
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-[#f7f4ea]">{primaryName}</h4>
                  <p className="text-xs text-[#8fa89b]">{secondaryName}</p>
                </div>
                {item.price && (
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-[#dfbe6f]">{item.price}</span>
                    <span className="text-xs text-[#8fa89b]">{currency}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
});

ProductCard.displayName = 'ProductCard';
