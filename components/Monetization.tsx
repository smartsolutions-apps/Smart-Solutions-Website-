
import React from 'react';

const Monetization: React.FC = () => {
  const models = [
    { title: "SaaS & Subscriptions", desc: "Recurring revenue models that focus on long-term user value.", icon: "💳" },
    { title: "Freemium", desc: "Offering core value for free while charging for premium features.", icon: "💎" },
    { title: "In-App Purchases", desc: "Common in gaming and creative apps for digital goods.", icon: "🛍️" },
    { title: "Ad-Based", desc: "Scaling through massive reach and targeted impressions.", icon: "📊" }
  ];

  return (
    <section id="monetization" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Business Logic</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">How Apps <br/>Scale & Monetize.</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              Building an app is just step one. Sustainable success requires a monetization strategy that respects the user while fueling growth.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {models.map((m, i) => (
                <div key={i} className="p-6 rounded-3xl border border-slate-100 hover:bg-slate-50 transition-colors group cursor-pointer hover:-translate-y-1 transform">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{m.icon}</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{m.title}</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-semibold">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-900 relative">
              {/* This is a hard-coded SVG Dashboard. It CANNOT break. */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Monthly Revenue</div>
                    <div className="text-3xl font-black text-white">$124,500</div>
                  </div>
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                  </div>
                </div>
                
                <div className="flex-1 flex items-end gap-2 py-8">
                  {[40, 70, 45, 90, 65, 80, 100, 85, 95, 75, 60, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-indigo-500/20 rounded-t-sm relative group/bar">
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-indigo-500 transition-all duration-1000 group-hover:bg-indigo-400" 
                        style={{ height: `${h}%` }}
                      ></div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="text-[9px] uppercase font-bold text-slate-500">Churn Rate</div>
                    <div className="text-xl font-bold text-white">1.2%</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="text-[9px] uppercase font-bold text-slate-500">LTV</div>
                    <div className="text-xl font-bold text-white">$242</div>
                  </div>
                </div>
              </div>
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors z-20 pointer-events-none"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-3xl shadow-2xl border border-indigo-50 z-30 transform group-hover:scale-110 transition-transform">
              <div className="text-indigo-600 font-black text-3xl mb-1">PROFIT</div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Engineered for Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monetization;
