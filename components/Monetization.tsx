
import React from 'react';
import { useTranslation } from '../App';

const Monetization: React.FC = () => {
  const { t } = useTranslation();

  const models = [
    { title: t.monetization.m1T, desc: t.monetization.m1D, icon: "💳" },
    { title: t.monetization.m2T, desc: t.monetization.m2D, icon: "💎" },
    { title: t.monetization.m3T, desc: t.monetization.m3D, icon: "🛍️" },
    { title: t.monetization.m4T, desc: t.monetization.m4D, icon: "📊" }
  ];

  return (
    <section id="monetization" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-start">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t.monetization.badge}</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">{t.monetization.title}</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              {t.monetization.desc}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {models.map((m, i) => (
                <div key={i} className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all group cursor-pointer hover:-translate-y-1 transform text-start">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{m.icon}</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{m.title}</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-semibold">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[1.1/1] rounded-[4rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(79,70,229,0.12)] bg-gradient-to-br from-indigo-500 to-purple-600 p-1 relative">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl"></div>
              <div className="relative h-full w-full bg-white/90 backdrop-blur-md rounded-[3.8rem] p-10 flex flex-col gap-8 overflow-hidden border border-white">
                <div className="flex justify-between items-start text-start">
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">{t.monetization.dashTitle}</div>
                    <div className="text-5xl font-black text-slate-900 tracking-tighter">$1,240,000<span className="text-base text-green-500 font-bold ml-2">{t.monetization.dashGrowth}</span></div>
                  </div>
                </div>

                <div className="flex-1 flex items-end justify-between gap-3 px-2 relative">
                  {[45, 70, 55, 95, 80, 88, 100, 85].map((h, i) => (
                    <div key={i} className="flex-1 relative group/bar z-10">
                      <div className="w-full bg-gradient-to-t from-indigo-600 via-indigo-400 to-cyan-300 rounded-2xl transition-all shadow-lg" style={{ height: `${h}%` }}></div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6 text-start">
                  <div className="bg-indigo-50 p-6 rounded-[2.5rem]">
                    <div className="text-[9px] uppercase font-black text-indigo-400 mb-2 tracking-widest">{t.monetization.metric1}</div>
                    <div className="text-3xl font-black text-indigo-900">94.2%</div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-[2.5rem]">
                    <div className="text-[9px] uppercase font-black text-purple-400 mb-2 tracking-widest">{t.monetization.metric2}</div>
                    <div className="text-3xl font-black text-purple-900">$48.50</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 p-10 rounded-[3rem] shadow-2xl border-4 border-white z-30 text-start">
              <div className="text-white font-black text-4xl mb-1 tracking-tighter uppercase italic">{t.monetization.badgeLabel}</div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-200">{t.monetization.badgeSub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monetization;
