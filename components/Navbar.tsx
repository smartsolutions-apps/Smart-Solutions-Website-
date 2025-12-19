
import React, { useState } from 'react';
import { useTranslation } from '../App';

interface NavbarProps {
  activeTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, locale } = useTranslation();

  const navItems = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.lifecycle, id: 'lifecycle' },
    { label: t.nav.tech, id: 'tech-choices' },
    { label: t.nav.ecosystem, id: 'ecosystem' },
    { label: t.nav.anatomy, id: 'anatomy' },
    { label: t.nav.connect, id: 'contact' },
  ];

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 mx-auto max-w-7xl">
      <div className="glass-card px-4 md:px-6 py-3 rounded-2xl flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3 cursor-pointer group shrink-0" onClick={() => handleScroll('home')}>
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:rotate-6 transition-transform">
            S
          </div>
          <div className="hidden sm:block text-start">
            <h1 className="text-xl font-black tracking-tighter text-slate-800 leading-none uppercase">Smart</h1>
            <p className="text-[9px] tracking-[0.3em] font-bold text-indigo-600 leading-none mt-1 uppercase">Solutions</p>
          </div>
        </div>
        
        <div className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-indigo-600 ${
                activeTab === item.id ? 'text-indigo-600' : 'text-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => handleScroll('contact')}
            className="hidden sm:block bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 hover:-translate-y-0.5 transition-all shadow-xl whitespace-nowrap"
          >
            {t.nav.start}
          </button>
          
          <button 
            className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
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
        <div className="mt-3 glass-card rounded-[2rem] p-6 shadow-2xl border border-white/40 animate-slideIn">
          <div className="flex flex-col gap-2">
            {/* Primary Action Button at Top of Mobile Menu */}
            <button 
              onClick={() => handleScroll('contact')}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-lg mb-4 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
              {t.nav.start}
            </button>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-start px-4 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <style>{`
        @keyframes slideIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideIn { animation: slideIn 0.3s ease-out forwards; }
      `}</style>
    </nav>
  );
};

export default Navbar;
