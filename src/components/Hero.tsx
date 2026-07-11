import { motion } from 'motion/react';
import { Phone, Calendar, ArrowRight, ArrowLeft, CheckCircle2, MessageSquare } from 'lucide-react';
import { CLINIC_CONTACT } from '../data';
import { translations } from '../translations';

interface HeroProps {
  lang: 'en' | 'ar';
  onBookClick: () => void;
}

export default function Hero({ lang, onBookClick }: HeroProps) {
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const highlights = [
    t.heroHighlightPainless,
    t.heroHighlightDocs,
    t.heroHighlightMetro,
    t.heroHighlightPlans,
  ];

  return (
    <section id="home" className="relative bg-slate-900 min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden text-start">
      {/* Background Image Layer with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80"
          alt="Modern Dental Clinic 10th of Ramadan City Egypt"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        {/* Mirror gradients for LTR vs RTL */}
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent`} />
        <div className={`absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-900/90 to-slate-950`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy and Buttons */}
        <div className="lg:col-span-7 space-y-8">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-[#38bdf8] text-xs font-bold tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>{t.heroBadge}</span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display"
              style={{ fontFamily: isRtl ? 'Tajawal, sans-serif' : undefined }}
            >
              {t.heroTitleStart}
              <span className="bg-gradient-to-r from-[#38bdf8] to-[#06b6d4] bg-clip-text text-transparent">
                {t.heroTitleHighlight}
              </span>
              {t.heroTitleEnd}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 font-normal leading-relaxed max-w-xl"
            >
              {t.heroSub}
            </motion.p>
          </div>

          {/* Quick trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg"
          >
            {highlights.map((text, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-slate-300 text-[14px]">
                <CheckCircle2 className="w-5 h-5 text-[#06b6d4] shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Call-to-Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md pt-2"
          >
            <button
              onClick={onBookClick}
              className="bg-gradient-to-r from-[#0284c7] to-[#06b6d4] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>{t.heroBtnBook}</span>
              {isRtl ? (
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>

            <a
              href={CLINIC_CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="bg-[#128c7e] hover:bg-[#0f7c6e] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-white text-[#128c7e]" />
              <span>{t.heroBtnWhatsApp}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Visual Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#38bdf8] to-[#06b6d4] opacity-20 blur-xl" />

            {/* Main Visual Frame */}
            <div className="relative bg-slate-950/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{t.heroSafeTitle}</h3>
                    <p className="text-xs text-slate-400">{t.heroSafeSub}</p>
                  </div>
                </div>

                {/* Patient Smiles Counter Widget */}
                <div className="flex justify-between items-center bg-slate-900/60 rounded-xl p-4 border border-slate-800/40">
                  <div>
                    <span className="text-3xl font-extrabold text-white font-display" style={{ direction: 'ltr', display: 'inline-block' }}>
                      {t.heroSmilesNum}
                    </span>
                    <p className="text-[11px] text-slate-400 font-bold">{t.heroSmilesLabel}</p>
                  </div>
                  <div className="flex -space-x-2.5">
                    <img className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="Patient" />
                    <img className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" alt="Patient" />
                    <img className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" alt="Patient" />
                  </div>
                </div>

                {/* Center Location Widget */}
                <div className="flex items-start gap-3 bg-[#0284c7]/10 p-4 rounded-xl border border-[#0284c7]/30 text-slate-200 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1 animate-pulse" />
                  <div>
                    <p className="font-bold text-[#38bdf8]">{t.heroConvenienceTitle}</p>
                    <p className="text-slate-400 leading-normal mt-0.5">{t.heroConvenienceSub}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
