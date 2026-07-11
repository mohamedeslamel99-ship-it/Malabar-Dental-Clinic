import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import WhyChooseUs from './components/WhyChooseUs';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [activeSection, setActiveSection] = useState('home');
  const [preSelectedService, setPreSelectedService] = useState('');
  const [bookingCount, setBookingCount] = useState(0);

  // Synchronize HTML attributes with active language (for perfect native RTL/LTR flows)
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Intersection Observer to highlight current section in navigation bar
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'doctors', 'why-choose-us', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // Offset for navbar height
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionScroll = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectServiceAndScroll = (serviceTitle: string) => {
    setPreSelectedService(serviceTitle);
    handleSectionScroll('contact');
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-sky-200 selection:text-sky-950 transition-all duration-150 ${
        lang === 'ar' ? 'font-arabic' : 'font-sans'
      }`}
    >
      
      {/* Navigation Header bar */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        onBookClick={() => handleSectionScroll('contact')}
        onSectionClick={handleSectionScroll}
        activeSection={activeSection}
        bookingCount={bookingCount}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero */}
        <Hero
          lang={lang}
          onBookClick={() => handleSectionScroll('contact')}
        />

        {/* 2. About the Clinic */}
        <About lang={lang} />

        {/* 3. Services Grid & Modals */}
        <Services
          lang={lang}
          onSelectService={handleSelectServiceAndScroll}
        />

        {/* 4. Egyptian Specialized Doctors */}
        <Doctors
          lang={lang}
          onBookClick={() => handleSectionScroll('contact')}
        />

        {/* 5. Why Choose Us & Patient Testimonials */}
        <WhyChooseUs lang={lang} />

        {/* 6. Contact Directory & Interactive Booking Form */}
        <BookingForm
          lang={lang}
          preSelectedService={preSelectedService}
          onBookingChange={setBookingCount}
        />

      </main>

      {/* Footer & License metadata */}
      <Footer
        lang={lang}
        onSectionClick={handleSectionScroll}
      />

    </div>
  );
}
