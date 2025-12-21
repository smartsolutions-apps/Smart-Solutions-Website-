
import React from 'react';
import { useTranslation } from '../App';

const Hero: React.FC = () => {
  const { t, locale } = useTranslation();

  return (
    <section className="relative pt-32 md:pt-44 lg:pt-52 pb-24 md:pb-44 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className={`absolute top-0 ${locale === 'ar' ? 'left-0' : 'right-0'} -z-10 w-2/3 h-full bg-indigo-50/50 ${locale === 'ar' ? 'rounded-br-[200px]' : 'rounded-bl-[200px]'} blur-3xl opacity-60`}></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
        <div className="flex-[1.4] text-center lg:text-start">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-black uppercase tracking-[0.3em] hover:bg-indigo-100 transition-colors cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></span>
            {t.hero.badge}
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black text-slate-900 leading-[1.1] lg:leading-[1] mb-10 tracking-tighter">
            {t.hero.title.split(' ')[0]} <span className="gradient-text transition-all duration-700 hover:tracking-tight cursor-default">{t.hero.title.split(' ')[1]}</span> <br className="hidden md:block"/>{t.hero.title.split(' ').slice(2).join(' ')}
          </h1>
          <p className="text-lg md:text-[1.5rem] text-slate-600 mb-12 md:mb-16 max-w-3xl mx-auto lg:mx-0 leading-[1.6] font-medium">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button onClick={() => document.getElementById('apps')?.scrollIntoView({behavior: 'smooth'})} className="group relative px-12 py-6 bg-indigo-600 text-white font-black text-lg rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(79,70,229,0.4)] hover:bg-indigo-700 hover:-translate-y-2 transition-all overflow-hidden">
              <span className="relative z-10">{t.hero.ctaWork}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="px-12 py-6 bg-white text-slate-700 font-black text-lg border border-slate-200 rounded-[2rem] hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-2 transition-all">
              {t.hero.ctaStory}
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full group">
          <div className="alive-image-container relative z-10 rounded-[3rem] md:rounded-[5rem] shadow-[0_40px_100px_-20px_rgba(79,70,229,0.3)] bg-slate-200 cursor-zoom-in">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium App Showcase" 
              className="alive-image w-full h-auto object-cover min-h-[450px] md:min-h-[650px]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent text-white text-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] group-hover:scale-110 transition-transform">{t.hero.flagship}</span>
                <span className="text-xs md:text-sm font-black text-indigo-300 tracking-widest group-hover:translate-x-2 transition-transform">{t.hero.downloads}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{t.hero.appTitle}</h3>
              <p className="text-sm md:text-base opacity-90 max-w-sm font-medium leading-relaxed">{t.hero.appDesc}</p>
            </div>
          </div>
          
          {/* Floating Badge Reacting to Hover */}
          <div className={`absolute -bottom-12 ${locale === 'ar' ? '-right-12' : '-left-12'} glass-card p-8 rounded-[2.5rem] shadow-2xl hidden lg:block animate-float border-white/50 border-2 group-hover:rotate-3 transition-transform duration-700`}>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-purple-600 transition-all duration-500">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-start">
                <p className="text-base font-black text-slate-900 uppercase tracking-widest mb-1">{t.hero.partner}</p>
                <p className="text-sm text-slate-500 font-black uppercase tracking-tight">{t.hero.partnerDetail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
