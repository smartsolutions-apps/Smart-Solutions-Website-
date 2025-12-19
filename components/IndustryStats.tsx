
import React, { useState } from 'react';
import { useTranslation } from '../App';

const IndustryStats: React.FC = () => {
  const { t } = useTranslation();
  const [imgError, setImgError] = useState(false);
  
  const stats = [
    { label: t.stats.s1, value: t.stats.s1V, detail: t.stats.s1D },
    { label: t.stats.s2, value: t.stats.s2V, detail: t.stats.s2D },
    { label: t.stats.s3, value: t.stats.s3V, detail: t.stats.s3D },
    { label: t.stats.s4, value: t.stats.s4V, detail: t.stats.s4D }
  ];

  return (
    <section id="industry" className="py-24 bg-slate-900 text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">{t.stats.badge}</h2>
          <h3 className="text-4xl font-black mb-6 tracking-tighter">{t.stats.title}</h3>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.stats.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all group text-start">
              <div className="text-4xl font-black mb-2 group-hover:text-indigo-400 transition-colors">{stat.value}</div>
              <div className="text-sm font-bold text-indigo-300 uppercase tracking-wider mb-2">{stat.label}</div>
              <p className="text-xs text-slate-500 leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative rounded-[3rem] overflow-hidden min-h-[400px] flex items-center justify-center border border-white/5 bg-slate-950 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbbda50d2671?auto=format&fit=crop&q=80&w=1600" 
            className="absolute inset-0 w-full h-full object-cover opacity-20" 
            alt="Data Analytics" 
            onError={() => setImgError(true)}
          />
          <div className="relative z-10 p-8 md:p-12 text-center max-w-3xl">
            <h4 className="text-2xl md:text-3xl font-black mb-6 italic tracking-tight leading-tight">{t.stats.quote}</h4>
            <p className="text-slate-400 font-medium text-sm md:text-lg leading-relaxed">
              {t.stats.insight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryStats;
