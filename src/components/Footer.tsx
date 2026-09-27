import React from 'react';
import { MapPin, QrCode } from 'lucide-react';
import { Language, RESTAURANT_INFO } from '../data/menuData';
import { LagunaLogo } from './LagunaLogo';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <footer className="w-full bg-[#020a07] border-t border-[#c9a24b]/20 text-[#8fa89b] py-12 px-4 mt-16 select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
        {/* Laguna Dubai Official Logo */}
        <LagunaLogo variant="footer" isAr={isAr} />

        {/* Brand Wordmark */}
        <div className="flex flex-col items-center">
          <span className={`text-xl sm:text-2xl font-bold tracking-widest text-[#f7f4ea] ${isAr ? 'font-arabic-brand' : 'font-serif-brand uppercase'}`}>
            {isAr ? RESTAURANT_INFO.name_ar : RESTAURANT_INFO.name_en}
          </span>
          <span className="text-xs text-[#dfbe6f] tracking-wider mt-0.5">
            {isAr ? RESTAURANT_INFO.subtitle_ar : RESTAURANT_INFO.subtitle_en}
          </span>
        </div>

        {/* Tagline */}
        <p className={`text-sm text-[#f7f4ea]/85 max-w-md ${isAr ? 'font-arabic-brand font-medium' : 'font-serif-brand italic text-[#dfbe6f]'}`}>
          &ldquo;{isAr ? RESTAURANT_INFO.tagline_ar : RESTAURANT_INFO.tagline_en}&rdquo;
        </p>

        {/* Location & QR Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#8fa89b] pt-2">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[#c9a24b] shrink-0" />
            <span>{isAr ? RESTAURANT_INFO.location_ar : RESTAURANT_INFO.location_en}</span>
          </div>
          <span className="hidden sm:inline text-[#c9a24b]/30" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <QrCode size={13} className="text-[#c9a24b] shrink-0" />
            <span>{isAr ? 'قائمة طعام رقمية عبر رمز QR' : 'In-Venue Digital QR Menu'}</span>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="w-24 h-[1px] bg-[#c9a24b]/20 my-1" />

        {/* Quiet copyright */}
        <p className="text-[11px] text-[#647c72]">
          © {new Date().getFullYear()} {isAr ? 'لاجونا دبي. جميع الحقوق محفوظة.' : 'Laguna Dubai. All rights reserved.'}
        </p>
      </div>
    </footer>
  );
};
