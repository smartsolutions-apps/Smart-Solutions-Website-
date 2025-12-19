
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
          
          <div className="relative group">
            {/* VIBRANT DASHBOARD VISUAL */}
            <div className="aspect-[1.1/1] rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(79,70,229,0.2)] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-1 relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
              
              <div className="relative h-full w-full bg-slate-950/80 backdrop-blur-md rounded-[3.2rem] p-8 flex flex-col gap-6 overflow-hidden">
                {/* Header Section */}
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Yield Analytics</div>
                    <div className="text-4xl font-black text-white tracking-tighter">$2,482,190<span className="text-lg text-green-400 ml-2">↑ 24%</span></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                       <div className="w-4 h-4 rounded-full border-2 border-indigo-400"></div>
                    </div>
                  </div>
                </div>

                {/* Main Graph Area */}
                <div className="flex-1 flex items-end justify-between gap-1.5 px-2 relative">
                  {/* Decorative Grid Lines */}
                  <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none opacity-10">
                    {[...Array(5)].map((_, i) => <div key={i} className="border-t border-white w-full"></div>)}
                  </div>
                  
                  {[35, 55, 45, 85, 65, 75, 95, 80, 70, 90, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 group/bar relative">
                      <div 
                        className="w-full bg-gradient-to-t from-indigo-600 to-purple-400 rounded-t-lg transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(79,70,229,0.3)]" 
                        style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }}
                      >
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-white text-slate-900 text-[9px] font-black px-2 py-1 rounded shadow-lg pointer-events-none">
                           {h}%
                         </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 p-5 rounded-3xl border border-white/10 backdrop-blur-xl">
                    <div className="text-[9px] uppercase font-black text-slate-500 mb-1">Retention</div>
                    <div className="text-xl font-black text-white">88.4%</div>
                  </div>
                  <div className="bg-white/5 p-5 rounded-3xl border border-white/10 backdrop-blur-xl">
                    <div className="text-[9px] uppercase font-black text-slate-500 mb-1">LTV</div>
                    <div className="text-xl font-black text-white">$142.5</div>
                  </div>
                  <div className="bg-white/5 p-5 rounded-3xl border border-white/10 backdrop-blur-xl">
                    <div className="text-[9px] uppercase font-black text-slate-500 mb-1">ARPU</div>
                    <div className="text-xl font-black text-white">$12.9</div>
                  </div>
                </div>

                {/* Animated Particles */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 glass-card p-10 rounded-[2.5rem] shadow-2xl border border-indigo-50/50 z-30 transform group-hover:scale-105 transition-transform">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-black text-4xl mb-1 italic">GROWTH</div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Performance Index</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monetization;
