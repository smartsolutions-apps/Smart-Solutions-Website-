
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Locale, translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import IndustryStats from './components/IndustryStats';
import InnovationHub from './components/InnovationHub';
import Anatomy from './components/Anatomy';
import Portfolio from './components/Portfolio';
import AppLifecycle from './components/AppLifecycle';
import TechComparison from './components/TechComparison';
import Monetization from './components/Monetization';
import DesignThinking from './components/DesignThinking';
import Performance from './components/Performance';
import Security from './components/Security';
import Timeline from './components/Timeline';
import GlobalImpact from './components/GlobalImpact';
import FutureTrends from './components/FutureTrends';
import Process from './components/Process';
import TechStack from './components/TechStack';
import TechEcosystem from './components/TechEcosystem';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within a LanguageProvider');
  return context;
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [locale, setLocale] = useState<Locale>('en');

  const t = translations[locale];

  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    
    // Smooth transition for fonts - ensured IBM Plex Sans Arabic is available
    if (locale === 'ar') {
      document.body.style.fontFamily = "'Inter', 'IBM Plex Sans Arabic', 'Noto Sans Arabic', sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', sans-serif";
    }
  }, [locale]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'industry', 'innovation', 'lifecycle', 'tech-choices', 'anatomy', 'apps', 'design-thinking', 'performance', 'monetization', 'security', 'evolution', 'future', 'process', 'tech', 'ecosystem', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveTab(section);
        }
      }
    };

    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100; // Lowered for better mobile trigger
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    revealOnScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      <div className={`min-h-screen selection:bg-indigo-100 selection:text-indigo-900 bg-white ${locale === 'ar' ? 'font-arabic' : ''}`}>
        <Navbar activeTab={activeTab} />
        <main className="overflow-x-hidden">
          <section id="home">
            <Hero />
          </section>
          <section id="about" className="reveal">
            <About />
          </section>
          <section className="reveal">
            <Values />
          </section>
          <section id="industry" className="reveal">
            <IndustryStats />
          </section>
          <section id="innovation" className="reveal">
            <InnovationHub />
          </section>
          <section id="lifecycle" className="reveal">
            <AppLifecycle />
          </section>
          <section id="tech-choices" className="reveal">
            <TechComparison />
          </section>
          <section id="anatomy" className="reveal">
            <Anatomy />
          </section>
          <section id="apps" className="reveal">
            <Portfolio />
          </section>
          <section id="design-thinking" className="reveal">
            <DesignThinking />
          </section>
          <section id="performance" className="reveal">
            <Performance />
          </section>
          <section id="monetization" className="reveal">
            <Monetization />
          </section>
          <section id="security" className="reveal">
            <Security />
          </section>
          <section id="evolution" className="reveal">
            <Timeline />
          </section>
          <section className="reveal">
            <GlobalImpact />
          </section>
          <section id="future" className="reveal">
            <FutureTrends />
          </section>
          <section id="process" className="reveal">
            <Process />
          </section>
          <section id="tech" className="reveal">
            <TechStack />
          </section>
          <section id="ecosystem" className="reveal">
            <TechEcosystem />
          </section>
          <section id="how-we-build" className="reveal">
            <Education />
          </section>
          <section id="contact" className="reveal">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
