
import React from 'react';

const TechEcosystem: React.FC = () => {
  const tools = [
    { 
      name: "Figma", 
      category: "Design", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5A3.5 3.5 0 0 1 19 5.5 3.5 3.5 0 0 1 15.5 9H12V2z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z"/><path d="M12 16h3.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5H12v-7z"/></svg>, 
      desc: "For collaborative, pixel-perfect UI/UX design." 
    },
    { 
      name: "VS Code", 
      category: "Engineering", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 6v12"/><path d="M10 6v12"/><path d="m13 6-3 3"/><path d="m13 18-3-3"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>, 
      desc: "Our primary hub for low-latency coding." 
    },
    { 
      name: "GitHub", 
      category: "Infrastructure", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>, 
      desc: "Version control and CI/CD orchestration." 
    },
    { 
      name: "Jira", 
      category: "Management", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 10h10"/><path d="M7 14h6"/></svg>, 
      desc: "Agile sprints and engineering roadmaps." 
    },
    { 
      name: "Slack", 
      category: "Strategy", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>, 
      desc: "Real-time sync between studio and clients." 
    },
    { 
      name: "Firebase", 
      category: "Platform", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L4 12h16L12 2z"/><path d="M4 12l8 10 8-10H4z"/></svg>, 
      desc: "Real-time databases and user auth logic." 
    }
  ];

  return (
    <section id="ecosystem" className="py-32 bg-slate-50 scroll-mt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Studio Tooling</h2>
            <h3 className="text-5xl font-black text-slate-900 tracking-tighter">The Ecosystem.</h3>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-sm leading-relaxed">
            Building for 500k+ users requires industry-standard tools and a rigorous DevOps pipeline.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, i) => (
            <div key={i} className="glass-card p-10 rounded-[3rem] text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-slate-100">
              <div className="flex justify-center text-indigo-600 mb-6 group-hover:scale-110 group-hover:text-indigo-500 transition-all duration-500">
                {tool.icon}
              </div>
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
