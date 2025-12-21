
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../App';
import { Locale } from '../translations';

interface NavbarProps {
  activeTab: string;
}

export const SmartLogo: React.FC<{ className?: string; invert?: boolean }> = ({ className = "h-10 md:h-12", invert = false }) => (
  <div className={`flex items-center gap-3 ${className} transition-opacity hover:opacity-90`}>
    <div className="relative shrink-0">
      <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md">
        <rect width="100" height="100" rx="24" fill={invert ? "white" : "#4F46E5"} />
        <text 
          x="50%" 
          y="54%" 
          dominantBaseline="middle" 
          textAnchor="middle" 
          fill={invert ? "#4F46E5" : "white"} 
          fontSize="60" 
          fontWeight="900" 
          fontFamily="'Inter', sans-serif"
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
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, locale, setLocale } = useTranslation();
  const langRef = useRef<HTMLDivElement>(null);

  const languages: { code: Locale; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🇪🇬' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: t.nav.home, id: 'home' },
    { label: t.about.identity, id: 'about' },
    { label: t.nav.lifecycle, id: 'lifecycle' },
    { label: t.nav.tech, id: 'tech-choices' },
    { label: t.nav.anatomy, id: 'anatomy' },
    { label: t.portfolio.badge, id: 'apps' },
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
    <nav className="fixed top-0 left-0 right-0 z-[70] px-4 md:px-6 py-4 mx-auto max-w-7xl">
      <div className="glass-card px-4 md:px-8 py-3 rounded-[2.5rem] flex items-center justify-between shadow-2xl border-white/60 relative">
        <button 
          className="flex items-center cursor-pointer shrink-0 transition-transform active:scale-95" 
          onClick={() => handleScroll('home')}
          aria-label="Smart Solutions Home"
        >
          <SmartLogo />
        </button>
        
        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Switcher Dropdown */}
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-50 hover:bg-indigo-50 border border-slate-100 rounded-xl transition-all"
            >
              <span className="text-sm md:text-base">{languages.find(l => l.code === locale)?.flag}</span>
              <span className="hidden md:block text-[9px] font-black uppercase tracking-widest text-slate-600">
                {locale}
              </span>
              <svg className={`w-3 h-3 text-slate-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLangOpen && (
              <div className="absolute top-full mt-2 right-0 w-40 bg-white border border-slate-100 rounded-2xl p-2 shadow-2xl animate-scaleIn z-[80]">
                {languages.map((lang) => (
                  <button 
                    key={lang.code} 
                    onClick={() => { setLocale(lang.code); setIsLangOpen(false); }} 
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      locale === lang.code ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => handleScroll('contact')}
            className="hidden sm:block bg-indigo-600 text-white px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 hover:-translate-y-1 transition-all shadow-xl active:scale-95"
          >
            {t.nav.start}
          </button>
          
          <button 
            className="p-3 text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all border border-slate-100 shadow-sm active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-3 glass-card rounded-[2.5rem] p-4 md:p-8 shadow-2xl animate-slideIn border-white/60">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-start px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === item.id ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-50'
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
