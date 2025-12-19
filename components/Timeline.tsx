
import React from 'react';

const Timeline: React.FC = () => {
  const eras = [
    {
      year: "1990s",
      title: "The WAP Genesis",
      desc: "Text-based interfaces and simple utility. Built-in tools like Calculators and Snake.",
      icon: "📱"
    },
    {
      year: "2008",
      title: "The Big Bang",
      desc: "App Store launch. Developers gain the power to build software globally.",
      icon: "🚀"
    },
    {
      year: "2015",
      title: "The Cloud Shift",
      desc: "Real-time sync and high-performance mobile gaming engines.",
      icon: "☁️"
    },
    {
      year: "2024+",
      title: "AI-Native",
      desc: "Applications that learn and adapt via Generative AI logic.",
      icon: "🤖"
    }
  ];

  return (
    <section id="evolution" className="py-32 bg-slate-50 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Context</h2>
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter">The Evolution of <br/>Mobile Progress.</h3>
        </div>

        <div className="relative">
          {/* Horizontal Progress Line for Desktop */}
          <div className="absolute top-[3.25rem] left-0 right-0 h-1 bg-slate-200 hidden md:block">
             <div className="h-full bg-indigo-600 w-full animate-progress-reveal origin-left"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 relative">
            {eras.map((era, i) => (
              <div key={i} className="relative group">
                {/* Node on Line */}
                <div className="hidden md:flex absolute top-10 left-0 w-8 h-8 rounded-full bg-white border-4 border-indigo-600 items-center justify-center z-20 shadow-lg group-hover:scale-125 transition-all">
                   <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                </div>

                <div className="pl-14 md:pl-0 md:pt-24">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-indigo-100 transition-all duration-500 h-full flex flex-col">
                    <div className="text-3xl mb-4">{era.icon}</div>
                    <span className="text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-3 block">{era.year}</span>
                    <h4 className="text-lg font-black text-slate-900 mb-3">{era.title}</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed font-medium">{era.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes progress-reveal { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .animate-progress-reveal { animation: progress-reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};

export default Timeline;
