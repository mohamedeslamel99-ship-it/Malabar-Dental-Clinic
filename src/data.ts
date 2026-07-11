import { Doctor, ServiceItem, Review } from './types';

// ==================== ENGLISH DATASETS ====================

export const SERVICES_EN: ServiceItem[] = [
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Routine check-ups, ultrasonic cleaning, advanced laser teeth fillings, and painless root canal treatments.',
    longDescription: 'Our general dentistry services are focused on maintaining your daily oral hygiene and preventing future dental issues. We employ high-end ultrasonic scalers for gentle cleaning and tooth-colored composite resins for natural-looking fillings.',
    iconName: 'Sparkles',
    benefits: ['Gentle plaque and tartar removal', 'Natural composite matching fillings', 'Emergency pain-relief treatments'],
    duration: '30 - 45 mins'
  },
  {
    id: 'ortho',
    title: 'Orthodontics & Aligners',
    description: 'Traditional metal/ceramic braces and premium invisible aligners to achieve your perfect smile.',
    longDescription: 'Correct misaligned teeth and bite issues with our customized orthodontic solutions. From cost-effective traditional braces to premium, virtually invisible clear aligners that allow you to smile confidently during treatment.',
    iconName: 'Layers',
    benefits: ['Custom digital treatment planning', 'Virtually invisible aligner options', 'Flexible payment plans available'],
    duration: '45 - 60 mins (Consultation)'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent, durable, and natural-looking tooth replacements utilizing advanced computer-guided surgery.',
    longDescription: 'Restore your smile and chewing functionality with biocompatible titanium implants. Our computer-guided placement technique ensures maximum accuracy, safety, and a painless recovery process.',
    iconName: 'ShieldCheck',
    benefits: ['Lifetime durable tooth replacement', 'Natural looking ceramic crowns', 'High success rate with computerized planning'],
    duration: '60 - 90 mins'
  },
  {
    id: 'whitening',
    title: 'Cosmetic Dentistry & Veneers',
    description: 'Professional in-chair laser whitening (Zoom) and custom porcelain veneers for a glamorous Egyptian celebrity smile.',
    longDescription: 'Brighten your smile by up to 8 shades in a single session with our professional laser teeth whitening. We also specialize in custom ultra-thin porcelain veneers to correct discoloration, gaps, or minor chips.',
    iconName: 'Smile',
    benefits: ['Instant 8-shade brightening', 'Ultra-thin long-lasting porcelain veneers', 'Safe, enamel-friendly treatments'],
    duration: '45 mins'
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'A friendly, colorful, and fun environment for your little ones, focusing on painless preventive care and education.',
    longDescription: 'We understand that visiting the dentist can be scary for kids. Our clinic features a dedicated pediatric zone with child-friendly dentists who specialize in making children feel relaxed, happy, and pain-free.',
    iconName: 'Baby',
    benefits: ['Specialized child-friendly dentists', 'Fun pediatric waiting & play zone', 'Fluoride therapy & dental sealants'],
    duration: '30 mins'
  }
];

export const DOCTORS_EN: Doctor[] = [
  {
    id: 'dr-mohamed',
    name: 'Dr. Mohamed Aly',
    role: 'Senior Endodontist & Implantologist',
    specialty: 'Root Canal Specialist & Dental Implants',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&h=600&q=80',
    experience: '15+ Years Experience',
    languages: ['Arabic', 'English'],
    education: 'MDS in Endodontics, Cairo University Faculty of Dentistry'
  },
  {
    id: 'dr-yasmine',
    name: 'Dr. Yasmine Sharaf',
    role: 'Chief Orthodontist',
    specialty: 'Invisalign Certified Aligner Specialist & Braces',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=600&h=600&q=80',
    experience: '12+ Years Experience',
    languages: ['Arabic', 'English', 'French'],
    education: 'MDS in Orthodontics, Ain Shams University Faculty of Dentistry'
  },
  {
    id: 'dr-ahmed',
    name: 'Dr. Ahmed El-Sawy',
    role: 'Specialist Pediatric Dentist',
    specialty: 'Children Dentistry & Preventive Oral Care',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&h=600&q=80',
    experience: '9+ Years Experience',
    languages: ['Arabic', 'English'],
    education: 'BDS, Specialist Diploma in Pediatric Care, Mansoura University'
  }
];

export const REVIEWS_EN: Review[] = [
  {
    id: 'rev-1',
    name: 'Eng. Mohamed Tolba',
    rating: 5,
    comment: 'Exceptional service! I got my dental implants done by Dr. Mohamed. The procedure was completely painless and the care post-surgery was outstanding. The clinic in the 10th of Ramadan is extremely hygienic and beautiful.',
    date: '2 weeks ago'
  },
  {
    id: 'rev-2',
    name: 'Nour El-Sherbiny',
    rating: 5,
    comment: 'Highly recommend this clinic. The doctors are highly professional and have degrees from top Egyptian universities, which made my parents very comfortable. Extremely reasonable prices compared to Cairo clinics.',
    date: '1 month ago'
  },
  {
    id: 'rev-3',
    name: 'Dr. Salma Hegazi',
    rating: 5,
    comment: 'Took my 6-year-old daughter for cavity treatment. Dr. Ahmed was amazing! He made her laugh and feel so relaxed. The kids play area is top-notch. No crying at all!',
    date: '3 weeks ago'
  },
  {
    id: 'rev-4',
    name: 'Ahmed Abdel-Latif',
    rating: 5,
    comment: 'Got my clear teeth aligners here. Very transparent pricing, and they have flexible installment options right here in the 10th of Ramadan City. Traveling to Cairo is no longer needed for premium treatments.',
    date: '3 days ago'
  }
];


// ==================== ARABIC DATASETS ====================

export const SERVICES_AR: ServiceItem[] = [
  {
    id: 'general',
    title: 'طب الأسنان العام',
    description: 'الفحوصات الدورية، تنظيف وتلميع الأسنان، حشوات الأسنان المتطورة بالليزر، وعلاجات قنوات الجذور بدون ألم.',
    longDescription: 'تركز خدمات طب الأسنان العام لدينا على الحفاظ على نظافة الفم اليومية والوقاية من المشاكل المستقبلية. نستخدم أجهزة تنظيف بالموجات فوق الصوتية لتقديم تنظيف لطيف وحشوات تجميلية مطابقة للون الأسنان الطبيعي لتبدو طبيعية بالكامل.',
    iconName: 'Sparkles',
    benefits: ['إزالة البلاك والجير بلطف بالكامل', 'حشوات تجميلية مطابقة للون السن الطبيعي', 'جلسات علاج وتخفيف الآلام الطارئة السريعة'],
    duration: '30 - 45 دقيقة'
  },
  {
    id: 'ortho',
    title: 'تقويم الأسنان والمصففات',
    description: 'التقويم المعدني والسراميكي التقليدي والمصففات الشفافة المتميزة للحصول على ابتسامتك المثالية.',
    longDescription: 'تعديل الأسنان غير المتراصة وحل مشاكل الإطباق مع حلول تقويم الأسنان المخصصة لدينا. من التقويم التقليدي الفعال من حيث التكلفة إلى المصففات الشفافة غير المرئية بالكامل التي تتيح لك الابتسام بثقة طوال فترة العلاج.',
    iconName: 'Layers',
    benefits: ['تخطيط رقمي مخصص للعلاج بأبعاد ثلاثية', 'خيارات مصففات شفافة غير مرئية بالكامل تجميلية', 'خطط دفع ميسرة وأقساط شهرية مريحة'],
    duration: '45 - 60 دقيقة (الاستشارة)'
  },
  {
    id: 'implants',
    title: 'زراعة الأسنان',
    description: 'بدائل أسنان دائمة ومتينة ومطابقة للأسنان الطبيعية بالكامل باستخدام جراحة رقمية متطورة موجهة بالكمبيوتر.',
    longDescription: 'استعد ابتسامتك وقدرتك على المضغ بسهولة مع غرسات التيتانيوم المتوافقة حيوياً مع الجسم. تضمن تقنية وضع الغرسات الموجهة بالكمبيوتر دقة كاملة، وأقصى درجات الأمان، وفترة تعافي خالية من الألم.',
    iconName: 'ShieldCheck',
    benefits: ['بدائل أسنان تدوم مدى الحياة مع ضمان', 'تيجان سيراميك مطابقة للون ومظهر الأسنان الطبيعية', 'نسب نجاح قياسية بفضل التخطيط والمسح الرقمي للفك'],
    duration: '60 - 90 دقيقة'
  },
  {
    id: 'whitening',
    title: 'تجميل وتبييض الأسنان',
    description: 'تبييض الأسنان بالليزر الاحترافي داخل العيادة وقشور البورسلين المخصصة للحصول على ابتسامة هوليوود خلابة ومثالية.',
    longDescription: 'احصل على ابتسامة مشرقة تزيد حتى 8 درجات بياضاً في جلسة واحدة فقط مع علاج التبييض بالليزر الاحترافي. نتخصص أيضاً في قشور البورسلين رقيقة السمك (الفينير) لتصحيح عيوب تلون الأسنان أو الفراغات.',
    iconName: 'Smile',
    benefits: ['تبييض فوري حتى 8 درجات بياضاً', 'قشور بورسلين فائقة الرقة وتدوم لسنوات طويلة', 'علاجات معتمدة وآمنة بالكامل على مينا الأسنان'],
    duration: '45 دقيقة'
  },
  {
    id: 'pediatric',
    title: 'طب أسنان الأطفال',
    description: 'بيئة مرحة وملونة مخصصة لأطفالكم، تركز على الرعاية الوقائية الخالية من الألم والتوعية اللطيفة.',
    longDescription: 'ندرك أن زيارة طبيب الأسنان قد تكون مخيفة للأطفال. تتميز عيادتنا بمنطقة ألعاب خاصة للأطفال، مع أطباء أسنان ودودين متخصصين في جعل الأطفال يشعرون بالراحة التامة والاسترخاء دون أي خوف أو ألم.',
    iconName: 'Baby',
    benefits: ['أطباء أسنان ودودون ومتخصصون برعاية الأطفال', 'منطقة انتظار وألعاب ملونة ومرحة ومحفزة', 'تطبيق الفلورايد الوقائي وسد الشقوق لحماية الأسنان'],
    duration: '30 دقيقة'
  }
];

export const DOCTORS_AR: Doctor[] = [
  {
    id: 'dr-mohamed',
    name: 'د. محمد علي',
    role: 'أخصائي علاج العصب وزراعة الأسنان',
    specialty: 'أخصائي معالجة أقنية الجذور وزراعة الأسنان',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&h=600&q=80',
    experience: 'أكثر من 15 عاماً من الخبرة السريرية',
    languages: ['العربية', 'الإنجليزية'],
    education: 'ماجستير في علاج العصب والزراعة، كلية طب الأسنان - جامعة القاهرة'
  },
  {
    id: 'dr-yasmine',
    name: 'د. ياسمين شرف',
    role: 'رئيسة أطباء تقويم الأسنان',
    specialty: 'أخصائية تقويم أسنان ومصففات شفافة معتمدة',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=600&h=600&q=80',
    experience: 'أكثر من 12 عاماً من الخبرة السريرية',
    languages: ['العربية', 'الإنجليزية', 'الفرنسية'],
    education: 'ماجستير في تقويم الأسنان والفكين، كلية طب الأسنان - جامعة عين شمس'
  },
  {
    id: 'dr-ahmed',
    name: 'د. أحمد الصاوي',
    role: 'أخصائي طب أسنان الأطفال',
    specialty: 'علاجات أسنان الأطفال والرعاية الوقائية للفم والأسنان',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&h=600&q=80',
    experience: 'أكثر من 9 أعوام من الخبرة السريرية',
    languages: ['العربية', 'الإنجليزية'],
    education: 'بكالوريوس طب الأسنان، دبلوم تخصص طب أسنان الأطفال - جامعة المنصورة'
  }
];

export const REVIEWS_AR: Review[] = [
  {
    id: 'rev-1',
    name: 'م. محمد طلبة',
    rating: 5,
    comment: 'خدمة استثنائية بحق! قمت بزراعة الأسنان لدى الدكتور محمد علي. كانت العملية خالية تماماً من الألم والمتابعة الطبية بعد الجراحة كانت فائقة التميز. العيادة في العاشر من رمضان معقمة وجميلة جداً ونظيفة.',
    date: 'منذ أسبوعين'
  },
  {
    id: 'rev-2',
    name: 'نور الشربيني',
    rating: 5,
    comment: 'أنصح بشدة بزيارة العيادة. الأطباء محترفون للغاية وخريجو كبرى الجامعات المصرية العريقة مثل جامعة القاهرة وعين شمس، مما جعلني أشعر بارتياح تام. الأسعار مناسبة جداً ومنافسة وممتازة.',
    date: 'منذ شهر'
  },
  {
    id: 'rev-3',
    name: 'د. سلمى حجازي',
    rating: 5,
    comment: 'أخذت ابنتي البالغة من العمر 6 سنوات لعلاج تسوس الأسنان. الدكتور أحمد الصاوي كان رائعاً وودوداً جداً! جعلها تضحك وتسترخي تماماً. منطقة ألعاب الأطفال ممتازة، ولم تبكِ على الإطلاق!',
    date: 'منذ 3 أسابيع'
  },
  {
    id: 'rev-4',
    name: 'أحمد عبد اللطيف',
    rating: 5,
    comment: 'أجريت علاج تقويم الأسنان الشفاف هنا. أسعار واضحة تماماً ولديهم خيارات تقسيط مريحة ومناسبة جداً هنا في مدينة العاشر من رمضان، مما وفر عليّ مشقة السفر المتكرر إلى القاهرة.',
    date: 'منذ 3 أيام'
  }
];


// ==================== COMMON CONTACT DATA ====================

export const CLINIC_CONTACT = {
  addressEn: 'Suite 102, El-Horeya Mall, Orabi Square, El-Tahrir Axis (Next to El-Radwan Mosque), 10th of Ramadan City, Egypt',
  addressAr: 'مكتب 102، الحرية مول، ميدان عرابي، محور التحرير (بجوار مسجد الرضوان)، مدينة العاشر من رمضان، مصر',
  phone: '+20 55 360 4321',
  mobile: '+20 15 555 1234',
  whatsapp: 'https://wa.me/20155551234?text=Hi%2010th%20of%20Ramadan%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.',
  email: 'info@ramadandentalclinic.com',
  hours: [
    { daysEn: 'Saturday - Thursday', daysAr: 'السبت - الخميس', hours: '11:00 AM - 09:00 PM' },
    { daysEn: 'Friday', daysAr: 'الجمعة', hours: '03:00 PM - 09:00 PM' }
  ],
  mapsIframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54983.84412217647!2d31.70119045!3d30.2981315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f0d014eb38e1%3A0xe6bf44b4b2ef91!2s10th%20of%20Ramadan%20City%2C%20Ash%20Sharqia%20Governorate!5e0!3m2!1sen!2seg!4v1715000000000!5m2!1sen!2seg'
};

export function getServices(lang: 'en' | 'ar'): ServiceItem[] {
  return lang === 'ar' ? SERVICES_AR : SERVICES_EN;
}

export function getDoctors(lang: 'en' | 'ar'): Doctor[] {
  return lang === 'ar' ? DOCTORS_AR : DOCTORS_EN;
}

export function getReviews(lang: 'en' | 'ar'): Review[] {
  return lang === 'ar' ? REVIEWS_AR : REVIEWS_EN;
}
