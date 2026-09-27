import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, Sparkles, Utensils, Wine } from 'lucide-react';
import { MenuItem, Language, RESTAURANT_INFO } from '../data/menuData';
import { ProductImage } from './ProductImage';
import { LagunaLogo } from './LagunaLogo';
import { EASE_OUT_EXPO, SOFT_SPRING, TAP_SCALE } from '../animations/variants';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
  lang: Language;
  categoryName?: string;
  isFood?: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  item,
  onClose,
  lang,
  categoryName,
  isFood = true,
}) => {
  const isAr = lang === 'ar';
  const shouldReduceMotion = useReducedMotion();

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  const primaryName = isAr ? item.name_ar : item.name_en;
  const secondaryName = isAr ? item.name_en : item.name_ar;
  const description = isAr ? item.desc_ar : item.desc_en;
  const currency = isAr ? RESTAURANT_INFO.currency_ar : RESTAURANT_INFO.currency_en;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop overlay with fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: EASE_OUT_EXPO }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 16 }}
        transition={shouldReduceMotion ? { duration: 0 } : SOFT_SPRING}
        className="relative w-full max-w-lg bg-[#0a231b] border-t sm:border border-[#c9a24b]/30 rounded-t-3xl sm:rounded-3xl shadow-2xl shadow-black/90 overflow-hidden z-10 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-item-title"
      >
        {/* Subtle Mobile Drag Indicator */}
        <div className="sm:hidden w-12 h-1 bg-[#c9a24b]/30 rounded-full mx-auto mt-2.5 mb-1" />

        {/* Hero Image with Shared-Element layoutId */}
        <div className="relative w-full overflow-hidden shrink-0">
          <ProductImage
            src={item.image}
            alt={primaryName}
            layoutId={`product-image-${item.id}`}
            aspectRatioClass="aspect-[16/10] sm:aspect-[16/9]"
            isFood={isFood}
            priority={true}
          />

          {/* Close Floating Button with >= 44px tap target */}
          <motion.button
            type="button"
            whileTap={shouldReduceMotion ? undefined : TAP_SCALE}
            onClick={onClose}
            className="absolute top-3 right-3 rtl:right-auto rtl:left-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[#061611]/85 hover:bg-[#143d30] text-[#f5f6f2] border border-[#c9a24b]/40 shadow-lg backdrop-blur-md transition-colors cursor-pointer z-20"
            aria-label={isAr ? 'إغلاق النافذة' : 'Close modal'}
          >
            <X size={18} />
          </motion.button>

          {/* Laguna Signature Badge overlay */}
          {item.isLagunaSpecial && (
            <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 px-3 py-1.5 rounded-full bg-[#061611]/90 backdrop-blur-md border border-[#c9a24b]/40 flex items-center gap-1.5 shadow-lg">
              <Sparkles size={13} className="text-[#dfbe6f]" />
              <span className="text-xs font-semibold text-[#dfbe6f] tracking-wide">
                {isAr ? 'توقيع لاجونا دبي' : 'Laguna Signature'}
              </span>
            </div>
          )}
        </div>

        {/* Content Body with slight staggered fade */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.35,
            delay: shouldReduceMotion ? 0 : 0.08,
            ease: EASE_OUT_EXPO,
          }}
          className="p-5 sm:p-6 overflow-y-auto space-y-4"
        >
          {/* Category Breadcrumb */}
          {categoryName && (
            <div className="flex items-center gap-1.5 text-xs text-[#c9a24b] font-medium uppercase tracking-wider">
              {isFood ? <Utensils size={13} /> : <Wine size={13} />}
              <span>{categoryName}</span>
            </div>
          )}

          {/* Titles */}
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2
                id="modal-item-title"
                className={`text-xl sm:text-2xl font-bold text-[#f5f6f2] leading-snug ${
                  isAr ? 'font-arabic-brand' : 'font-serif-brand'
                }`}
              >
                {primaryName}
              </h2>
              <LagunaLogo variant="dish-inline" isAr={isAr} />
            </div>
            <p className="text-sm text-[#94a39b] font-light mt-0.5">
              {secondaryName}
            </p>
          </div>

          {/* Description & Ingredients */}
          {description ? (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#c9a24b] font-semibold mb-1.5">
                {isAr ? 'المكونات والتحضير' : 'Ingredients & Details'}
              </h4>
              <p className="text-sm md:text-base text-[#f5f6f2]/90 leading-relaxed bg-[#061611]/50 p-3.5 rounded-xl border border-[#c9a24b]/15">
                {description}
              </p>
            </div>
          ) : (
            <p className="text-xs text-[#94a39b] italic">
              {isAr
                ? 'مُحضر طازجاً بأجود المكونات حسب معايير لاجونا دبي الفاخرة.'
                : 'Handcrafted fresh with artisanal ingredients to Laguna Dubai standards.'}
            </p>
          )}

          {/* Pricing Box */}
          <div className="bg-[#0e2d23] border border-[#c9a24b]/25 rounded-2xl p-4">
            <h4 className="text-xs uppercase tracking-wider text-[#c9a24b] font-semibold mb-2.5">
              {isAr ? 'الأسعار والخيارات' : 'Pricing & Options'}
            </h4>

            {item.prices && item.prices.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {item.prices.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-3 bg-[#061611]/70 border border-[#c9a24b]/20 rounded-xl text-center"
                  >
                    <span className="text-xs text-[#94a39b] font-medium mb-1">
                      {isAr ? p.label_ar : p.label_en}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#dfbe6f] tabular-nums">
                        {p.price}
                      </span>
                      <span className="text-xs text-[#94a39b] font-medium">{currency}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-baseline justify-between py-1">
                <span className="text-sm text-[#94a39b]">
                  {isAr ? 'السعر' : 'Price'}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-[#dfbe6f] tabular-nums">
                    {item.price}
                  </span>
                  <span className="text-sm text-[#94a39b] font-medium">{currency}</span>
                </div>
              </div>
            )}
          </div>

          {/* Server notice */}
          <div className="flex items-center justify-between text-xs text-[#94a39b]/80 border-t border-[#c9a24b]/10 pt-3">
            <span>{isAr ? 'للطلب: يُرجى إبلاغ طاقم الخدمة' : 'To order: Please inform your server'}</span>
            <span className="text-[#c9a24b]/70 font-serif-brand">LAGUNA DUBAI</span>
          </div>
        </motion.div>

        {/* Footer Return Button */}
        <div className="p-4 bg-[#061611]/90 border-t border-[#c9a24b]/15 flex items-center justify-end">
          <motion.button
            type="button"
            whileTap={shouldReduceMotion ? undefined : TAP_SCALE}
            onClick={onClose}
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-[#143d30] hover:bg-[#1a4f3f] text-[#c9a24b] hover:text-[#f5f6f2] border border-[#c9a24b]/30 font-medium text-sm transition-all cursor-pointer shadow-md shadow-black/30"
          >
            {isAr ? 'العودة للقائمة' : 'Back to Menu'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
