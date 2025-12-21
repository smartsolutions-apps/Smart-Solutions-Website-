
import React from 'react';
import { useTranslation } from '../App';

const Anatomy: React.FC = () => {
  const { t } = useTranslation();
  
  const layers = [
    {
      title: t.anatomy.l1T,
      desc: t.anatomy.l1D,
      details: t.anatomy.l1L,
      icon: "🎨",
      color: "from-indigo-500/10 to-purple-500/10"
    },
    {
      title: t.anatomy.l2T,
      desc: t.anatomy.l2D,
      details: t.anatomy.l2L,
      icon: "🧠",
      color: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: t.anatomy.l3T,
      desc: t.anatomy.l3D,
      details: t.anatomy.l3L,
      icon: "💾",
      color: "from-cyan-500/10 to-blue-500/10"
    }
  ];

  return (
    <section id="anatomy" className="py-32 md:py-44 bg-slate-50 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-indigo-600 font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-6">{t.anatomy.badge}</h2>
          <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">{t.anatomy.title}</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 md:gap-12">
          {layers.map((layer, i) => (
            <div key={i} className="group relative glass-card p-10 md:p-14 rounded-[4rem] shadow-2xl hover:-translate-y-5 transition-all duration-700 text-start overflow-hidden border-2 border-transparent hover:border-indigo-200">
              {/* Animated Background Reveal */}
              <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10">
                <div className="text-6xl md:text-8xl mb-12 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-700 inline-block drop-shadow-2xl">{layer.icon}</div>
                <h4 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight group-hover:text-indigo-800 transition-colors">{layer.title}</h4>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 font-medium group-hover:text-slate-800 transition-colors">{layer.desc}</p>
                
                <ul className="space-y-6">
                  {layer.details.map((detail: string, j: number) => (
                    <li 
                      key={j} 
                      className={`flex items-center gap-5 text-base md:text-lg font-black text-slate-800 transition-all duration-500 group-hover:translate-x-4`}
                      style={{ transitionDelay: `${j * 60}ms` }}
                    >
                      <span className="w-3 h-3 rounded-full bg-indigo-600 shadow-xl group-hover:scale-125 group-hover:bg-purple-600 transition-all"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Anatomy;
