
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
      desc: "Apple launches the App Store. Developers gain the power to build and distribute software globally. The 'There's an app for that' era.",
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
      desc: "Where Smart Solutions leads. Applications that learn, adapt, and provide personalized experiences through Generative AI.",
      icon: "🤖"
    }
  ];

  return (
    <section id="evolution" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Context</h2>
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter">The Evolution of <br/>Mobile Progress.</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>

          <div className="space-y-24">
            {eras.map((era, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 w-full text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`glass-card p-10 rounded-[3rem] shadow-xl inline-block max-w-lg transition-transform hover:scale-105 duration-500`}>
                    <div className="text-3xl mb-4">{era.icon}</div>
                    <span className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-2 block">{era.year}</span>
                    <h4 className="text-2xl font-black text-slate-900 mb-4">{era.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{era.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-lg hidden md:block"></div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
