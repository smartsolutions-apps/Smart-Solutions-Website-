
import React from 'react';
import { useTranslation } from '../App';

const TechStack: React.FC = () => {
  const { t } = useTranslation();
  
  const technologies = [
    { name: t.techStack.t1, desc: t.techStack.t1D },
    { name: t.techStack.t2, desc: t.techStack.t2D },
    { name: t.techStack.t3, desc: t.techStack.t3D },
    { name: t.techStack.t4, desc: t.techStack.t4D }
  ];

  return (
    <section id="tech" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-start">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t.techStack.badge}</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              {t.techStack.title}
            </h3>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed font-medium">
              {t.techStack.desc}
            </p>
            
            <div className="grid gap-6">
              {technologies.map((tech, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-3xl border border-slate-50 hover:bg-slate-50 transition-all text-start">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-indigo-100 shrink-0">
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
                <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600" className="rounded-[3rem] shadow-2xl h-80 object-cover" alt="Coding Environment" />
                <div className="p-10 bg-indigo-600 rounded-[3rem] text-white shadow-2xl text-start">
                  <div className="text-4xl font-black mb-1 tracking-tighter">99.9%</div>
                  <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80">{t.techStack.stat1}</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl text-start">
                  <div className="text-3xl font-black mb-1 tracking-tighter">AI-Native</div>
                  <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80">{t.techStack.stat2}</div>
                </div>
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600" className="rounded-[3rem] shadow-2xl h-80 object-cover" alt="AI Logic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
