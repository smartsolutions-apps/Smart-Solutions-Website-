
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import IndustryStats from './components/IndustryStats';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'industry', 'apps', 'process', 'tech', 'how-we-build'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveTab(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeTab={activeTab} />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="industry">
          <IndustryStats />
        </div>
        <div id="apps">
          <Portfolio />
        </div>
        <div id="process">
          <Process />
        </div>
        <div id="tech">
          <TechStack />
        </div>
        <div id="how-we-build">
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
