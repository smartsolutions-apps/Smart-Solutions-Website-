
import React from 'react';
import { useTranslation } from '../App';

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23F8FAFC'/><path d='M0 0 L400 300 M400 0 L0 300' stroke='%23EEF2FF' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-weight='900' font-size='20' fill='%234F46E5' style='letter-spacing:4px'>SMART SOLUTIONS</text></svg>`;
};

const About: React.FC = () => {
  const { t } = useTranslation();

  // Guard against missing keys
  const about = t.about || { identity: 'Identity', title: 'About Us', desc: '', scale: '', scaleDesc: '', trust: '', trustDesc: '' };

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-60 md:h-80 relative group bg-slate-50">
                  <img 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" 
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                    alt="Engineering Workspace" 
                  />
                </div>
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl h-36 md:h-48 relative bg-slate-50">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                    onError={handleImageError}
                    className="w-full h-full object-cover" 
                    alt="Clean Code Architecture" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl h-36 md:h-48 relative bg-slate-50">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                    onError={handleImageError}
                    className="w-full h-full object-cover" 
                    alt="Strategic Vision" 
                  />
                </div>
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-60 md:h-80 relative bg-slate-50">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                    onError={handleImageError}
                    className="w-full h-full object-cover" 
                    alt="Product Excellence" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-start">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">{about.identity}</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 leading-[0.9] tracking-tighter">
              {about.title}
            </h3>
            <p className="text-slate-500 mb-8 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              {about.desc}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="p-8 rounded-[2.5rem] bg-indigo-50 border border-indigo-100 text-start">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm mb-4">✓</div>
                <h4 className="font-bold text-indigo-900 uppercase text-[9px] tracking-widest mb-1">{about.scale}</h4>
                <p className="text-[11px] text-indigo-600/70 font-bold leading-tight">{about.scaleDesc}</p>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-slate-800 text-start">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400 shadow-sm mb-4">✓</div>
                <h4 className="font-bold text-white uppercase text-[9px] tracking-widest mb-1">{about.trust}</h4>
                <p className="text-[11px] text-slate-400 font-bold leading-tight">{about.trustDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
