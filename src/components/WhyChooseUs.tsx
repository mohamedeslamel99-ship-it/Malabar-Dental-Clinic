import { motion } from 'motion/react';
import { Cpu, Heart, CirclePercent, Globe2, Quote, Star } from 'lucide-react';
import { getReviews } from '../data';
import { translations } from '../translations';

interface WhyChooseUsProps {
  lang: 'en' | 'ar';
}

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const t = translations[lang];
  const reviews = getReviews(lang);
  const isRtl = lang === 'ar';

  const points = lang === 'en' ? [
    {
      icon: <Cpu className="w-8 h-8 text-[#0284c7]" />,
      title: 'Modern Technology',
      desc: 'Equipped with digital radiography, pain-free intraoral scanners, and modern computer-guided dental engines.',
      bgColor: 'bg-sky-50/50',
      borderColor: 'border-sky-100',
    },
    {
      icon: <Heart className="w-8 h-8 text-[#06b6d4]" />,
      title: 'Experienced Doctors',
      desc: 'DHA-licensed senior specialists with MDS certifications and over 15+ years of clinical practice.',
      bgColor: 'bg-cyan-50/50',
      borderColor: 'border-cyan-100',
    },
    {
      icon: <CirclePercent className="w-8 h-8 text-[#0284c7]" />,
      title: 'Affordable Care',
      desc: 'Transparent pricing, standard dental packages, and easy interest-free monthly installments for braces/implants.',
      bgColor: 'bg-sky-50/50',
      borderColor: 'border-sky-100',
    },
    {
      icon: <Globe2 className="w-8 h-8 text-[#06b6d4]" />,
      title: 'Multilingual Staff',
      desc: 'Comfortable communication in Arabic, English, Malayalam, Hindi, Tamil, and Urdu to serve Dubai’s diverse community.',
      bgColor: 'bg-cyan-50/50',
      borderColor: 'border-cyan-100',
    },
  ] : [
    {
      icon: <Cpu className="w-8 h-8 text-[#0284c7]" />,
      title: 'تكنولوجيا رقمية حديثة',
      desc: 'العيادة مجهزة بأحدث أجهزة التصوير بالأشعة السينية منخفضة الإشعاع، والماسحات الضوئية الفموية ثلاثية الأبعاد الخالية من الألم.',
      bgColor: 'bg-sky-50/50',
      borderColor: 'border-sky-100',
    },
    {
      icon: <Heart className="w-8 h-8 text-[#06b6d4]" />,
      title: 'أطباء ذوو خبرة واسعة',
      desc: 'أخصائيون مرخصون من هيئة الصحة بدبي حاصلون على شهادات الماجستير (MDS) وبخبرة تزيد عن 15 عاماً.',
      bgColor: 'bg-cyan-50/50',
      borderColor: 'border-cyan-100',
    },
    {
      icon: <CirclePercent className="w-8 h-8 text-[#0284c7]" />,
      title: 'تكلفة ميسرة ومرنة',
      desc: 'تسعير شفاف، وباقات علاجية دورية مخفضة، وأقساط شهرية ميسرة بدون فوائد لعلاجات التقويم الشفاف وزراعة الأسنان.',
      bgColor: 'bg-sky-50/50',
      borderColor: 'border-sky-100',
    },
    {
      icon: <Globe2 className="w-8 h-8 text-[#06b6d4]" />,
      title: 'كادر يتحدث لغات متعددة',
      desc: 'تواصل مريح وسهل للغاية باللغات العربية والإنجليزية والمليالم والتميلية والهندية والأردية لخدمة مجتمع دبي المتنوع بالكامل.',
      bgColor: 'bg-cyan-50/50',
      borderColor: 'border-cyan-100',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden text-start">
      {/* Dynamic background lights */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-[#06b6d4]/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#0284c7] tracking-widest uppercase font-mono bg-sky-50 px-3 py-1.5 rounded-full inline-block border border-sky-100">
              {t.whyBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              {t.whyTitle}
            </h2>
            <p className="text-slate-500 text-base max-w-2xl leading-relaxed">
              {t.whySub}
            </p>
          </div>
          <div className={`lg:col-span-5 lg:flex ${isRtl ? 'lg:justify-start' : 'lg:justify-end'}`}>
            <div className="flex gap-4 items-center bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
              <div className={isRtl ? 'text-left' : 'text-right'}>
                <span className="text-2xl font-bold text-slate-800 font-display">4.9 / 5.0</span>
                <p className="text-xs text-slate-400 font-medium">{t.whyRatingLabel}</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-100" />
              <div className="flex flex-col gap-0.5">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-xs font-semibold text-slate-600">{t.whyReviewsCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`bg-white rounded-2xl border ${point.borderColor} p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
            >
              <div className="space-y-6">
                <div className={`w-14 h-14 rounded-2xl ${point.bgColor} flex items-center justify-center border ${point.borderColor} group-hover:scale-105 transition-transform duration-300`}>
                  {point.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-display text-slate-800">
                    {point.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Slides / Blocks */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-xl font-bold font-display text-slate-800">
              {t.testimonialsTitle}
            </h3>
            <p className="text-xs text-slate-400">
              {t.testimonialsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm flex flex-col justify-between relative"
              >
                <div className={`absolute top-6 text-slate-100 ${isRtl ? 'left-8' : 'right-8'}`}>
                  <Quote className="w-12 h-12 stroke-[4px]" />
                </div>
                <div className="space-y-4 relative z-10">
                  {/* Rating stars */}
                  <div className="flex text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-[14px] italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-slate-50 pt-4 mt-6">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm font-display">
                      {rev.name}
                    </h4>
                    <p className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider mt-0.5">
                      ✓ {t.verifiedPatient}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400" dir="ltr">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
