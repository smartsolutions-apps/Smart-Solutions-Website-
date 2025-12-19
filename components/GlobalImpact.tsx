
import React from 'react';

const GlobalImpact: React.FC = () => {
  return (
    <section className="py-32 bg-indigo-600 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          <circle cx="400" cy="200" r="150" stroke="white" strokeWidth="1" strokeDasharray="10 10" />
          <circle cx="400" cy="200" r="250" stroke="white" strokeWidth="1" strokeDasharray="20 20" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-indigo-200 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Our Footprint</h2>
        <div className="text-7xl md:text-9xl font-black mb-6 tracking-tighter">500,000+</div>
        <p className="text-2xl md:text-3xl font-bold mb-12 text-indigo-100">Active Global Minds Inspired Monthly.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6 bg-white/10 rounded-3xl backdrop-blur">
            <div className="text-2xl font-black">45+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Countries</div>
          </div>
          <div className="p-6 bg-white/10 rounded-3xl backdrop-blur">
            <div className="text-2xl font-black">4.9/5</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">App Rating</div>
          </div>
          <div className="p-6 bg-white/10 rounded-3xl backdrop-blur">
            <div className="text-2xl font-black">12M+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Stories Read</div>
          </div>
          <div className="p-6 bg-white/10 rounded-3xl backdrop-blur">
            <div className="text-2xl font-black">99.9%</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Server Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;
