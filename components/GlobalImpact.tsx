
import React from 'react';
import { useTranslation } from '../App';

const GlobalImpact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-32 bg-indigo-600 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          <circle cx="400" cy="200" r="150" stroke="white" strokeWidth="1" strokeDasharray="10 10" />
          <circle cx="400" cy="200" r="250" stroke="white" strokeWidth="1" strokeDasharray="20 20" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-indigo-200 font-black uppercase tracking-[0.3em] text-[10px] mb-6">{t.globalImpact.badge}</h2>
        <div className="text-7xl md:text-9xl font-black mb-6 tracking-tighter">{t.globalImpact.s3V}</div>
        <p className="text-2xl md:text-3xl font-bold mb-12 text-indigo-100">{t.globalImpact.title}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6 bg-white/10 rounded-3xl backdrop-blur">
            <div className="text-2xl font-black">{t.globalImpact.s1V}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">{t.globalImpact.s1}</div>
          </div>
          <div className="p-6 bg-white/10 rounded-3xl backdrop-blur">
            <div className="text-2xl font-black">{t.globalImpact.s2V}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">{t.globalImpact.s2}</div>
          </div>
          <div className="p-6 bg-white/10 rounded-3xl backdrop-blur">
            <div className="text-2xl font-black">{t.globalImpact.s3V}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">{t.globalImpact.s3}</div>
          </div>
          <div className="p-6 bg-white/10 rounded-3xl backdrop-blur">
            <div className="text-2xl font-black">{t.globalImpact.s4V}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">{t.globalImpact.s4}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;
