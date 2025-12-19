
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
                <div key={i} className="p-6 rounded-3xl border border-slate-100 hover:bg-slate-50 transition-colors group">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{m.icon}</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{m.title}</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-semibold">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 relative">
              {/* Resilient placeholder background displayed if image fails */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-slate-100 flex items-center justify-center -z-10">
                <svg className="w-20 h-20 text-indigo-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Growth analytics and data dashboard visualization" 
                className="w-full h-full object-cover relative z-10"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-indigo-600/5 z-20 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-3xl shadow-2xl border border-indigo-50 z-30">
              <div className="text-indigo-600 font-black text-3xl mb-1">$613B</div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Total App Market 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monetization;
