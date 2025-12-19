
import React from 'react';
import { useTranslation } from '../App';

const Process: React.FC = () => {
  const { t } = useTranslation();
  const steps = [
    { title: t.process.s1T, desc: t.process.s1D, icon: "01" },
    { title: t.process.s2T, desc: t.process.s2D, icon: "02" },
    { title: t.process.s3T, desc: t.process.s3D, icon: "03" },
    { title: t.process.s4T, desc: t.process.s4D, icon: "04" }
  ];

  return (
    <section id="process" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 text-start">
            <div className="sticky top-32">
              <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">{t.process.badge}</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-6">{t.process.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{t.process.desc}</p>
              <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-lg">
                <h4 className="text-xl font-bold mb-2">{t.process.ctaT}</h4>
                <p className="text-indigo-100 text-sm mb-6">{t.process.ctaD}</p>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                  {t.process.ctaB}
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-12 text-start">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl font-black text-slate-200 group-hover:bg-indigo-600 group-hover:text-white transition-all">
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
