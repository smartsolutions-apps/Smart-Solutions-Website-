
import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="how-we-build" className="py-24 bg-indigo-900 text-white overflow-hidden relative scroll-mt-20">
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="600" height="600" viewBox="0 0 600 600">
          <circle cx="300" cy="300" r="250" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="1" fill="none" />
          <circle cx="300" cy="300" r="150" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Engineering Insights</h2>
          <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
            Understanding the Anatomy of a Successful App.
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="p-1 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" className="rounded-xl w-full mb-6 grayscale hover:grayscale-0 transition-all duration-500 h-48 object-cover" alt="The Invisible Core" />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-3">The Invisible Core</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Most people see the interface, but the soul of an app is its backend architecture. We focus on low-latency data processing and robust security.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 lg:mt-12">
            <div className="p-1 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" className="rounded-xl w-full mb-6 grayscale hover:grayscale-0 transition-all duration-500 h-48 object-cover" alt="Experience Design" />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-3">Experience Design</h4>
                <p className="text-slate-400 text-sm leading-relaxed">UX is a science. We use psychological principles to guide users through the app, ensuring every touch feels natural and rewarding.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:mt-24">
            <div className="p-1 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" className="rounded-xl w-full mb-6 grayscale hover:grayscale-0 transition-all duration-500 h-48 object-cover" alt="Quality Assurance" />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-3">Quality Assurance</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Building for kids requires extreme resilience. Our apps are built to handle unexpected inputs and edge cases with grace.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-indigo-800 to-purple-800 border border-white/10 text-center">
          <h4 className="text-2xl font-bold mb-4">Did you know?</h4>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-0">
            A typical app has over 10,000 lines of code just to handle user interactions. At Smart Solutions, we optimize every single line to ensure your device's battery and performance remain peak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
