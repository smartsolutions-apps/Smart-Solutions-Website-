
import React from 'react';

const Monetization: React.FC = () => {
  const models = [
    { title: "SaaS & Subscriptions", desc: "Recurring revenue models that focus on long-term user value.", icon: "💳" },
    { title: "Freemium", desc: "Offering core value for free while charging for premium features.", icon: "💎" },
    { title: "In-App Purchases", desc: "Common in gaming and creative apps for digital goods.", icon: "🛍️" },
    { title: "Ad-Based", desc: "Scaling through massive reach and targeted impressions.", icon: "📊" }
  ];

  return (
    <section id="monetization" className="py-32 bg-slate-50 px-6">
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
                <div key={i} className="p-6 rounded-3xl bg-white border border-slate-100 hover:shadow-lg hover:border-indigo-100 transition-all group cursor-pointer hover:-translate-y-1 transform">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{m.icon}</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{m.title}</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-semibold">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            {/* VIBRANT LIGHT-THEME DASHBOARD VISUAL */}
            <div className="aspect-[1.1/1] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(79,70,229,0.15)] bg-white p-2 relative border border-white">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
              
              <div className="relative h-full w-full bg-white/40 backdrop-blur-xl rounded-[3.8rem] p-10 flex flex-col gap-8 overflow-hidden border border-white">
                {/* Header Section */}
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Revenue Stream</div>
                    <div className="text-5xl font-black text-slate-900 tracking-tighter">$1.2M<span className="text-base text-green-500 font-bold ml-2">+24%</span></div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                </div>

                {/* Growth Chart Visualization */}
                <div className="flex-1 flex items-end justify-between gap-2 px-2 relative">
                  <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                    {[...Array(4)].map((_, i) => <div key={i} className="border-t border-slate-100 w-full"></div>)}
                  </div>
                  {[40, 65, 50, 90, 75, 85, 100, 80].map((h, i) => (
                    <div key={i} className="flex-1 relative group/bar">
                      <div 
                        className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-2xl transition-all duration-1000 ease-out shadow-lg" 
                        style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
                      >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-slate-900 text-white text-[9px] font-black px-2 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-20">
                          {h}% GROWTH
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Metric Footer */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-indigo-50/50 p-6 rounded-[2rem] border border-indigo-100/50">
                    <div className="text-[9px] uppercase font-black text-indigo-400 mb-1 tracking-widest">Active Yield</div>
                    <div className="text-2xl font-black text-indigo-900">94%</div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                    <div className="text-[9px] uppercase font-black text-slate-400 mb-1 tracking-widest">User Value</div>
                    <div className="text-2xl font-black text-slate-900">$48.5</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Branded Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-indigo-50 z-30 transform group-hover:scale-105 transition-transform">
              <div className="text-indigo-600 font-black text-3xl mb-1 tracking-tighter uppercase italic">REVENUE</div>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Scale Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monetization;
