
import React, { useState } from 'react';

interface NavbarProps {
  activeTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Process', id: 'design-thinking' },
    { label: 'Speed', id: 'performance' },
    { label: 'Security', id: 'security' },
    { label: 'Structure', id: 'anatomy' },
    { label: 'Future', id: 'future' },
    { label: 'Connect', id: 'contact' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 mx-auto max-w-7xl">
      <div className="glass-card px-6 py-3.5 rounded-2xl flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleScroll('home')}>
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:rotate-6 transition-transform">
            S
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-black tracking-tighter text-slate-800 leading-none">SMART</h1>
            <p className="text-[9px] tracking-[0.3em] font-bold text-indigo-600 leading-none mt-1">SOLUTIONS</p>
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

        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleScroll('contact')}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 hover:-translate-y-0.5 transition-all shadow-xl shadow-slate-200"
          >
            Start Project
          </button>
          
          <button 
            className="xl:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden mt-3 glass-card rounded-2xl p-8 shadow-2xl border border-white/40">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-left text-xs font-black uppercase tracking-widest ${
                  activeTab === item.id ? 'text-indigo-600' : 'text-slate-400'
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
