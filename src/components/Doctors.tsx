import { motion } from 'motion/react';
import { Calendar, Award, Languages, ThumbsUp } from 'lucide-react';
import { getDoctors } from '../data';
import { translations } from '../translations';

interface DoctorsProps {
  lang: 'en' | 'ar';
  onBookClick: () => void;
}

export default function Doctors({ lang, onBookClick }: DoctorsProps) {
  const t = translations[lang];
  const doctors = getDoctors(lang);
  const isRtl = lang === 'ar';

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white relative text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#06b6d4] tracking-widest uppercase font-mono bg-cyan-50 px-3 py-1.5 rounded-full inline-block border border-cyan-100">
            {t.docsBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {t.docsTitle}
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            {t.docsSub}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 group"
            >
              {/* Image Frame */}
              <div className="aspect-square bg-slate-100 overflow-hidden relative">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Years Experience Floating Tag */}
                <span className={`absolute bottom-4 bg-[#0f172a]/95 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-slate-800 ${isRtl ? 'right-4' : 'left-4'}`}>
                  {doc.experience}
                </span>
              </div>

              {/* Doctor Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-800 group-hover:text-[#0284c7] transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-[#0284c7] text-xs font-semibold font-display tracking-wide mt-0.5">
                    {doc.role}
                  </p>
                </div>

                {/* Specific details */}
                <div className="space-y-2 text-xs text-slate-600 border-t border-slate-50 pt-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-medium text-slate-700">{doc.education}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Languages className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-700">{t.docsSpeaks}: </span>
                      <span>{doc.languages.join(isRtl ? ' ، ' : ', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Subspecialty badge list */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {doc.specialty.split(' & ').map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-sky-50 text-[#0284c7] text-[10px] font-semibold px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <button
                  onClick={onBookClick}
                  className="w-full mt-2 bg-slate-50 hover:bg-sky-50 group-hover:bg-[#0284c7] group-hover:text-white group-hover:border-[#0284c7] text-slate-700 border border-slate-200/60 rounded-xl py-3 text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t.docsRequestBtn}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Patient Care Guarantee Ribbon */}
        <div className="mt-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg shadow-sky-100">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest font-mono text-cyan-100 flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full w-fit">
                <ThumbsUp className="w-3 h-3 fill-cyan-100 text-sky-500" />
                <span>{t.promiseBadge}</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight">
                {t.promiseTitle}
              </h3>
              <p className="text-sky-100 text-[14px] leading-relaxed max-w-2xl">
                {t.promiseDesc}
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <button
                onClick={onBookClick}
                className="bg-white hover:bg-sky-50 text-sky-700 font-bold px-7 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm w-full lg:w-auto text-center"
              >
                {t.promiseBtn}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
