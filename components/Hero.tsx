
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-44 pb-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-indigo-50/50 rounded-bl-[200px] blur-3xl opacity-60"></div>
      <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-[1.2] text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            Leading Innovation in New Cairo
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
            Digital <span className="gradient-text">Excellence</span> <br/>by Design.
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Smart Solutions is a premier app engineering studio. We don't just build apps; we engineer digital experiences that define industries and inspire millions.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button onClick={() => document.getElementById('apps')?.scrollIntoView({behavior: 'smooth'})} className="px-10 py-5 bg-indigo-600 text-white font-extrabold rounded-2xl shadow-2xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all">
              See Our Work
            </button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="px-10 py-5 bg-white text-slate-700 font-extrabold border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all">
              Our Story
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(79,70,229,0.2)] group">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium App Showcase" 
              className="w-full h-auto object-cover min-h-[550px] group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-indigo-600 rounded-md text-[10px] font-black uppercase tracking-widest">Flagship</span>
                <span className="text-xs font-bold text-indigo-300">500k+ Downloads</span>
              </div>
              <h3 className="text-3xl font-black mb-2">My Wonder Books</h3>
              <p className="text-sm opacity-80 max-w-sm">The world's leading educational storytelling platform for kids.</p>
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-3xl shadow-2xl hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-black text-slate-800 uppercase tracking-widest">Global Partner</p>
                <p className="text-xs text-slate-500 font-bold">Harvard Innovation Invite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
