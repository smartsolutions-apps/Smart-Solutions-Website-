
import React from 'react';

const Anatomy: React.FC = () => {
  const layers = [
    {
      title: "The Interface (Frontend)",
      desc: "This is what users touch. We build it using React and Swift to ensure it responds in less than 16ms.",
      details: ["UI Components", "State Management", "Animations"],
      icon: "🎨"
    },
    {
      title: "The Brain (Backend)",
      desc: "The logic that processes requests. Our systems handle complex algorithms and user authentication securely.",
      details: ["API Layer", "Business Logic", "Microservices"],
      icon: "🧠"
    },
    {
      title: "The Memory (Database)",
      desc: "Where your data lives. We use distributed systems to ensure data is never lost and always accessible.",
      details: ["Real-time Sync", "Encryption", "Scalable Storage"],
      icon: "💾"
    }
  ];

  return (
    <section id="anatomy" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Educational Deep-Dive</h2>
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter">The Anatomy of <br/>a High-Performance App.</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {layers.map((layer, i) => (
            <div key={i} className="glass-card p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl mb-8">{layer.icon}</div>
              <h4 className="text-2xl font-black text-slate-900 mb-4">{layer.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{layer.desc}</p>
              <ul className="space-y-3">
                {layer.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Anatomy;
