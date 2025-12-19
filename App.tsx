
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import IndustryStats from './components/IndustryStats';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'industry', 'apps', 'evolution', 'process', 'tech', 'how-we-build', 'contact'];
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
        <section id="industry" className="reveal">
          <IndustryStats />
        </section>
        <section id="apps" className="reveal">
          <Portfolio />
        </section>
        <section id="evolution" className="reveal">
          <Timeline />
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
