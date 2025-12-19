
import React from 'react';

const Performance: React.FC = () => {
  return (
    <section id="performance" className="py-32 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Optimization</h2>
        <h3 className="text-6xl font-black tracking-tighter mb-12">Speed is a Feature.</h3>
        
        <div className="grid md:grid-cols-3 gap-12 text-left mb-20">
          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10">
            <div className="text-indigo-400 text-4xl mb-6 font-black">100ms</div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              A 100ms delay in load time can lead to a 7% drop in conversion. We optimize our assets to load instantly on any connection.
            </p>
          </div>
          <div className="p-10 rounded-[3rem] bg-indigo-600">
            <div className="text-white text-4xl mb-6 font-black">60 FPS</div>
            <p className="text-indigo-100 text-sm leading-relaxed font-medium">
              Our animations run at a buttery-smooth 60 frames per second. Fluidity isn't just aesthetic; it builds user trust.
            </p>
          </div>
          <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10">
            <div className="text-indigo-400 text-4xl mb-6 font-black">&lt; 16ms</div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              We aim for an interaction response time of under 16ms. When the user touches a button, the app feels like it's anticipating their move.
            </p>
          </div>
        </div>

        <div className="bg-white/5 rounded-[4rem] p-12 border border-white/10 max-w-4xl mx-auto">
          <p className="text-xl text-indigo-200 font-medium italic leading-relaxed">
            "Performance engineering is the art of making the complex appear effortless."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Performance;
