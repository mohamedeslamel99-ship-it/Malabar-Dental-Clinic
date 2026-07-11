import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, Phone, Clock, Globe } from 'lucide-react';
import { CLINIC_CONTACT } from '../data';
import { translations } from '../translations';

interface HeaderProps {
  lang: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
  onBookClick: () => void;
  onSectionClick: (sectionId: string) => void;
  activeSection: string;
  bookingCount: number;
}

export default function Header({
  lang,
  onLanguageChange,
  onBookClick,
  onSectionClick,
  activeSection,
  bookingCount,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome, id: 'home' },
    { name: t.navServices, id: 'services' },
    { name: t.navDoctors, id: 'doctors' },
    { name: t.navWhyUs, id: 'why-choose-us' },
    { name: t.navContact, id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onSectionClick(id);
  };

  const toggleLanguage = () => {
    onLanguageChange(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      {/* Top Utility Banner */}
      <div className="bg-[#0f172a] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/50 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-[#38bdf8] transition-colors cursor-pointer">
              <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span className="flex items-center gap-1">
                <span>{t.callClinic}:</span>
                <strong dir="ltr">{CLINIC_CONTACT.phone}</strong>
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#06b6d4]" />
              <span>{t.workingHoursValue}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">{t.locationLabel}</span>
            <a
              href={CLINIC_CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="bg-[#128c7e] hover:bg-[#075e54] text-white px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors text-[11px] font-bold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.whatsAppChat}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header navigation */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Clinic Brand/Logo */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0284c7] to-[#06b6d4] flex items-center justify-center text-white shadow-md shadow-sky-200 group-hover:scale-105 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2c-.52 0-1.02.24-1.34.66C9.11 4.75 6.91 7.24 5.43 9.4 3.32 12.47 2 15.13 2 17.5c0 3.03 2.47 5.5 5.5 5.5 2.03 0 3.75-1.1 4.5-2.68.75 1.58 2.47 2.68 4.5 2.68 3.03 0 5.5-2.47 5.5-5.5 0-2.37-1.32-5.03-3.43-8.1-1.48-2.16-3.68-4.65-5.23-6.74C13.02 2.24 12.52 2 12 2zm-4.5 19c-1.93 0-3.5-1.57-3.5-3.5 0-1.56.96-3.63 2.76-6.26C8.01 9.42 9.77 7.28 11 5.76c.48.62 1.09 1.44 1.76 2.38-.85.83-1.63 1.83-2.17 2.94-.9 1.87-.79 3.86.34 5.14.7.79 1.72 1.28 2.85 1.28h.22c-.6 1.93-2.28 3.5-4.5 3.5z" />
              </svg>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold font-display tracking-tight text-slate-800">
                  {isRtl ? 'العاشر' : 'RAMADAN'}
                </span>
                <span className="text-xs font-semibold text-[#0284c7] tracking-wider font-display">
                  {isRtl ? 'من رمضان' : 'DENTAL'}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                {t.logoSub}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[14px] font-bold tracking-wide transition-colors relative py-1.5 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-[#0284c7]'
                    : 'text-slate-600 hover:text-[#0284c7]'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0284c7] to-[#06b6d4]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Language Switcher, CTA, and Bookings badge */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selection Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0284c7] bg-slate-100 hover:bg-sky-50 px-3 py-2 rounded-xl transition-all cursor-pointer font-bold border border-slate-200/50"
            >
              <Globe className="w-4 h-4 text-[#06b6d4]" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {bookingCount > 0 && (
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={() => handleLinkClick('contact')}
                className="flex items-center gap-1.5 text-xs bg-cyan-50 text-cyan-700 px-3 py-2 rounded-xl border border-cyan-100 font-bold cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping" />
                <span>{t.activeBookings} ({bookingCount})</span>
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookClick}
              className="bg-gradient-to-r from-[#0284c7] to-[#06b6d4] text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-sky-100 hover:shadow-lg hover:shadow-sky-200 transition-all cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookAppointment}</span>
            </motion.button>
          </div>

          {/* Mobile Hamburguer and Language toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="text-xs bg-slate-100 px-2.5 py-1.5 rounded-lg font-bold border border-slate-200/50 flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5 text-sky-500" />
              <span>{lang === 'en' ? 'AR' : 'EN'}</span>
            </button>
            
            {bookingCount > 0 && (
              <button
                onClick={() => handleLinkClick('contact')}
                className="bg-cyan-50 text-cyan-700 text-xs px-2 py-1.5 rounded-lg font-bold border border-cyan-100"
              >
                {bookingCount}
              </button>
            )}
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-[#0284c7] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[56px] z-40 bg-white shadow-xl border-b border-slate-100 lg:hidden"
          >
            <div className="px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto text-start">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block w-full text-start py-2.5 px-3 rounded-lg text-[15px] font-bold transition-colors ${
                      activeSection === link.id
                        ? 'bg-sky-50 text-[#0284c7]'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#0284c7]'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="text-xs text-slate-500 space-y-1.5 px-3">
                  <p className="font-bold text-slate-700">📞 {t.callClinic}: {CLINIC_CONTACT.phone}</p>
                  <p>📍 {t.locationLabel}</p>
                  <p>⏰ {t.workingHoursValue}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 px-1 pt-2">
                  <button
                    onClick={toggleLanguage}
                    className="bg-slate-100 text-slate-700 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1 border border-slate-200"
                  >
                    <Globe className="w-4 h-4 text-sky-500" />
                    <span>{lang === 'en' ? 'العربية (Arabic)' : 'English'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onBookClick();
                    }}
                    className="bg-gradient-to-r from-[#0284c7] to-[#06b6d4] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-sky-100"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.bookAppointment}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
