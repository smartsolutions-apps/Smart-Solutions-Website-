
import React from 'react';
import { useTranslation } from '../App';

const AppLifecycle: React.FC = () => {
  const { t } = useTranslation();
  const phases = [
    { title: t.lifecycle.p1T, step: "01", desc: t.lifecycle.p1D, icon: "📝" },
    { title: t.lifecycle.p2T, step: "02", desc: t.lifecycle.p2D, icon: "🏗️" },
    { title: t.lifecycle.p3T, step: "03", desc: t.lifecycle.p3D, icon: "✨" },
    { title: t.lifecycle.p4T, step: "04", desc: t.lifecycle.p4D, icon: "🚀" }
  ];

  return (
    <section id="lifecycle" className="py-32 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t.lifecycle.badge}</h2>
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter">{t.lifecycle.title}</h3>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-100 hidden lg:block -translate-y-1/2"></div>
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {phases.map((phase, i) => (
              <div key={i} className="glass-card p-10 rounded-[3rem] text-center group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {phase.icon}
                </div>
                <div className="text-indigo-600 font-black text-xs mb-2 tracking-widest">{t.lifecycle.phase} {phase.step}</div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{phase.title}</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppLifecycle;
