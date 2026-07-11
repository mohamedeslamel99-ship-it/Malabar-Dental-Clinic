import { Facebook, Instagram, Twitter, Mail, Shield } from 'lucide-react';
import { CLINIC_CONTACT } from '../data';
import { translations } from '../translations';

interface FooterProps {
  lang: 'en' | 'ar';
  onSectionClick: (id: string) => void;
}

export default function Footer({ lang, onSectionClick }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const handleLinkClick = (id: string) => {
    onSectionClick(id);
  };

  const specialties = isRtl ? [
    'حشوات الأسنان العامة والليزيرية',
    'علاج أقنية الجذور المتقدم بدون ألم',
    'تقويم الأسنان المعدني والشفاف (إنفيسلاين)',
    'زراعة الأسنان الموجهة بالكمبيوتر',
    'طب أسنان الأطفال ومنطقة الألعاب الخاصة',
    'تبييض الأسنان بالليزر والعدسات التجميلية'
  ] : [
    'General & Laser Teeth Fillings',
    'Advanced Painless Root Canals',
    'Metal, Ceramic, and Invisalign Braces',
    'Premium Computer-Guided Implants',
    'Child Dental Care & Pediatric Zone',
    'Zoom teeth whitening & Veneers'
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-850 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0284c7] to-[#06b6d4] flex items-center justify-center text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2c-.52 0-1.02.24-1.34.66C9.11 4.75 6.91 7.24 5.43 9.4 3.32 12.47 2 15.13 2 17.5c0 3.03 2.47 5.5 5.5 5.5 2.03 0 3.75-1.1 4.5-2.68.75 1.58 2.47 2.68 4.5 2.68 3.03 0 5.5-2.47 5.5-5.5 0-2.37-1.32-5.03-3.43-8.1-1.48-2.16-3.68-4.65-5.23-6.74C13.02 2.24 12.52 2 12 2zm-4.5 19c-1.93 0-3.5-1.57-3.5-3.5 0-1.56.96-3.63 2.76-6.26C8.01 9.42 9.77 7.28 11 5.76c.48.62 1.09 1.44 1.76 2.38-.85.83-1.63 1.83-2.17 2.94-.9 1.87-.79 3.86.34 5.14.7.79 1.72 1.28 2.85 1.28h.22c-.6 1.93-2.28 3.5-4.5 3.5z" />
              </svg>
            </div>
            <div>
              <span className="text-base font-bold font-display text-white">
                {isRtl ? 'العاشر' : 'RAMADAN'}{' '}
                <span className="text-[#38bdf8] text-xs">
                  {isRtl ? 'من رمضان' : 'DENTAL'}
                </span>
              </span>
              <p className="text-[9px] uppercase tracking-wider text-slate-500 font-mono">
                {isRtl ? 'مدينة العاشر من رمضان، مصر' : '10th of Ramadan City, Egypt'}
              </p>
            </div>
          </div>
          
          <p className="text-slate-400 leading-relaxed max-w-sm text-[13px]">
            {t.footerSub}
          </p>

          {/* Social media handles */}
          <div className="flex gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0284c7] hover:text-white flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#06b6d4] hover:text-white flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sky-400 hover:text-white flex items-center justify-center transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href={`mailto:${CLINIC_CONTACT.email}`} className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0284c7] hover:text-white flex items-center justify-center transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider">
            {t.footerQuickLinks}
          </h4>
          <ul className="space-y-2 text-[13px]">
            <li>
              <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-start">
                {t.navHome}
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors cursor-pointer text-start">
                {isRtl ? 'عن العيادة' : 'About Us'}
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors cursor-pointer text-start">
                {t.navServices}
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('doctors')} className="hover:text-white transition-colors cursor-pointer text-start">
                {t.navDoctors}
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('why-choose-us')} className="hover:text-white transition-colors cursor-pointer text-start">
                {t.navWhyUs}
              </button>
            </li>
          </ul>
        </div>

        {/* Treatments Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider">
            {t.footerSpecialties}
          </h4>
          <ul className="space-y-2 text-[13px]">
            {specialties.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* DHA Legal Disclaimer & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex items-center gap-3 bg-slate-950/40 p-4 rounded-xl border border-slate-800 max-w-md">
          <Shield className="w-5 h-5 text-sky-400 shrink-0" />
          <p className="text-[10px] text-slate-500 leading-normal font-normal">
            <strong>DHA License Disclaimer:</strong> {t.footerDhaDisclaimer}
          </p>
        </div>
        
        <div className={`space-y-1 ${isRtl ? 'text-start md:text-left' : 'text-start md:text-right'}`}>
          <p className="text-slate-500 font-medium text-[11px]">
            &copy; {currentYear} {t.footerCopyright}
          </p>
          <p className="text-slate-600 text-[10px]">
            {t.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
