
import React, { useState } from 'react';

const IndustryStats: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  
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
          <h3 className="text-4xl font-black mb-6 tracking-tighter">A Thriving Ecosystem.</h3>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
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

        <div className="mt-20 relative rounded-[3rem] overflow-hidden min-h-[400px] flex items-center justify-center border border-white/5 bg-slate-950 shadow-2xl">
          {imgError ? (
            /* Branded Abstract Tech UI Fallback */
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none bg-indigo-900/10">
               <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                 <defs>
                   <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="1"/>
                   </pattern>
                 </defs>
                 <rect width="100%" height="100%" fill="url(#grid)" />
               </svg>
            </div>
          ) : (
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbbda50d2671?auto=format&fit=crop&q=80&w=1600" 
              className="absolute inset-0 w-full h-full object-cover opacity-20" 
              alt="Data Analytics Visualization" 
              onError={() => setImgError(true)}
            />
          )}
          
          <div className="relative z-10 p-8 md:p-12 text-center max-w-3xl">
            <h4 className="text-2xl md:text-3xl font-black mb-6 italic tracking-tight leading-tight">"The future belongs to those who build it."</h4>
            <p className="text-slate-400 font-medium text-sm md:text-lg leading-relaxed">
              By 2030, mobile applications will be the primary gateway for all educational content globally. Smart Solutions is already building the foundation for this shift.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryStats;
