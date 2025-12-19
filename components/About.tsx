
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background blobs for depth */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl h-80 relative group">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Our workspace" />
                  <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-48 relative group">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Coding excellence" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-48 relative group">
                  <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Apps for kids" />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-2xl h-80 relative group">
                  <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Team strategy" />
                  <div className="absolute inset-0 bg-purple-600/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </div>
            
            {/* Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-3xl shadow-2xl hidden xl:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                   </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recognized By</p>
                  <p className="text-sm font-bold text-slate-900">Harvard University</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our DNA</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
              Engineering <br/>Built on Trust.
            </h3>
            <p className="text-slate-500 mb-6 text-lg font-medium leading-relaxed">
              Smart Solutions is more than a studio; we are a collective of engineers based in New Cairo who believe that code should be a work of art. 
            </p>
            <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed">
              With over <strong>500,000 global users</strong>, our flagship platform <strong>My Wonder Books</strong> represents our commitment to blending pedagogical science with cutting-edge engineering.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-[2rem] bg-indigo-50 border border-indigo-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-4">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h4 className="font-bold text-indigo-900 mb-2 uppercase text-xs tracking-widest">Our Mission</h4>
                <p className="text-xs text-indigo-700/80 leading-relaxed font-semibold">To engineer digital bridges that connect curiosity with knowledge.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-indigo-400 shadow-sm mb-4">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
                <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">Our Vision</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">Defining the global standard for kids' interactive tech, right from Egypt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
