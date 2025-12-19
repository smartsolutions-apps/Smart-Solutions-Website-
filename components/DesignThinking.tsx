
import React from 'react';

const DesignThinking: React.FC = () => {
  const phases = [
    { name: "Empathize", desc: "Observing real humans in their natural environment to find true pain points." },
    { name: "Define", desc: "Synthesizing observations into a clear problem statement that code can solve." },
    { name: "Ideate", desc: "Generating wild ideas without judgment to find the one that sticks." },
    { name: "Prototype", desc: "Building low-fidelity models to fail fast and learn even faster." }
  ];

  return (
    <section id="design-thinking" className="py-32 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Product Strategy</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">Design Thinking: <br/>The Human Logic.</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              We don't start with code. We start with people. Our engineering process is rooted in a methodology that ensures the apps we build are actually needed by the market.
            </p>
            <div className="space-y-4">
              {phases.map((phase, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-3xl border border-slate-50 hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{phase.name}</h4>
                    <p className="text-slate-400 text-xs font-medium">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800" alt="Design Thinking Process" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full -z-10 animate-blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignThinking;
