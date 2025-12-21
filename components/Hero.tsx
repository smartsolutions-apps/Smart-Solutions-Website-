
import React from 'react';
import { useTranslation } from '../App';

const Hero: React.FC = () => {
  const { t, locale } = useTranslation();
  
  // Clean background decor
  return (
    <section className="relative pt-32 md:pt-44 lg:pt-52 pb-24 md:pb-44 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Decor */}
      <div className={`absolute top-0 ${locale === 'ar' ? 'left-0' : 'right-0'} -z-10 w-2/3 h-full bg-indigo-50/50 ${locale === 'ar' ? 'rounded-br-[200px]' : 'rounded-bl-[200px]'} blur-3xl opacity-60`}></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
        <div className="flex-[1.4] text-center lg:text-start">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-black uppercase tracking-[0.3em] hover:bg-indigo-100 transition-colors cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></span>
            {t.hero.badge}
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black text-slate-900 leading-[1.1] lg:leading-[1] mb-10 tracking-tighter">
            {t.hero.title.split(' ')[0]} 
            <span className="text-indigo-600"> {t.hero.title.split(' ')[1]}</span> 
            <br className="hidden md:block"/>
            {t.hero.title.split(' ').slice(2).join(' ')}
          </h1>
          
          <p className="text-lg md:text-[1.5rem] text-slate-600 mb-12 md:mb-16 max-w-3xl mx-auto lg:mx-0 leading-[1.6] font-medium">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} 
              className="px-12 py-6 bg-indigo-600 text-white font-black text-lg rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(79,70,229,0.4)] hover:bg-indigo-700 hover:-translate-y-2 transition-all active:translate-y-0 flex items-center justify-center gap-3"
            >
              Start Project
            </button>
            <button 
              onClick={() => document.getElementById('apps')?.scrollIntoView({behavior: 'smooth'})} 
              className="px-12 py-6 bg-white text-slate-700 font-black text-lg border border-slate-200 rounded-[2rem] hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-2 transition-all active:translate-y-0 shadow-lg"
            >
              {t.hero.ctaWork}
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full group">
          <div className="alive-image-container relative z-10 rounded-[4rem] md:rounded-[5rem] shadow-[0_40px_100px_-20px_rgba(79,70,229,0.3)] bg-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium App Showcase" 
              className="alive-image w-full h-auto object-cover min-h-[450px] md:min-h-[650px]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent text-white text-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] group-hover:scale-110 transition-transform">{t.hero.flagship}</span>
                <span className="text-xs md:text-sm font-black text-indigo-300 tracking-widest group-hover:translate-x-2 transition-transform">{t.hero.downloads}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{t.hero.appTitle}</h3>
              <p className="text-sm md:text-base opacity-90 max-w-sm font-medium leading-relaxed">{t.hero.appDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
