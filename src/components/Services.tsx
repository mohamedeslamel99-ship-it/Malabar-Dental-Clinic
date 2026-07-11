import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Layers, ShieldCheck, Smile, Baby, Clock, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { getServices } from '../data';
import { ServiceItem } from '../types';
import { translations } from '../translations';

interface ServicesProps {
  lang: 'en' | 'ar';
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ lang, onSelectService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const services = getServices(lang);

  // Helper to get corresponding Lucide icon
  const getIcon = (iconName: string, className = 'w-6 h-6') => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className={`${className} text-[#0284c7]`} />;
      case 'Layers':
        return <Layers className={`${className} text-[#06b6d4]`} />;
      case 'ShieldCheck':
        return <ShieldCheck className={`${className} text-[#0284c7]`} />;
      case 'Smile':
        return <Smile className={`${className} text-[#06b6d4]`} />;
      case 'Baby':
        return <Baby className={`${className} text-[#0284c7]`} />;
      default:
        return <Sparkles className={`${className} text-[#0284c7]`} />;
    }
  };

  const handleBookService = (title: string) => {
    onSelectService(title);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#0284c7] tracking-widest uppercase font-mono bg-sky-50 px-3 py-1.5 rounded-full inline-block border border-sky-100">
            {t.servicesBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {t.servicesTitle}
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            {t.servicesSub}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-slate-100/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-sky-50 group-hover:border-sky-100 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md flex items-center gap-1" dir="ltr">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-800 mb-3 group-hover:text-[#0284c7] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-[14px] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits Bullet Previews */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#06b6d4] shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-500 hover:text-[#0284c7] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{t.servicesLearnMore}</span>
                  {isRtl ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 rotate-180">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  ) : (
                    <ArrowRight className="w-3 h-3" />
                  )}
                </button>
                <button
                  onClick={() => handleBookService(service.title)}
                  className="bg-sky-50 hover:bg-sky-100 text-[#0284c7] text-xs font-bold px-3 py-1.5 rounded-lg border border-sky-100/30 transition-colors cursor-pointer"
                >
                  {t.servicesBookBtn}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detail Overlay/Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden p-6 sm:p-8 z-10 text-start"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className={`absolute top-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer ${isRtl ? 'left-4' : 'right-4'}`}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100 shrink-0">
                    {getIcon(selectedService.iconName, 'w-7 h-7')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold font-display text-slate-800">
                      {selectedService.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium font-mono mt-0.5" dir="ltr">
                      ⏱️ {t.servicesDuration}: {selectedService.duration}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                      {t.servicesTitleOverview}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 font-mono">
                      {t.servicesTitleHighlights}
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedService.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex gap-4">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
                    >
                      {t.servicesCloseBtn}
                    </button>
                    <button
                      onClick={() => handleBookService(selectedService.title)}
                      className="flex-1 bg-gradient-to-r from-[#0284c7] to-[#06b6d4] text-white py-3 rounded-xl font-semibold text-sm shadow-md shadow-sky-100 hover:shadow-lg transition-all cursor-pointer"
                    >
                      {t.servicesBookThisBtn}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
