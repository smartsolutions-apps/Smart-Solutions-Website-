
import React from 'react';
import { useTranslation } from '../App';

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23F8FAFC'/><path d='M0 0 L400 300 M400 0 L0 300' stroke='%23EEF2FF' stroke-width='2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-weight='900' font-size='20' fill='%234F46E5' style='letter-spacing:4px'>SMART SOLUTIONS</text></svg>`;
};

const About: React.FC = () => {
  const { t, locale } = useTranslation();

  const about = t.about || { identity: 'Identity', title: 'About Us', desc: '', scale: '', scaleDesc: '', trust: '', trustDesc: '' };

  return (
    <section id="about" className="py-24 md:py-44 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12 md:pt-20">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl h-64 md:h-96 relative group bg-slate-50 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" 
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                    alt="Engineering Workspace" 
                  />
                </div>
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl h-40 md:h-56 relative bg-slate-50 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                    onError={handleImageError}
                    className="w-full h-full object-cover" 
                    alt="Clean Code Architecture" 
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl h-40 md:h-56 relative bg-slate-50 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                    onError={handleImageError}
                    className="w-full h-full object-cover" 
                    alt="Strategic Vision" 
                  />
                </div>
                <div className="rounded-[3rem] overflow-hidden shadow-2xl h-64 md:h-96 relative bg-slate-50 border border-slate-100">
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
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-6">{about.identity}</h2>
            <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 md:mb-12 leading-[1.05] md:leading-[0.95] tracking-tighter">
              {about.title}
            </h3>
            <p className={`text-slate-500 mb-12 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 ${locale === 'ar' ? 'md:leading-loose' : ''}`}>
              {about.desc}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="p-10 rounded-[2.5rem] md:rounded-[3rem] bg-indigo-50 border border-indigo-100 text-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-md mb-6 font-bold text-2xl">✓</div>
                <h4 className="font-black text-indigo-950 uppercase text-[10px] tracking-widest mb-2">{about.scale}</h4>
                <p className="text-xs md:text-sm text-indigo-600 font-black leading-tight uppercase tracking-tight">{about.scaleDesc}</p>
              </div>
              <div className="p-10 rounded-[2.5rem] md:rounded-[3rem] bg-slate-900 border border-slate-800 text-start">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-indigo-400 shadow-md mb-6 font-bold text-2xl">✓</div>
                <h4 className="font-black text-white uppercase text-[10px] tracking-widest mb-2">{about.trust}</h4>
                <p className="text-xs md:text-sm text-slate-400 font-black leading-tight uppercase tracking-tight">{about.trustDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
