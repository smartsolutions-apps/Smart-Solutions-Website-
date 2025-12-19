
import React from 'react';
import { useTranslation } from '../App';

const TechEcosystem: React.FC = () => {
  const { t } = useTranslation();
  
  const tools = [
    { name: "Figma", category: "Design", desc: t.ecosystem.tools.figma },
    { name: "VS Code", category: "Engineering", desc: t.ecosystem.tools.vscode },
    { name: "GitHub", category: "Infrastructure", desc: t.ecosystem.tools.github },
    { name: "Jira", category: "Management", desc: t.ecosystem.tools.jira },
    { name: "Slack", category: "Strategy", desc: t.ecosystem.tools.slack },
    { name: "Firebase", category: "Platform", desc: t.ecosystem.tools.firebase }
  ];

  return (
    <section id="ecosystem" className="py-32 bg-slate-50 scroll-mt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-start">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t.ecosystem.badge}</h2>
            <h3 className="text-5xl font-black text-slate-900 tracking-tighter">{t.ecosystem.title}</h3>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-sm leading-relaxed text-start">
            {t.ecosystem.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, i) => (
            <div key={i} className="glass-card p-10 rounded-[3rem] text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-slate-100">
              <h4 className="text-sm font-black text-slate-900 mb-1">{tool.name}</h4>
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-4">{tool.category}</p>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechEcosystem;
