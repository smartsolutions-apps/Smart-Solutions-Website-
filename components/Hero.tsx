
import React from 'react';
import { useTranslation } from '../App';

const Hero: React.FC = () => {
  const { t, locale } = useTranslation();

  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className={`absolute top-0 ${locale === 'ar' ? 'left-0' : 'right-0'} -z-10 w-2/3 h-full bg-indigo-50/50 ${locale === 'ar' ? 'rounded-br-[200px]' : 'rounded-bl-[200px]'} blur-3xl opacity-60`}></div>
      <div className={`absolute -top-24 ${locale === 'ar' ? '-right-24' : '-left-24'} -z-10 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-40`}></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-20">
        <div className="flex-[1.2] text-center lg:text-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            {t.hero.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-8xl font-black text-slate-900 leading-[1.1] lg:leading-[0.95] mb-6 md:mb-8 tracking-tighter">
            {t.hero.title.split(' ')[0]} <span className="gradient-text">{t.hero.title.split(' ')[1]}</span> <br className="hidden md:block"/>{t.hero.title.split(' ').slice(2).join(' ')}
          </h1>
          <p className="text-base md:text-xl text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={() => document.getElementById('apps')?.scrollIntoView({behavior: 'smooth'})} className="px-10 py-5 bg-indigo-600 text-white font-extrabold rounded-2xl shadow-2xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all">
              {t.hero.ctaWork}
            </button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="px-10 py-5 bg-white text-slate-700 font-extrabold border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all">
              {t.hero.ctaStory}
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full">
          <div className="relative z-10 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(79,70,229,0.2)] group bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium App Showcase" 
              className="w-full h-auto object-cover min-h-[400px] md:min-h-[550px] group-hover:scale-105 transition-transform duration-1000 opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent text-white text-start">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-indigo-600 rounded-md text-[9px] font-black uppercase tracking-widest">{t.hero.flagship}</span>
                <span className="text-[10px] md:text-xs font-bold text-indigo-300">{t.hero.downloads}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-2">{t.hero.appTitle}</h3>
              <p className="text-xs md:text-sm opacity-80 max-w-sm font-medium">{t.hero.appDesc}</p>
            </div>
          </div>
          
          {/* Floating Badge - Desktop Only for layout sanity */}
          <div className={`absolute -bottom-10 ${locale === 'ar' ? '-right-10' : '-left-10'} glass-card p-6 rounded-3xl shadow-2xl hidden lg:block animate-bounce-slow`}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-start">
                <p className="text-sm font-black text-slate-800 uppercase tracking-widest">{t.hero.partner}</p>
                <p className="text-xs text-slate-500 font-bold">{t.hero.partnerDetail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
