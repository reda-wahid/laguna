import React, { useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Utensils, Wine, Camera, Sparkles } from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  layoutId?: string;
  className?: string;
  aspectRatioClass?: string;
  isFood?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
}

/**
 * High-performance, zero-CLS Product Image Component
 *
 * Optimizations:
 * 1. Explicit width & height prevents Cumulative Layout Shift (CLS).
 * 2. Automatic fallback pipeline: tries .webp -> .jpg -> tasteful branded card.
 * 3. Priority loading for viewport items ('eager' + high fetchPriority), lazy loading for offscreen items.
 * 4. Tasteful branded placeholder card (deep emerald background, gold plate/fork icon, Laguna crest).
 */
export const ProductImage: React.FC<ProductImageProps> = React.memo(({
  src,
  alt,
  layoutId,
  className = '',
  aspectRatioClass = 'aspect-[16/10]',
  isFood = true,
  priority = false,
  width = 640,
  height = 400,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [triedFallback, setTriedFallback] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  // If initial src changes, reset state
  React.useEffect(() => {
    setCurrentSrc(src);
    setTriedFallback(false);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleError = useCallback(() => {
    // If WebP failed and we haven't tried JPG yet, attempt JPG fallback
    if (!triedFallback && currentSrc.endsWith('.webp')) {
      setTriedFallback(true);
      setCurrentSrc(currentSrc.replace(/\.webp$/, '.jpg'));
    } else if (!triedFallback && currentSrc.endsWith('.jpg')) {
      setTriedFallback(true);
      setCurrentSrc(currentSrc.replace(/\.jpg$/, '.png'));
    } else {
      // Show tasteful branded placeholder card
      setHasError(true);
    }
  }, [currentSrc, triedFallback]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
  }, []);

  const FallbackIcon = isFood ? Utensils : Wine;

  return (
    <div
      className={`relative overflow-hidden bg-[#030d0a] ${aspectRatioClass} ${className} select-none`}
      style={{
        contentVisibility: priority ? 'visible' : 'auto',
        containIntrinsicSize: `${width}px ${height}px`,
      }}
    >
      {/* 1. Low-cost subtle shimmer skeleton while image is loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#030d0a] via-[#0a1e18] to-[#030d0a] animate-pulse flex flex-col items-center justify-center p-3 text-center z-0">
          <div className="w-10 h-10 rounded-full bg-[#0e261f]/80 border border-[#c9a24b]/25 flex items-center justify-center mb-1.5 shadow-inner">
            <FallbackIcon size={18} className="text-[#c9a24b]/70 animate-pulse" />
          </div>
          <span className="text-[9px] tracking-widest text-[#dfbe6f]/80 uppercase font-serif-brand">
            LAGUNA DUBAI
          </span>
        </div>
      )}

      {/* 2. Tasteful branded placeholder card (Deep Emerald background + Gold plate/fork icon) */}
      {hasError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[#071d16] via-[#030d0a] to-[#020a07] flex flex-col items-center justify-center p-3 text-center border border-[#c9a24b]/20 group">
          {/* Subtle decorative background pattern */}
          <div className="absolute inset-2 border border-dashed border-[#c9a24b]/15 rounded-xl pointer-events-none" />

          {/* Gold Plate/Fork or Drink Insignia */}
          <div className="relative w-12 h-12 rounded-full bg-[#0a1e18] border border-[#c9a24b]/40 flex items-center justify-center mb-2 shadow-lg shadow-black/80 group-hover:scale-105 transition-transform duration-300">
            <FallbackIcon size={22} className="text-[#dfbe6f]" />
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c9a24b] text-[#030d0a] flex items-center justify-center shadow">
              <Camera size={9} />
            </div>
          </div>

          <span className="relative text-[11px] font-bold text-[#dfbe6f] font-serif-brand tracking-wider uppercase">
            LAGUNA DUBAI
          </span>

          {/* Clearly-marked tasteful indicator that photo is pending */}
          <div className="relative mt-1 px-2.5 py-0.5 rounded-full bg-[#0f2b23]/90 border border-[#c9a24b]/30 inline-flex items-center gap-1 shadow-sm">
            <Sparkles size={9} className="text-[#c9a24b]" />
            <span className="text-[9px] text-[#dfbe6f] font-medium tracking-wide">
              قريباً صُوَر الصنف
            </span>
          </div>

          <span className="relative text-[10px] text-[#8fa89b]/70 mt-1 max-w-[150px] truncate">
            {alt}
          </span>
        </div>
      ) : (
        /* 3. Real Product Photography Image */
        <motion.img
          layoutId={shouldReduceMotion ? undefined : layoutId}
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ease-out transform-gpu ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Measured vignette scrim to enhance card typography contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030d0a]/90 via-transparent to-black/20 pointer-events-none" />

      {/* Subtle luxury edge glow */}
      <div className="absolute inset-0 border border-white/5 rounded-t-2xl pointer-events-none" />
    </div>
  );
});

ProductImage.displayName = 'ProductImage';
