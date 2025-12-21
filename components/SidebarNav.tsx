
import React from 'react';
import { useTranslation } from '../App';

interface SidebarNavProps {
  activeTab: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ activeTab }) => {
  const { t, locale } = useTranslation();

  const sections = [
    { id: 'home', label: t.nav.home },
    { id: 'cinema', label: 'Video' },
    { id: 'about', label: t.about.identity },
    { id: 'lifecycle', label: t.nav.lifecycle },
    { id: 'tech-choices', label: t.nav.tech },
    { id: 'anatomy', label: t.nav.anatomy },
    { id: 'apps', label: t.portfolio.badge },
    { id: 'contact', label: t.nav.connect },
  ];

  const currentIndex = sections.findIndex(s => s.id === activeTab);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    }
  };

  const goNext = () => {
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1].id);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1].id);
    }
  };

  return (
    <div 
      className={`fixed top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col items-center gap-6 ${
        locale === 'ar' ? 'left-6 md:left-8' : 'right-6 md:right-8'
      }`}
    >
      <div className="glass-card py-6 px-3 rounded-full shadow-2xl border-white/60 flex flex-col items-center gap-4">
        {/* Up Arrow */}
        <button 
          onClick={goPrev}
          disabled={currentIndex <= 0}
          className={`p-2 rounded-full transition-all ${currentIndex <= 0 ? 'text-slate-200 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-50 active:scale-90'}`}
          aria-label="Previous Section"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="flex flex-col gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center justify-center p-1.5"
              aria-label={`Go to ${section.label}`}
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                activeTab === section.id ? 'bg-indigo-600 scale-[1.8] shadow-[0_0_10px_rgba(79,70,229,0.5)]' : 'bg-slate-300 group-hover:bg-indigo-300 group-hover:scale-125'
              }`} />
              
              {/* Tooltip */}
              <span className={`absolute ${locale === 'ar' ? 'left-10' : 'right-10'} px-3 py-1.5 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl`}>
                {section.label}
              </span>
            </button>
          ))}
        </div>

        {/* Down Arrow */}
        <button 
          onClick={goNext}
          disabled={currentIndex >= sections.length - 1}
          className={`p-2 rounded-full transition-all ${currentIndex >= sections.length - 1 ? 'text-slate-200 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-50 active:scale-90'}`}
          aria-label="Next Section"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      {/* Scroll Progress Bar Background */}
      <div className="w-0.5 h-12 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="w-full bg-indigo-600 transition-all duration-500" 
          style={{ height: `${((currentIndex + 1) / sections.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default SidebarNav;
