
import React, { useState } from 'react';
import { useTranslation } from '../App';

interface NavbarProps {
  activeTab: string;
}

export const SmartLogo: React.FC<{ className?: string; invert?: boolean }> = ({ className = "h-10 md:h-12", invert = false }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {/* Clean, simple branded S icon as requested */}
    <div className="relative shrink-0 group-hover:scale-105 transition-transform duration-300">
      <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md">
        <defs>
          <linearGradient id="brand_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#4338CA" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="25" fill="url(#brand_gradient)" />
        <text 
          x="50%" 
          y="52%" 
          dominantBaseline="middle" 
          textAnchor="middle" 
          fill="white" 
          fontSize="65" 
          fontWeight="900" 
          fontFamily="Inter, sans-serif"
          style={{ letterSpacing: '-0.05em' }}
        >
          S
        </text>
      </svg>
    </div>
    
    <div className="flex flex-col text-start select-none">
      <span className={`text-xl md:text-2xl font-black tracking-tighter leading-none uppercase ${invert ? 'text-white' : 'text-slate-900'}`}>
        Smart
      </span>
      <span className={`text-[9px] md:text-[11px] tracking-[0.4em] font-extrabold leading-none mt-1 uppercase ${invert ? 'text-indigo-300' : 'text-indigo-600'}`}>
        Solutions
      </span>
    </div>
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t.nav.home, id: 'home' },
    { label: 'Video', id: 'cinema' },
    { label: t.nav.lifecycle, id: 'lifecycle' },
    { label: t.nav.tech, id: 'tech-choices' },
    { label: t.nav.anatomy, id: 'anatomy' },
    { label: t.nav.connect, id: 'contact' },
  ];

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 mx-auto max-w-7xl">
      <div className="glass-card px-4 md:px-8 py-3 rounded-[2rem] flex items-center justify-between shadow-2xl border-white/40">
        <button 
          className="flex items-center cursor-pointer group shrink-0 transition-all active:scale-95" 
          onClick={() => handleScroll('home')}
          aria-label="Smart Solutions Home"
        >
          <SmartLogo />
        </button>
        
        <div className="hidden xl:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-indigo-600 relative py-2 ${
                activeTab === item.id ? 'text-indigo-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600' : 'text-slate-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => handleScroll('contact')}
            className="hidden sm:block bg-indigo-600 text-white px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 hover:-translate-y-1 transition-all shadow-xl active:scale-95"
          >
            {t.nav.start}
          </button>
          
          <button 
            className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-3 glass-card rounded-[2.5rem] p-8 shadow-2xl animate-slideIn xl:hidden border-white/40">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-start px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
