
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import IndustryStats from './components/IndustryStats';
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
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'lifecycle', 'tech-choices', 'anatomy', 'apps', 'monetization', 'design-thinking', 'performance', 'security', 'evolution', 'future', 'process', 'tech', 'contact'];
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
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar activeTab={activeTab} />
      <main>
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
        <section id="how-we-build" className="reveal">
          <Education />
        </section>
        <section id="contact" className="reveal">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
