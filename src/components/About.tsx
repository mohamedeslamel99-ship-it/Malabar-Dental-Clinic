import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';
import { translations } from '../translations';

interface AboutProps {
  lang: 'en' | 'ar';
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang];

  const highlights = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0284c7]" />,
      title: t.aboutFeature1Title,
      desc: t.aboutFeature1Desc,
    },
    {
      icon: <Heart className="w-6 h-6 text-[#06b6d4]" />,
      title: t.aboutFeature2Title,
      desc: t.aboutFeature2Desc,
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#0284c7]" />,
      title: t.aboutFeature3Title,
      desc: t.aboutFeature3Desc,
    },
    {
      icon: <Award className="w-6 h-6 text-[#06b6d4]" />,
      title: t.aboutFeature4Title,
      desc: t.aboutFeature4Desc,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden text-start">
      {/* Decorative background accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-sky-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              {/* Outer floating badge */}
              <div className={`absolute -top-6 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3 border border-slate-100 hidden sm:flex z-20 ${lang === 'ar' ? '-right-6' : '-left-6'}`}>
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#0284c7]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{t.aboutFloatingBadgeTitle}</h4>
                  <p className="text-[11px] text-slate-500">{t.aboutFloatingBadgeSub}</p>
                </div>
              </div>

              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] sm:aspect-square relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&h=800&q=80"
                  alt="Modern Consultation Room, 10th of Ramadan Dental Clinic"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlapping small image */}
              <div className={`absolute -bottom-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block z-20 ${lang === 'ar' ? '-left-8' : '-right-8'}`}>
                <img
                  src="https://images.unsplash.com/photo-1579684389782-64d84b5e9053?auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Hygienic Dental Materials"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Reassuring Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-extrabold text-[#0284c7] tracking-widest uppercase font-mono block">
                {t.aboutBadge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
                {t.aboutTitle}
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                {t.aboutP1}
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                {t.aboutP2}
              </p>
            </div>

            {/* Service Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-[15px] font-display">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
