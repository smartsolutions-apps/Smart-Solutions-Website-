
import React from 'react';

const Values: React.FC = () => {
  const values = [
    {
      title: "Clean Architecture",
      desc: "We don't just write code; we build structures. Our 'SOLID' principles ensure that apps remain fast even as they scale to millions.",
      icon: "🏗️"
    },
    {
      title: "User-First Logic",
      desc: "If a 4-year-old can't use it, we haven't finished the job. Accessibility is baked into every pixel of our UI designs.",
      icon: "🧠"
    },
    {
      title: "Military-Grade Security",
      desc: "Protecting user data isn't an option; it's our baseline. We use advanced encryption for every educational and gaming platform.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] border border-slate-100 hover:bg-slate-50 transition-all">
              <div className="text-4xl mb-6">{v.icon}</div>
              <h4 className="text-xl font-black text-slate-900 mb-4">{v.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
