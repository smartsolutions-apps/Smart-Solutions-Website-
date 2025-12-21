
import React from 'react';
import { useTranslation } from '../App';

const Performance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="performance" className="py-32 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 reveal">{t.performance.badge}</h2>
        <h3 className="text-6xl font-black tracking-tighter mb-12 reveal">{t.performance.title}</h3>
        
        <div className="grid md:grid-cols-3 gap-12 text-start mb-20">
          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.08] transition-all group cursor-default hover:-translate-y-4 duration-500">
            <div className="text-indigo-400 text-5xl mb-6 font-black group-hover:scale-110 group-hover:text-indigo-300 transition-all origin-left">{t.performance.s1}</div>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium group-hover:text-slate-200 transition-colors">
              {t.performance.s1D}
            </p>
          </div>
          <div className="p-10 rounded-[3rem] bg-indigo-600 shadow-2xl shadow-indigo-900/40 hover:-translate-y-4 hover:bg-indigo-500 transition-all duration-500 group cursor-default">
            <div className="text-white text-5xl mb-6 font-black group-hover:scale-110 transition-transform origin-left">{t.performance.s2}</div>
            <p className="text-indigo-100 text-base md:text-lg leading-relaxed font-medium group-hover:text-white transition-colors">
              {t.performance.s2D}
            </p>
          </div>
          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.08] transition-all group cursor-default hover:-translate-y-4 duration-500">
            <div className="text-indigo-400 text-5xl mb-6 font-black group-hover:scale-110 group-hover:text-indigo-300 transition-all origin-left">{t.performance.s3}</div>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium group-hover:text-slate-200 transition-colors">
              {t.performance.s3D}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
