
import React from 'react';

const TechEcosystem: React.FC = () => {
  const tools = [
    { name: "Figma", category: "Design", icon: "🎨", desc: "Collaborative interface design." },
    { name: "VS Code", category: "Development", icon: "💻", desc: "Our primary environment for clean code." },
    { name: "GitHub", category: "DevOps", icon: "🐙", desc: "Version control and CI/CD pipelines." },
    { name: "Jira", category: "Management", icon: "📊", desc: "Agile project tracking and sprints." },
    { name: "Slack", category: "Comms", icon: "💬", desc: "Real-time team collaboration." },
    { name: "Firebase", category: "Cloud", icon: "🔥", desc: "Real-time data and auth services." }
  ];

  return (
    <section id="ecosystem" className="py-32 bg-slate-50 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Professional Tooling</h2>
            <h3 className="text-5xl font-black text-slate-900 tracking-tighter">Our Ecosystem.</h3>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-sm">
            We use the same tools as the world's leading tech companies to ensure your project is built to silicon-valley standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, i) => (
            <div key={i} className="glass-card p-8 rounded-[2.5rem] text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{tool.icon}</div>
              <h4 className="text-sm font-black text-slate-900 mb-1">{tool.name}</h4>
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-3">{tool.category}</p>
              <p className="text-[10px] text-slate-400 font-medium leading-tight">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechEcosystem;
