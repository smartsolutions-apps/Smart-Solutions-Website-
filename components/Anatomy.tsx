
import React from 'react';
import { useTranslation } from '../App';

const Anatomy: React.FC = () => {
  const { t } = useTranslation();
  
  const layers = [
    {
      title: t.anatomy.l1T,
      desc: t.anatomy.l1D,
      details: t.anatomy.l1L,
      icon: "🎨"
    },
    {
      title: t.anatomy.l2T,
      desc: t.anatomy.l2D,
      details: t.anatomy.l2L,
      icon: "🧠"
    },
    {
      title: t.anatomy.l3T,
      desc: t.anatomy.l3D,
      details: t.anatomy.l3L,
      icon: "💾"
    }
  ];

  return (
    <section id="anatomy" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t.anatomy.badge}</h2>
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter">{t.anatomy.title}</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {layers.map((layer, i) => (
            <div key={i} className="glass-card p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-all duration-500 text-start">
              <div className="text-5xl mb-8">{layer.icon}</div>
              <h4 className="text-2xl font-black text-slate-900 mb-4">{layer.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{layer.desc}</p>
              <ul className="space-y-3">
                {layer.details.map((detail: string, j: number) => (
                  <li key={j} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Anatomy;
