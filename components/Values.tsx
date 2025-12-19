
import React from 'react';
import { useTranslation } from '../App';

const Values: React.FC = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      title: t.values.v1Title,
      desc: t.values.v1Desc,
      icon: "🏗️"
    },
    {
      title: t.values.v2Title,
      desc: t.values.v2Desc,
      icon: "🧠"
    },
    {
      title: t.values.v3Title,
      desc: t.values.v3Desc,
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] border border-slate-100 hover:bg-slate-50 transition-all text-start">
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
