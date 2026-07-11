export interface TranslationDictionary {
  navHome: string;
  navServices: string;
  navDoctors: string;
  navWhyUs: string;
  navContact: string;
  bookAppointment: string;
  activeBookings: string;
  activeSlot: string;
  callClinic: string;
  workingHoursLabel: string;
  workingHoursValue: string;
  locationLabel: string;
  whatsAppChat: string;
  logoSub: string;
  
  // Hero
  heroBadge: string;
  heroTitleStart: string;
  heroTitleHighlight: string;
  heroTitleEnd: string;
  heroSub: string;
  heroBtnBook: string;
  heroBtnWhatsApp: string;
  heroHighlightPainless: string;
  heroHighlightDocs: string;
  heroHighlightMetro: string;
  heroHighlightPlans: string;
  heroSafeTitle: string;
  heroSafeSub: string;
  heroSmilesNum: string;
  heroSmilesLabel: string;
  heroConvenienceTitle: string;
  heroConvenienceSub: string;

  // About
  aboutBadge: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutFeature1Title: string;
  aboutFeature1Desc: string;
  aboutFeature2Title: string;
  aboutFeature2Desc: string;
  aboutFeature3Title: string;
  aboutFeature3Desc: string;
  aboutFeature4Title: string;
  aboutFeature4Desc: string;
  aboutFloatingBadgeTitle: string;
  aboutFloatingBadgeSub: string;

  // Services
  servicesBadge: string;
  servicesTitle: string;
  servicesSub: string;
  servicesLearnMore: string;
  servicesBookBtn: string;
  servicesDuration: string;
  servicesTitleOverview: string;
  servicesTitleHighlights: string;
  servicesCloseBtn: string;
  servicesBookThisBtn: string;

  // Doctors
  docsBadge: string;
  docsTitle: string;
  docsSub: string;
  docsExpTag: string;
  docsSpeaks: string;
  docsRequestBtn: string;
  promiseBadge: string;
  promiseTitle: string;
  promiseDesc: string;
  promiseBtn: string;

  // Why Choose Us
  whyBadge: string;
  whyTitle: string;
  whySub: string;
  whyRatingLabel: string;
  whyReviewsCount: string;
  testimonialsTitle: string;
  testimonialsSub: string;
  verifiedPatient: string;

  // Booking Form & Contact
  contactBadge: string;
  contactTitle: string;
  contactSub: string;
  formTitle: string;
  formNameLabel: string;
  formNamePlaceholder: string;
  formPhoneLabel: string;
  formServiceLabel: string;
  formServiceDefault: string;
  formDateLabel: string;
  formTimeLabel: string;
  formSubmitBtn: string;
  formDisclaimer: string;
  myApptsLabel: string;
  localStoreTag: string;
  whatsAppConfirm: string;
  directContactTitle: string;
  addressTitle: string;
  phoneTitle: string;
  workingHoursTitle: string;
  callReceptionBtn: string;
  mapTitle: string;
  mapSub: string;
  mapOpenBtn: string;
  successTitle: string;
  successSub: string;
  successRecDoc: string;
  successDateText: string;
  successDoneBtn: string;

  // Footer
  footerSub: string;
  footerSocialsTitle: string;
  footerQuickLinks: string;
  footerSpecialties: string;
  footerDhaDisclaimer: string;
  footerCopyright: string;
  footerRights: string;
}

export const translations: Record<'en' | 'ar', TranslationDictionary> = {
  en: {
    navHome: 'Home',
    navServices: 'Services',
    navDoctors: 'Doctors',
    navWhyUs: 'Why Choose Us',
    navContact: 'Contact',
    bookAppointment: 'Book Appointment',
    activeBookings: 'My Bookings',
    activeSlot: 'Active Slot',
    callClinic: 'Call Clinic',
    workingHoursLabel: 'Working Hours',
    workingHoursValue: 'Sat - Thu: 11 AM - 9 PM | Fri: 3 PM - 9 PM',
    locationLabel: 'Orabi Square, El-Tahrir Axis, 10th of Ramadan City, Egypt',
    whatsAppChat: 'WhatsApp Chat',
    logoSub: '10th of Ramadan Branch',

    // Hero
    heroBadge: 'Top-Rated Egyptian Medical Expertise',
    heroTitleStart: 'Expert Dental Care by Top ',
    heroTitleHighlight: 'Egyptian Doctors',
    heroTitleEnd: '',
    heroSub: 'Welcome to the premier dental clinic in the 10th of Ramadan City. Combining warm local hospitality with high-end clinical precision, our specialized Egyptian dentists deliver gentle, advanced, and painless treatments.',
    heroBtnBook: 'Book Appointment',
    heroBtnWhatsApp: 'WhatsApp Us',
    heroHighlightPainless: 'Painless Treatment Protocols',
    heroHighlightDocs: 'Egyptian Universities Graduates',
    heroHighlightMetro: 'Located at Orabi Square, Center City',
    heroHighlightPlans: 'Flexible Local Installment Plans',
    heroSafeTitle: 'MOH Certified & Registered',
    heroSafeSub: '100% Egyptian Dental Syndicate Specialists',
    heroSmilesNum: '10k+',
    heroSmilesLabel: 'Egyptian Smile Transformations',
    heroConvenienceTitle: 'Central Location Advantage',
    heroConvenienceSub: 'Located at El-Horeya Mall, Orabi Square, next to El-Radwan Mosque. Spacious parking and accessible ground floor facilities.',

    // About
    aboutBadge: 'ABOUT OUR CLINIC',
    aboutTitle: 'Your Family’s Dental Care Partner in 10th of Ramadan',
    aboutP1: 'With a profound commitment to offering premium, healthy, and stunning smiles to the 10th of Ramadan community, we provide comprehensive preventive, cosmetic, pediatric, and surgical treatments. We strictly adhere to top Egyptian and international medical hygiene benchmarks.',
    aboutP2: 'Whether you require general cleanings, advanced composite fillings, specialized pediatric dental procedures, or permanent computerized dental implants, our warm team of Egyptian specialists coordinates with your family for high-quality, painless results.',
    aboutFeature1Title: 'Class-A Sterilization',
    aboutFeature1Desc: '100% autoclaved tools, sterile single-use kits, and sanitization cycles aligned with WHO dental rules.',
    aboutFeature2Title: 'Warm Egyptian Hospitality',
    aboutFeature2Desc: 'We specialize in soothing dental anxiety for seniors, kids, and nervous patients with local warmth and care.',
    aboutFeature3Title: 'Modern Digital Engines',
    aboutFeature3Desc: 'Utilizing digital radiography, micro-implants, and premium dental chairs for highly comfortable sessions.',
    aboutFeature4Title: 'National Academic Pride',
    aboutFeature4Desc: 'Our dentists are certified from elite faculties (Cairo, Ain Shams, Mansoura Universities) with extensive records.',
    aboutFloatingBadgeTitle: 'Highly Qualified',
    aboutFloatingBadgeSub: 'Top Egyptian Dentists',

    // Services
    servicesBadge: 'OUR CLINIC SPECIALTIES',
    servicesTitle: 'Advanced Dental Services',
    servicesSub: 'From regular family check-ups to complex aesthetic and implant surgeries, we coordinate custom solutions with premium precision.',
    servicesLearnMore: 'Learn More',
    servicesBookBtn: 'Book Service',
    servicesDuration: 'Duration',
    servicesTitleOverview: 'Treatment Overview',
    servicesTitleHighlights: 'Key Highlights & Benefits',
    servicesCloseBtn: 'Close Details',
    servicesBookThisBtn: 'Book This Service',

    // Doctors
    docsBadge: 'OUR MEDICAL TEAM',
    docsTitle: 'Meet Our Expert Egyptian Dentists',
    docsSub: 'Graduates of Egypt’s most prestigious faculties with postgraduate specialties, our medical staff brings unmatched precision and caring local guidance.',
    docsExpTag: 'Years Experience',
    docsSpeaks: 'Languages',
    docsRequestBtn: 'Request This Doctor',
    promiseBadge: 'Our Caring Promise',
    promiseTitle: 'Nervous or worried about dental pain?',
    promiseDesc: 'We employ high-end topical anesthesia gels and painless slow-release injection techniques. We make sure you feel completely relaxed, safe, and comfortable from start to finish. Your peace of mind is our priority.',
    promiseBtn: 'Schedule Consultation',

    // Why Choose Us
    whyBadge: 'CLINICAL EXCELLENCE',
    whyTitle: 'Why Families Choose Our 10th of Ramadan Clinic',
    whySub: 'We provide exceptional oral healthcare tailored to your family’s specific timeline and budget, eliminating the need to travel to Cairo for specialized care.',
    whyRatingLabel: 'Average Patient Rating',
    whyReviewsCount: 'Based on 450+ Verified Reviews',
    testimonialsTitle: 'Verified Egyptian Patient Reviews',
    testimonialsSub: 'Authentic testimonials from local families who completed their journeys with us',
    verifiedPatient: 'Verified Egyptian Patient',

    // Booking Form & Contact
    contactBadge: 'SECURE AN APPOINTMENT',
    contactTitle: 'Schedule Your Smile Consultation',
    contactSub: 'Fill out our rapid online booking request form, or connect with our reception desk instantly via phone or WhatsApp.',
    formTitle: 'Request an Appointment Slot',
    formNameLabel: 'Patient Full Name',
    formNamePlaceholder: 'e.g. Mohamed Tolba',
    formPhoneLabel: 'Mobile Number',
    formServiceLabel: 'Select Dental Service',
    formServiceDefault: '-- Choose a service --',
    formDateLabel: 'Preferred Date',
    formTimeLabel: 'Preferred Time Slot',
    formSubmitBtn: 'Submit Appointment Request',
    formDisclaimer: '*Submitting this form records your preferred slot. Our Egyptian medical coordinator will call or WhatsApp you instantly to confirm the exact consultation time.',
    myApptsLabel: 'Your Scheduled Appointments',
    localStoreTag: 'Saved Locally',
    whatsAppConfirm: 'Confirm on WhatsApp',
    directContactTitle: '10th of Ramadan Dental Clinic',
    addressTitle: 'Clinic Address',
    phoneTitle: 'Phone Support',
    workingHoursTitle: 'Working Hours',
    callReceptionBtn: 'Call Reception',
    mapTitle: 'Interactive Location Map',
    mapSub: 'Orabi Square, 10th of Ramadan City',
    mapOpenBtn: 'Open Google Maps',
    successTitle: 'Appointment Requested!',
    successSub: 'your request has been successfully registered in our local tracking system.',
    successRecDoc: 'RECOMMENDED DENTIST',
    successDateText: 'Assigned to your session on',
    successDoneBtn: 'Done, Close',

    // Footer
    footerSub: 'Delivering world-class, family-friendly, and painless dental treatments in the 10th of Ramadan City. Rooted in elite academic preparation and local Egyptian care.',
    footerSocialsTitle: 'Connect with Us',
    footerQuickLinks: 'Quick Links',
    footerSpecialties: 'Our Medical Services',
    footerDhaDisclaimer: 'Licensed under the Egyptian Ministry of Health (MOH) and Egyptian Dental Syndicate License No. EG-47819-D. All health records are protected and stored in full compliance with Egyptian Medical Law.',
    footerCopyright: '10th of Ramadan Dental Clinic, Sharqia, Egypt.',
    footerRights: 'All Rights Reserved. Engineered to match high-standard clinic protocols and patient safety rules.',
  },
  ar: {
    navHome: 'الرئيسية',
    navServices: 'خدماتنا',
    navDoctors: 'أطباؤنا',
    navWhyUs: 'لماذا نحن',
    navContact: 'اتصل بنا',
    bookAppointment: 'احجز موعداً',
    activeBookings: 'حجوزاتي',
    activeSlot: 'حجز نشط',
    callClinic: 'اتصل بالعيادة',
    workingHoursLabel: 'أوقات العمل',
    workingHoursValue: 'السبت - الخميس: 11 صباحاً - 9 مساءً | الجمعة: 3 مساءً - 9 مساءً',
    locationLabel: 'ميدان عرابي، محور التحرير، مدينة العاشر من رمضان، مصر',
    whatsAppChat: 'محادثة واتساب',
    logoSub: 'فرع العاشر من رمضان',

    // Hero
    heroBadge: 'رعاية أسنان متميزة بأيدي أطباء مصريين',
    heroTitleStart: 'رعاية أسنان متخصصة بأيدي ',
    heroTitleHighlight: 'أطباء مصريين',
    heroTitleEnd: ' متميزين',
    heroSub: 'أهلاً بكم في العيادة الرائدة لطب الأسنان بمدينة العاشر من رمضان. نجمع بين دفء الضيافة المصرية الأصيلة وأعلى مستويات الدقة والتعقيم الطبي لتقديم رعاية خالية تماماً من الألم.',
    heroBtnBook: 'احجز موعداً الآن',
    heroBtnWhatsApp: 'راسلنا عبر واتساب',
    heroHighlightPainless: 'بروتوكولات علاج خالية من الألم',
    heroHighlightDocs: 'أطباء خريجو كبرى الجامعات المصرية',
    heroHighlightMetro: 'الموقع في ميدان عرابي بقلب المدينة',
    heroHighlightPlans: 'خطط تقسيط محلية ميسرة ومناسبة',
    heroSafeTitle: 'مرخص من وزارة الصحة المصرية',
    heroSafeSub: 'أخصائيون مسجلون بنقابة أطباء الأسنان المصرية بنسبة 100%',
    heroSmilesNum: '+10 آلاف',
    heroSmilesLabel: 'عمليات تجميل وتغيير ابتسامة ناجحة بمصر',
    heroConvenienceTitle: 'موقع مركزي مميز وسهل الوصول',
    heroConvenienceSub: 'تقع العيادة في الحرية مول بميدان عرابي، بجوار مسجد الرضوان مباشرة. تتوفر مواقف سيارات مجانية وواسعة ومدخل مجهز بالكامل.',

    // About
    aboutBadge: 'نبذة عن عيادتنا',
    aboutTitle: 'شريك رعاية الأسنان الموثوق لعائلتك بالعاشر من رمضان',
    aboutP1: 'مع التزام عميق بتقديم ابتسامات صحية وجميلة لأهالي مدينة العاشر من رمضان، نوفر خدمات علاجية متكاملة تشمل طب الأسنان الوقائي والتجميلي والأطفال والجراحة، متبعين أرقى معايير التعقيم العالمية.',
    aboutP2: 'سواء كنت تبحث عن تنظيف دوري للأسنان، أو حشوات تجميلية متطورة، أو علاج أسنان للأطفال، أو زراعة أسنان رقمية دائمة، فإن فريقنا من الأخصائيين المصريين هنا لمساعدتك للوصول لأفضل النتائج الطبية بدون أي ألم.',
    aboutFeature1Title: 'تعقيم كامل من الفئة الأولى',
    aboutFeature1Desc: 'أدوات معقمة بالكامل حرارياً، وأدوات استخدام فردي معقمة ومحكمة الإغلاق، متبعين تعليمات منظمة الصحة العالمية.',
    aboutFeature2Title: 'رعاية بلمسة مصرية دافئة',
    aboutFeature2Desc: 'نتميز بتخفيف رهبة وخوف عيادات الأسنان للأطفال وكبار السن بفضل الأسلوب اللطيف والودود لأطبائنا.',
    aboutFeature3Title: 'تكنولوجيا رقمية حديثة',
    aboutFeature3Desc: 'أحدث أجهزة الأشعة الرقمية منخفضة الإشعاع وكراسي طب الأسنان المتقدمة لراحة تامة أثناء العلاج.',
    aboutFeature4Title: 'فخر الأكاديمية الوطنية بمصر',
    aboutFeature4Desc: 'أطباؤنا من خريجي كليات طب الأسنان العريقة (جامعات القاهرة، عين شمس، المنصورة) بخبرات ممتدة.',
    aboutFloatingBadgeTitle: 'تأهيل أكاديمي متميز',
    aboutFloatingBadgeSub: 'أفضل الكفاءات والأطباء بمصر',

    // Services
    servicesBadge: 'تخصصاتنا الطبية المتميزة',
    servicesTitle: 'خدمات طب أسنان متقدمة',
    servicesSub: 'من الفحوصات العامة الوقائية إلى الجراحات التجميلية المتقدمة وزراعة الأسنان، نخطط لكل خطة علاجية بدقة تناسب احتياجاتك وميزانيتك.',
    servicesLearnMore: 'تفاصيل الخدمة',
    servicesBookBtn: 'حجز الخدمة',
    servicesDuration: 'المدة المقدرة',
    servicesTitleOverview: 'نظرة عامة على العلاج',
    servicesTitleHighlights: 'أبرز المزايا والفوائد للخدمة',
    servicesCloseBtn: 'إغلاق التفاصيل',
    servicesBookThisBtn: 'احجز هذه الخدمة الآن',

    // Doctors
    docsBadge: 'الفريق الطبي السريري',
    docsTitle: 'تعرف على نخبة أطباء الأسنان المصريين',
    docsSub: 'خريجو كبرى الجامعات المصرية العريقة وحملة شهادات الماجستير والدراسات العليا، يقدمون لكم أرقى مستويات الرعاية والأمان.',
    docsExpTag: 'سنوات الخبرة السريرية',
    docsSpeaks: 'اللغات',
    docsRequestBtn: 'اطلب موعداً مع هذا الطبيب',
    promiseBadge: 'وعدنا بالراحة والأمان',
    promiseTitle: 'هل تقلق بشأن آلام علاج الأسنان؟',
    promiseDesc: 'نحن نستخدم تقنيات التخدير الموضعي المتقدمة وأحدث جل لتنميل اللثة قبل الإبرة، وحقن التخدير بطيئة التدفق لضمان عدم شعوركم بأي ألم على الإطلاق. راحتكم هي هدفنا الأساسي.',
    promiseBtn: 'احجز استشارة مجانية',

    // Why Choose Us
    whyBadge: 'التميز الطبي والسريري',
    whyTitle: 'لماذا تختار عائلات العاشر من رمضان عيادتنا؟',
    whySub: 'نحن نقدم رعاية صحية متميزة للفم والأسنان تناسب ميزانية ووقت عائلتك بالكامل، مما يغنيك عن مشقة السفر المتكرر إلى القاهرة لتلقي العلاج التخصصي.',
    whyRatingLabel: 'متوسط تقييم المرضى',
    whyReviewsCount: 'بناءً على أكثر من 450 تقييماً حقيقياً وموثقاً',
    testimonialsTitle: 'آراء مرضانا الكرام بمدينة العاشر',
    testimonialsSub: 'تجارب حقيقية ومباشرة من عائلات محلية تلقت العلاج بنجاح وتفوق معنا',
    verifiedPatient: 'مريض مصري موثق',

    // Booking Form & Contact
    contactBadge: 'حجز موعد فوري',
    contactTitle: 'جدول استشارتك الطبية للابتسامة الآن',
    contactSub: 'قم بملء نموذج طلب حجز موعد السريع أدناه، أو تواصل مع مكتب الاستقبال بالعيادة مباشرة عبر الهاتف أو الواتساب.',
    formTitle: 'طلب حجز موعد أسنان فوري',
    formNameLabel: 'اسم المريض بالكامل',
    formNamePlaceholder: 'مثال: محمد طلبة',
    formPhoneLabel: 'رقم الهاتف المحمول',
    formServiceLabel: 'اختر التخصص أو الخدمة المطلوبة',
    formServiceDefault: '-- اختر الخدمة المطلوبة --',
    formDateLabel: 'التاريخ المفضل',
    formTimeLabel: 'الفترة الزمنية المفضلة',
    formSubmitBtn: 'إرسال طلب الحجز',
    formDisclaimer: '*بإرسال هذا النموذج، يتم تسجيل تفضيلك للموعد. سيقوم منسقنا الطبي بالتواصل معك فوراً عبر الهاتف أو الواتساب لتأكيد الساعة واليوم النهائي بشكل رسمي.',
    myApptsLabel: 'مواعيدك المجدولة لدينا',
    localStoreTag: 'محفوظ محلياً',
    whatsAppConfirm: 'تأكيد الموعد عبر الواتساب',
    directContactTitle: 'عيادة العاشر من رمضان لطب الأسنان',
    addressTitle: 'عنوان العيادة بالتفصيل',
    phoneTitle: 'الدعم والهاتف بالعيادة',
    workingHoursTitle: 'أوقات العمل الرسمية بالعيادة',
    callReceptionBtn: 'اتصل بالاستقبال',
    mapTitle: 'خريطة الوصول والاتجاهات',
    mapSub: 'ميدان عرابي، مدينة العاشر من رمضان',
    mapOpenBtn: 'فتح في خرائط جوجل',
    successTitle: 'تم طلب الموعد بنجاح!',
    successSub: 'تم تسجيل طلبك بنجاح في نظام المتابعة المحلي وسيتصل بك فريقنا للتأكيد النهائي.',
    successRecDoc: 'الطبيب المعالج المقترح لحالتك',
    successDateText: 'المعين لجلستك الطبية بتاريخ',
    successDoneBtn: 'تم، إغلاق النافذة',

    // Footer
    footerSub: 'نقدم علاجات أسنان عالمية ومناسبة لجميع أفراد الأسرة خالية من الألم تماماً بمدينة العاشر من رمضان. نرتكز على تأهيل أكاديمي متميز وخبرة طبية مصرية خالصة.',
    footerSocialsTitle: 'تابع صفحتنا وتواصل معنا',
    footerQuickLinks: 'روابط تنقل سريعة',
    footerSpecialties: 'خدماتنا وتخصصاتنا الطبية',
    footerDhaDisclaimer: 'مرخص بموجب قوانين وزارة الصحة المصرية ونقابة أطباء الأسنان بترخيص رقم EG-47819-D. جميع السجلات الطبية سرية تماماً ومحمية بالكامل بما يتماشى مع قانون المهن الطبية المصري.',
    footerCopyright: 'عيادة العاشر من رمضان لطب الأسنان، الشرقية، جمهورية مصر العربية.',
    footerRights: 'جميع الحقوق محفوظة. تم التطوير وفقاً لأعلى معايير جودة المنشآت الطبية وسلامة المرضى.',
  }
};
