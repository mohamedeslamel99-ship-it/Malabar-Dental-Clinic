import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Calendar, Clock, Check, Trash2, MessageSquare, AlertCircle, Sparkles, Navigation } from 'lucide-react';
import { CLINIC_CONTACT, getServices } from '../data';
import { Booking } from '../types';
import { translations } from '../translations';

interface BookingFormProps {
  lang: 'en' | 'ar';
  preSelectedService: string;
  onBookingChange: (count: number) => void;
}

export default function BookingForm({ lang, preSelectedService, onBookingChange }: BookingFormProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [formError, setFormError] = useState('');
  const [successBooking, setSuccessBooking] = useState<Booking | null>(null);

  const t = translations[lang];
  const isRtl = lang === 'ar';
  const services = getServices(lang);

  // Load bookings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('malabar_dental_bookings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setBookings(parsed);
        onBookingChange(parsed.length);
      } catch (e) {
        console.error('Error parsing bookings', e);
      }
    }
  }, [onBookingChange]);

  // Update selected service if pre-selected via props
  useEffect(() => {
    if (preSelectedService) {
      // Find the corresponding translated title for the pre-selected service if possible
      const targetService = getServices(lang).find(s => s.id === preSelectedService.toLowerCase() || s.title.toLowerCase() === preSelectedService.toLowerCase());
      if (targetService) {
        setSelectedService(targetService.title);
      } else {
        setSelectedService(preSelectedService);
      }
      
      // Smooth scroll to form
      const element = document.getElementById('booking-form-anchor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preSelectedService, lang]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Validation
    if (!name.trim()) {
      setFormError(isRtl ? 'يرجى إدخال اسمك الكامل.' : 'Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.length < 7) {
      setFormError(isRtl ? 'يرجى إدخال رقم هاتف متحرك صحيح (7 أرقام على الأقل).' : 'Please enter a valid phone number (at least 7 digits).');
      return;
    }
    if (!selectedService) {
      setFormError(isRtl ? 'يرجى اختيار نوع علاج الأسنان المطلوب.' : 'Please select a dental service.');
      return;
    }
    if (!preferredDate) {
      setFormError(isRtl ? 'يرجى تحديد التاريخ المفضل للموعد.' : 'Please select a preferred appointment date.');
      return;
    }

    // Create Booking
    const newBooking: Booking = {
      id: 'bk_' + Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      phone: phone.trim(),
      service: selectedService,
      date: preferredDate,
      time: preferredTime,
      status: 'Confirmed', // Instantly auto-confirm for demonstration
      createdAt: new Date().toLocaleDateString(isRtl ? 'ar-AE' : 'en-AE', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    };

    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    localStorage.setItem('malabar_dental_bookings', JSON.stringify(updatedBookings));
    onBookingChange(updatedBookings.length);

    // Show success dialog
    setSuccessBooking(newBooking);

    // Reset fields
    setName('');
    setPhone('');
    setSelectedService('');
    setPreferredDate('');
    setPreferredTime('10:00 AM');
  };

  const handleDeleteBooking = (id: string) => {
    const filtered = bookings.filter((b) => b.id !== id);
    setBookings(filtered);
    localStorage.setItem('malabar_dental_bookings', JSON.stringify(filtered));
    onBookingChange(filtered.length);
  };

  // Get Today's Date in YYYY-MM-DD for min-date picker validation
  const getTodayDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  // Pre-fill a WhatsApp redirect string with patient details
  const getWhatsAppBookingLink = (b: Booking) => {
    const messageEn = `Hi Malabar Dental Clinic Al Qusais, I have scheduled an appointment via your website:%0A%0A*Name:* ${b.name}%0A*Phone:* ${b.phone}%0A*Service:* ${b.service}%0A*Date:* ${b.date}%0A*Preferred Time:* ${b.time}%0A%0APlease confirm my slot!`;
    const messageAr = `مرحباً عيادة مالابار لطب الأسنان بالقصيص، لقد قمت بطلب حجز موعد عبر موقعكم الإلكتروني:%0A%0A*الاسم:* ${b.name}%0A*الهاتف:* ${b.phone}%0A*العلاج:* ${b.service}%0A*التاريخ:* ${b.date}%0A*الوقت المفضل:* ${b.time}%0A%0Aيرجى تأكيد موعدي!`;
    const message = isRtl ? messageAr : messageEn;
    return `https://wa.me/971508891234?text=${message}`;
  };

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '01:00 PM',
    '03:00 PM',
    '05:00 PM',
    '06:30 PM',
    '08:00 PM',
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative text-start">
      {/* Target anchor */}
      <div id="booking-form-anchor" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#0284c7] tracking-widest uppercase font-mono bg-sky-50 px-3 py-1.5 rounded-full inline-block border border-sky-100">
            {t.contactBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            {t.contactSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-slate-50 border border-slate-100/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold font-display text-slate-800 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#0284c7]" />
                <span>{t.formTitle}</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {formError && (
                  <div className="bg-red-50 text-red-600 text-xs font-semibold p-3.5 rounded-xl flex items-center gap-2.5 border border-red-100">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="patient-name" className="text-xs font-bold text-slate-500 tracking-wide">
                      {t.formNameLabel}
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      placeholder={t.formNamePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all font-medium text-start"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="patient-phone" className="text-xs font-bold text-slate-500 tracking-wide">
                      {t.formPhoneLabel}
                    </label>
                    <div className="flex" dir="ltr">
                      <span className="inline-flex items-center px-3.5 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-xs font-semibold">
                        +971
                      </span>
                      <input
                        id="patient-phone"
                        type="tel"
                        placeholder="50 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-slate-200 focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] rounded-r-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all font-medium text-start"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Selected service dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="service-select" className="text-xs font-bold text-slate-500 tracking-wide">
                      {t.formServiceLabel}
                    </label>
                    <select
                      id="service-select"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] rounded-xl px-4 py-3.5 text-sm text-slate-700 outline-none transition-all font-medium appearance-none cursor-pointer text-start"
                    >
                      <option value="">{t.formServiceDefault}</option>
                      {services.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date field */}
                  <div className="space-y-1.5">
                    <label htmlFor="appt-date" className="text-xs font-bold text-slate-500 tracking-wide">
                      {t.formDateLabel}
                    </label>
                    <input
                      id="appt-date"
                      type="date"
                      min={getTodayDateString()}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] rounded-xl px-4 py-3.5 text-sm text-slate-700 outline-none transition-all font-medium cursor-pointer text-start"
                    />
                  </div>
                </div>

                {/* Preferred time slot pills */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 tracking-wide block">
                    {t.formTimeLabel}
                  </label>
                  <div className="grid grid-cols-4 gap-2.5" dir="ltr">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setPreferredTime(slot)}
                        className={`py-2 px-1 rounded-xl text-center text-xs font-semibold border transition-all cursor-pointer ${
                          preferredTime === slot
                            ? 'bg-[#0284c7] border-[#0284c7] text-white shadow-md shadow-sky-100'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-[11px] text-slate-400 leading-normal">
                  {t.formDisclaimer}
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0284c7] to-[#06b6d4] text-white py-4 rounded-xl font-bold text-sm shadow-md shadow-sky-100 hover:shadow-lg hover:shadow-sky-200 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  <span>{t.formSubmitBtn}</span>
                </button>
              </form>
            </div>

            {/* Live user-stored bookings section */}
            {bookings.length > 0 && (
              <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-slate-700 font-display">
                    {t.myApptsLabel} ({bookings.length})
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 bg-white border px-2 py-0.5 rounded-md">
                    {t.localStoreTag}
                  </span>
                </div>

                <div className="space-y-3">
                  {bookings.map((bk) => (
                    <div
                      key={bk.id}
                      className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-800 text-sm font-display">
                            {bk.service}
                          </span>
                          <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full font-bold">
                            {t.activeSlot}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 flex flex-wrap gap-x-4 gap-y-1 items-center" dir={isRtl ? 'rtl' : 'ltr'}>
                          <span>👤 {bk.name}</span>
                          <span>📅 {bk.date}</span>
                          <span>⏰ {bk.time}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 w-full sm:w-auto self-stretch sm:self-center">
                        <a
                          href={getWhatsAppBookingLink(bk)}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 sm:flex-none bg-[#128c7e] hover:bg-[#075e54] text-white text-[11px] font-bold px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5 fill-white text-[#128c7e]" />
                          <span>{t.whatsAppConfirm}</span>
                        </a>
                        <button
                          onClick={() => handleDeleteBooking(bk.id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer shrink-0"
                          title="Cancel Booking"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Contact Details, Working Hours, Maps */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
              
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-[#38bdf8] font-bold uppercase tracking-widest font-mono">
                    AL QUSAIS BRANCH
                  </span>
                  <h3 className="text-xl font-bold font-display mt-1 text-white">
                    {t.directContactTitle}
                  </h3>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#38bdf8] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{t.addressTitle}</p>
                      <p className="leading-relaxed text-slate-300 mt-1">
                        {isRtl ? CLINIC_CONTACT.addressAr : CLINIC_CONTACT.addressEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#38bdf8] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{t.phoneTitle}</p>
                      <p className="mt-1" dir="ltr">Tel: <strong>{CLINIC_CONTACT.phone}</strong></p>
                      <p className="mt-0.5" dir="ltr">WhatsApp: <strong>{CLINIC_CONTACT.mobile}</strong></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#38bdf8] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{t.workingHoursTitle}</p>
                      {CLINIC_CONTACT.hours.map((h, idx) => (
                        <p key={idx} className="mt-1">
                          <span className="text-slate-400">{isRtl ? h.daysAr : h.daysEn}:</span> <span dir="ltr">{h.hours}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex gap-3">
                  <a
                    href={`tel:${CLINIC_CONTACT.phone.replace(/\s+/g, '')}`}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold text-xs text-center border border-white/10 transition-colors"
                  >
                    {t.callReceptionBtn}
                  </a>
                  <a
                    href={CLINIC_CONTACT.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#128c7e] hover:bg-[#075e54] text-white py-3 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white text-[#128c7e]" />
                    <span>{t.whatsAppChat}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Embedded Google Maps Location */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-4 space-y-4">
              <div className="flex justify-between items-center px-2">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide font-mono">
                    {t.mapTitle}
                  </h4>
                  <p className="text-[11px] text-slate-400">{t.mapSub}</p>
                </div>
                <a
                  href="https://maps.google.com/?q=10th+of+Ramadan+City+Sharqia+Egypt"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-sky-50 text-[#0284c7] p-2 rounded-lg border border-sky-100 flex items-center gap-1 text-[10px] font-bold"
                >
                  <Navigation className="w-3 h-3" />
                  <span>{t.mapOpenBtn}</span>
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200/50 h-[240px] relative">
                {/* Embedded Map frame using iframe */}
                <iframe
                  src={CLINIC_CONTACT.mapsIframeUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Malabar Dental Clinic Al Qusais Dubai Location"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Success Dialog Modal */}
      <AnimatePresence>
        {successBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setSuccessBooking(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center space-y-6 z-10 border border-slate-100"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto border border-emerald-100">
                <Check className="w-8 h-8 stroke-[3px]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold font-display text-slate-800">
                  {t.successTitle}
                </h3>
                <p className="text-slate-500 text-xs px-2 leading-relaxed">
                  {isRtl ? (
                    <>
                      مرحباً <strong>{successBooking.name}</strong>، لقد تم حفظ طلبك لحجز خدمة <strong>{successBooking.service}</strong> بنجاح في النظام المحلي.
                    </>
                  ) : (
                    <>
                      Hi <strong>{successBooking.name}</strong>, your request for <strong>{successBooking.service}</strong> has been saved successfully in our system.
                    </>
                  )}
                </p>
              </div>

              {/* Dynamic Rec Doctor */}
              <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4 text-start flex gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-100/80 flex items-center justify-center text-[#0284c7] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-[#0284c7] uppercase font-mono tracking-wider">
                    {t.successRecDoc}
                  </span>
                  <p className="font-bold text-slate-800 text-xs mt-0.5">
                    {successBooking.service.includes('Children') || successBooking.service.includes('الأطفال') || successBooking.service.includes('Pediatric')
                      ? (isRtl ? 'د. أحمد الصاوي (أخصائي طب أسنان الأطفال)' : 'Dr. Ahmed El-Sawy (Pediatric Specialist)')
                      : successBooking.service.includes('Ortho') || successBooking.service.includes('تقويم') || successBooking.service.includes('Aligners')
                      ? (isRtl ? 'د. ياسمين شرف (رئيسة أطباء تقويم الأسنان)' : 'Dr. Yasmine Sharaf (Chief Orthodontist)')
                      : (isRtl ? 'د. محمد علي (أخصائي علاج العصب والزراعة)' : 'Dr. Mohamed Aly (Senior Endodontist & Implantologist)')}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    {t.successDateText} <span dir="ltr">{successBooking.date}</span> {isRtl ? 'في تمام الساعة' : 'at'} <span dir="ltr">{successBooking.time}</span>.
                  </p>
                </div>
              </div>

              {/* Confirm via WhatsApp button to actually connect */}
              <div className="space-y-3">
                <a
                  href={getWhatsAppBookingLink(successBooking)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#128c7e] hover:bg-[#075e54] text-white py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-[#128c7e]" />
                  <span>{t.whatsAppConfirm}</span>
                </a>
                
                <button
                  onClick={() => setSuccessBooking(null)}
                  className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 py-3 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                >
                  {t.successDoneBtn}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
