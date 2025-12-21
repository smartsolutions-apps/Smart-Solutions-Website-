
import React from 'react';
import { useTranslation } from '../App';

const Values: React.FC = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      title: t.values.v1Title,
      desc: t.values.v1Desc,
      icon: "🏗️",
      color: "hover:shadow-indigo-500/20"
    },
    {
      title: t.values.v2Title,
      desc: t.values.v2Desc,
      icon: "🧠",
      color: "hover:shadow-purple-500/20"
    },
    {
      title: t.values.v3Title,
      desc: t.values.v3Desc,
      icon: "🛡️",
      color: "hover:shadow-blue-500/20"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <div key={i} className={`group p-10 rounded-[2.5rem] border-2 border-slate-50 hover:border-indigo-100 hover:bg-slate-50 transition-all duration-500 text-start shadow-sm ${v.color} hover:-translate-y-3 cursor-default`}>
              <div className="text-5xl mb-8 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 inline-block">{v.icon}</div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{v.title}</h4>
              <p className="text-slate-500 text-base leading-relaxed font-medium group-hover:text-slate-700 transition-colors">{v.desc}</p>
              <div className="mt-8 w-12 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-indigo-500 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
