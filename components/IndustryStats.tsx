
import React from 'react';
import { useTranslation } from '../App';

const IndustryStats: React.FC = () => {
  const { t } = useTranslation();
  
  const stats = [
    { label: t.stats.s1, value: t.stats.s1V, detail: t.stats.s1D },
    { label: t.stats.s2, value: t.stats.s2V, detail: t.stats.s2D },
    { label: t.stats.s3, value: t.stats.s3V, detail: t.stats.s3D },
    { label: t.stats.s4, value: t.stats.s4V, detail: t.stats.s4D }
  ];

  return (
    <section id="industry" className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 reveal">{t.stats.badge}</h2>
          <h3 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter reveal">{t.stats.title}</h3>
          <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium reveal">
            {t.stats.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.08] transition-all group text-start cursor-default hover:-translate-y-3 duration-500">
              <div className="text-5xl md:text-6xl font-black mb-4 group-hover:text-indigo-400 group-hover:scale-105 transition-all origin-left duration-500">{stat.value}</div>
              <div className="text-sm font-black text-indigo-300 uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 group-hover:animate-ping shadow-[0_0_10px_#6366f1]"></span>
                {stat.label}
              </div>
              <p className="text-base text-slate-500 leading-relaxed font-medium group-hover:text-slate-400 transition-colors">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 alive-image-container relative rounded-[3.5rem] md:rounded-[5rem] min-h-[500px] flex items-center justify-center border border-white/10 bg-slate-950 shadow-2xl group cursor-default">
          {/* FIXED IMAGE SOURCE */}
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbbda50d2671?auto=format&fit=crop&q=80&w=2000" 
            className="alive-image absolute inset-0 w-full h-full object-cover opacity-20" 
            alt="Data Analytics Platform Visualization" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-slate-950/40 to-purple-950/70"></div>
          
          <div className="relative z-10 p-8 md:p-20 text-center max-w-4xl">
            <h4 className="text-4xl md:text-7xl font-black mb-10 italic tracking-tighter leading-[1.1] md:leading-[1] transition-all duration-700 group-hover:tracking-tight group-hover:scale-105">
              "{t.stats.quote.replace(/"/g, '')}"
            </h4>
            <div className="w-24 h-2 bg-indigo-500 mx-auto mb-10 rounded-full group-hover:w-64 group-hover:bg-purple-500 transition-all duration-1000"></div>
            <p className="text-slate-200 font-bold text-xl md:text-3xl leading-relaxed max-w-2xl mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
              {t.stats.insight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryStats;
