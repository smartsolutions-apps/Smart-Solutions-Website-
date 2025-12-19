
import React from 'react';
import { useTranslation } from '../App';

const Timeline: React.FC = () => {
  const { t } = useTranslation();
  
  const eras = [
    { year: "1990s", title: t.timeline.e1T, desc: t.timeline.e1D, icon: "📱" },
    { year: "2008", title: t.timeline.e2T, desc: t.timeline.e2D, icon: "🚀" },
    { year: "2015", title: t.timeline.e3T, desc: t.timeline.e3D, icon: "☁️" },
    { year: "2024+", title: t.timeline.e4T, desc: t.timeline.e4D, icon: "🤖" }
  ];

  return (
    <section id="evolution" className="py-32 bg-slate-50 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t.timeline.badge}</h2>
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter">{t.timeline.title}</h3>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 relative">
            {eras.map((era, i) => (
              <div key={i} className="relative group text-start">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-indigo-100 transition-all duration-500 h-full flex flex-col">
                  <div className="text-3xl mb-4">{era.icon}</div>
                  <span className="text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-3 block">{era.year}</span>
                  <h4 className="text-lg font-black text-slate-900 mb-3">{era.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{era.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
