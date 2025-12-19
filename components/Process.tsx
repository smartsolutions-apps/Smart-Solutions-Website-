
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Deep Discovery",
      desc: "We dive into the psychology of the user. For kids' apps, this means understanding cognitive development stages.",
      icon: "01"
    },
    {
      title: "UI/UX Architecture",
      desc: "Crafting intuitive, accessible, and delightful interfaces that don't need a manual to understand.",
      icon: "02"
    },
    {
      title: "Precision Coding",
      desc: "Our engineers write clean, scalable, and optimized code that ensures zero latency and absolute reliability.",
      icon: "03"
    },
    {
      title: "Rigorous QA",
      desc: "Every interaction is tested. Every edge case is covered. We launch only when it's perfect.",
      icon: "04"
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">The Journey</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-6">How We Bring Ideas to Life.</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We believe that great apps are built through a balance of creativity and engineering discipline. Our process ensures that your vision is preserved while being optimized for market success.
              </p>
              <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-lg shadow-indigo-100">
                <h4 className="text-xl font-bold mb-2">Need to see our workflow?</h4>
                <p className="text-indigo-100 text-sm mb-6">We maintain transparent documentation throughout every phase of production.</p>
                <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl font-black text-slate-200 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
