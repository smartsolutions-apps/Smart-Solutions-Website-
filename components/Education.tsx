
import React from 'react';
import { useTranslation } from '../App';

const Education: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="how-we-build" className="py-24 bg-indigo-900 text-white overflow-hidden relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16 text-start">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">{t.education.badge}</h2>
          <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
            {t.education.title}
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-6 text-start">
            <div className="p-1 rounded-2xl bg-white/5 border border-white/10">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" className="rounded-xl w-full h-48 object-cover" alt="Core" />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-3">{t.education.h1}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{t.education.p1}</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-start">
            <div className="p-1 rounded-2xl bg-white/5 border border-white/10">
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" className="rounded-xl w-full h-48 object-cover" alt="UX" />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-3">{t.education.h2}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{t.education.p2}</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-start">
            <div className="p-1 rounded-2xl bg-white/5 border border-white/10">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" className="rounded-xl w-full h-48 object-cover" alt="QA" />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-3">{t.education.h3}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{t.education.p3}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-indigo-800 to-purple-800 border border-white/10 text-center">
          <h4 className="text-2xl font-bold mb-4">{t.education.factTitle}</h4>
          <p className="text-indigo-200 max-w-2xl mx-auto mb-0">{t.education.factDesc}</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
