
import React from 'react';

const IndustryStats: React.FC = () => {
  const stats = [
    { label: "Global App Revenue", value: "$600B+", detail: "Projected annual market size by 2025" },
    { label: "Daily Time Spent", value: "4.8 Hours", detail: "Average time users spend in mobile apps" },
    { label: "Total Downloads", value: "250B+", detail: "Applications downloaded globally per year" },
    { label: "Growth Rate", value: "15% YoY", detail: "Consistent expansion of the digital economy" }
  ];

  return (
    <section id="industry" className="py-24 bg-slate-900 text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">The Digital Revolution</h2>
          <h3 className="text-4xl font-black mb-6">A Thriving Ecosystem.</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The app industry isn't just growing; it's redefining how humanity interacts, learns, and plays. We position our work at the forefront of these global trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all group">
              <div className="text-4xl font-black mb-2 group-hover:text-indigo-400 transition-colors">{stat.value}</div>
              <div className="text-sm font-bold text-indigo-300 uppercase tracking-wider mb-2">{stat.label}</div>
              <p className="text-xs text-slate-500 leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative rounded-3xl overflow-hidden aspect-[21/9] flex items-center justify-center border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1454165833762-02ad50e8958d?auto=format&fit=crop&q=80&w=1200" 
            className="absolute inset-0 w-full h-full object-cover opacity-20" 
            alt="Business team analyzing digital metrics" 
            loading="lazy"
          />
          <div className="relative z-10 p-12 text-center">
            <h4 className="text-2xl font-bold mb-4 italic">"The future belongs to those who build it."</h4>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">By 2030, mobile applications will be the primary gateway for all educational content globally. Smart Solutions is already building the foundation for this shift.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryStats;
