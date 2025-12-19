
import React from 'react';
import { useTranslation } from '../App';

const Security: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="security" className="py-20 md:py-32 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 order-2 lg:order-1 w-full max-w-md mx-auto">
             <div className="relative">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                   <div className="h-44 md:h-72 bg-slate-100 rounded-[2.5rem] md:rounded-[4rem] flex items-center justify-center text-7xl md:text-8xl shadow-inner group hover:bg-slate-200 transition-colors">
                      <span className="group-hover:scale-110 transition-transform">🔒</span>
                   </div>
                   <div className="h-44 md:h-72 bg-indigo-50 rounded-[2.5rem] md:rounded-[4rem] mt-10 md:mt-16 flex items-center justify-center text-7xl md:text-8xl shadow-inner group hover:bg-indigo-100 transition-colors">
                      <span className="group-hover:scale-110 transition-transform">🛡️</span>
                   </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="glass-card px-8 py-4 md:px-12 md:py-6 rounded-full shadow-2xl border border-indigo-200 font-black text-indigo-600 text-xs md:text-sm tracking-[0.3em] uppercase animate-pulse-slow">
                      Encrypted
                   </div>
                </div>
             </div>
          </div>
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t.security.badge}</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter leading-[0.9]">{t.security.title}</h3>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
              {t.security.desc}
            </p>
            <div className="space-y-4 md:space-y-6 text-left inline-block lg:block">
               {[
                 t.security.f1,
                 t.security.f2,
                 t.security.f3
               ].map((text, i) => (
                 <div key={i} className="flex gap-4 items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold shrink-0 text-lg">✓</div>
                    <p className="text-sm md:text-base font-bold text-slate-700">{text}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
