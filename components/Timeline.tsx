
import React from 'react';

const Timeline: React.FC = () => {
  const eras = [
    {
      year: "1990s",
      title: "The WAP Genesis",
      desc: "Text-based interfaces and simple utility. The 'Brick' phone era where apps were built-in tools like Calculators and Snake.",
      icon: "📱"
    },
    {
      year: "2008",
      title: "The Big Bang",
      desc: "Apple launches the App Store. Developers gain the power to build software globally. The 'There's an app for that' era.",
      icon: "🚀"
    },
    {
      year: "2015",
      title: "The Cloud Shift",
      desc: "Apps become dynamic. Real-time sync, social connectivity, and the rise of high-performance mobile gaming engines.",
      icon: "☁️"
    },
    {
      year: "2024+",
      title: "AI-Native Engineering",
      desc: "Where Smart Solutions leads. Applications that learn and adapt via Generative AI.",
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
          {/* Horizontal Line for Desktop */}
          <div className="absolute top-[4.5rem] left-0 right-0 h-0.5 bg-slate-200 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
            {eras.map((era, i) => (
              <div key={i} className="relative group">
                {/* Icon Circle on Desktop Line */}
                <div className="hidden md:flex absolute top-12 left-0 w-12 h-12 rounded-full bg-white border-2 border-indigo-600 items-center justify-center z-10 shadow-lg group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <span className="text-lg">{era.icon}</span>
                </div>

                {/* Vertical Line for Mobile */}
                <div className="md:hidden absolute left-6 top-12 bottom-0 w-px bg-slate-200"></div>
                <div className="md:hidden absolute left-4 top-6 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white z-10"></div>

                <div className="pl-14 md:pl-0 md:pt-32">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-500 h-full">
                    <div className="md:hidden text-2xl mb-4">{era.icon}</div>
                    <span className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-3 block">{era.year}</span>
                    <h4 className="text-xl font-black text-slate-900 mb-4">{era.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">{era.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
