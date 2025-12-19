
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
                <div key={i} className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all group cursor-pointer hover:-translate-y-1 transform">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{m.icon}</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{m.title}</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-semibold">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            {/* VIBRANT LIGHT-THEME DASHBOARD VISUAL - REMOVED ALL BLACK */}
            <div className="aspect-[1.1/1] rounded-[4rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(79,70,229,0.12)] bg-gradient-to-br from-indigo-500 to-purple-600 p-1 relative">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl"></div>
              
              <div className="relative h-full w-full bg-white/90 backdrop-blur-md rounded-[3.8rem] p-10 flex flex-col gap-8 overflow-hidden border border-white">
                {/* Header Section */}
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Revenue Analytics</div>
                    <div className="text-5xl font-black text-slate-900 tracking-tighter">$1,240,000<span className="text-base text-green-500 font-bold ml-2">↑ 24%</span></div>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-200">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                </div>

                {/* Growth Chart Visualization - High Vibrancy */}
                <div className="flex-1 flex items-end justify-between gap-3 px-2 relative">
                  <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col justify-between py-2 pointer-events-none opacity-20">
                    {[...Array(5)].map((_, i) => <div key={i} className="border-t-2 border-dashed border-indigo-200 w-full"></div>)}
                  </div>
                  {[45, 70, 55, 95, 80, 88, 100, 85].map((h, i) => (
                    <div key={i} className="flex-1 relative group/bar z-10">
                      <div 
                        className="w-full bg-gradient-to-t from-indigo-600 via-indigo-400 to-cyan-300 rounded-2xl transition-all duration-1000 ease-out shadow-lg" 
                        style={{ height: `${h}%`, transitionDelay: `${i * 60}ms` }}
                      >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all bg-slate-900 text-white text-[9px] font-black px-3 py-2 rounded-xl shadow-2xl whitespace-nowrap z-20">
                           Q{i+1} GROWTH: {h}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Metric Footer */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-indigo-50 p-6 rounded-[2.5rem] border border-indigo-100/50">
                    <div className="text-[9px] uppercase font-black text-indigo-400 mb-2 tracking-widest">Active Yield</div>
                    <div className="text-3xl font-black text-indigo-900">94.2%</div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-[2.5rem] border border-purple-100/50">
                    <div className="text-[9px] uppercase font-black text-purple-400 mb-2 tracking-widest">User Value</div>
                    <div className="text-3xl font-black text-purple-900">$48.50</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Branded Badge */}
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(79,70,229,0.3)] border-4 border-white z-30 transform group-hover:scale-105 transition-transform">
              <div className="text-white font-black text-4xl mb-1 tracking-tighter uppercase italic">SCALED</div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-200">Revenue Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monetization;
