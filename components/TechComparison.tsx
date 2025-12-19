
import React from 'react';
import { useTranslation } from '../App';

const TechComparison: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="tech-choices" className="py-32 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-start">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t.techComparison.badge}</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">{t.techComparison.title}</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              {t.techComparison.desc}
            </p>
            
            <div className="space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-indigo-50 border border-indigo-100">
                <h4 className="font-black text-indigo-900 mb-2">{t.techComparison.nativeT}</h4>
                <p className="text-indigo-700/70 text-sm font-medium">{t.techComparison.nativeD}</p>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white">
                <h4 className="font-black mb-2">{t.techComparison.crossT}</h4>
                <p className="text-slate-400 text-sm font-medium">{t.techComparison.crossD}</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" alt="Mobile Development Tech" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechComparison;
