
import React from 'react';

const TechStack: React.FC = () => {
  const technologies = [
    { name: "React & React Native", desc: "The core of our cross-platform architecture, enabling native-speed UI/UX." },
    { name: "TypeScript Core", desc: "Type-safe engineering for absolute reliability and bug-prevention." },
    { name: "AI Narratives", desc: "Generative AI trained for educational storytelling and adaptive gaming." },
    { name: "Cloud Infrastructure", desc: "Distributed server-side logic built on AWS for unlimited global scaling." }
  ];

  return (
    <section id="tech" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Technology</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              Powered by <br/><span className="gradient-text">React & AI.</span>
            </h3>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed font-medium">
              We leverage React's modularity and AI's intelligence to build apps that aren't just fast—they are intuitive. Our stack is chosen for its performance and long-term maintainability.
            </p>
            
            <div className="grid gap-6">
              {technologies.map((tech, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-3xl border border-slate-50 hover:bg-slate-50 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-indigo-100">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">{tech.name}</h4>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-16 space-y-4">
                <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600" className="rounded-[3rem] shadow-2xl h-80 object-cover" alt="Advanced Coding Environment" />
                <div className="p-10 bg-indigo-600 rounded-[3rem] text-white shadow-2xl">
                  <div className="text-4xl font-black mb-1 tracking-tighter">99.9%</div>
                  <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80">Stability KPI</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl">
                  <div className="text-3xl font-black mb-1 tracking-tighter">AI-Native</div>
                  <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80">Design Pattern</div>
                </div>
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600" className="rounded-[3rem] shadow-2xl h-80 object-cover" alt="AI Logic Visualization" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
