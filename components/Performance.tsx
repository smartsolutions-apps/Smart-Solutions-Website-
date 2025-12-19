
import React from 'react';
import { useTranslation } from '../App';

const Performance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="performance" className="py-32 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t.performance.badge}</h2>
        <h3 className="text-6xl font-black tracking-tighter mb-12">{t.performance.title}</h3>
        
        <div className="grid md:grid-cols-3 gap-12 text-start mb-20">
          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10">
            <div className="text-indigo-400 text-4xl mb-6 font-black">{t.performance.s1}</div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              {t.performance.s1D}
            </p>
          </div>
          <div className="p-10 rounded-[3rem] bg-indigo-600">
            <div className="text-white text-4xl mb-6 font-black">{t.performance.s2}</div>
            <p className="text-indigo-100 text-sm leading-relaxed font-medium">
              {t.performance.s2D}
            </p>
          </div>
          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10">
            <div className="text-indigo-400 text-4xl mb-6 font-black">{t.performance.s3}</div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              {t.performance.s3D}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
