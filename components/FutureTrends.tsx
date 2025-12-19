
import React from 'react';

const FutureTrends: React.FC = () => {
  const trends = [
    { title: "Spatial Computing", desc: "The merge of digital apps with physical space via AR glasses.", year: "2025" },
    { title: "Edge AI", desc: "Complex neural networks running locally on your device hardware.", year: "2026" },
    { title: "Zero-UI", desc: "Apps driven entirely by voice, gesture, and anticipation.", year: "2027" }
  ];

  return (
    <section id="future" className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white"></div>)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Horizon Scan</h2>
            <h3 className="text-5xl font-black tracking-tighter">Future Trends & <br/>Next-Gen Architectures.</h3>
          </div>
          <div className="text-slate-400 font-medium max-w-sm text-sm italic">
            "The screen is disappearing. We are moving toward a world where the interface is the environment itself."
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {trends.map((trend, i) => (
            <div key={i} className="group relative p-12 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
              <span className="absolute top-8 right-8 text-xs font-black text-indigo-400 tracking-widest">{trend.year}</span>
              <h4 className="text-2xl font-black mb-6">{trend.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">{trend.desc}</p>
              <div className="w-12 h-[2px] bg-indigo-500 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureTrends;
