
import React from 'react';
import { useTranslation } from '../App';

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const apps = [
    {
      title: t.portfolio.app1.title,
      category: t.portfolio.app1.cat,
      desc: t.portfolio.app1.desc,
      stat: t.portfolio.app1.stat,
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200",
      alt: "Digital storytelling platform"
    },
    {
      title: t.portfolio.app2.title,
      category: t.portfolio.app2.cat,
      desc: t.portfolio.app2.desc,
      stat: t.portfolio.app2.stat,
      img: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=1200",
      alt: "Gaming engine interface"
    },
    {
      title: t.portfolio.app3.title,
      category: t.portfolio.app3.cat,
      desc: t.portfolio.app3.desc,
      stat: t.portfolio.app3.stat,
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200",
      alt: "Digital illustration tool"
    }
  ];

  return (
    <section id="apps" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-start">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t.portfolio.badge}</h2>
            <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">{t.portfolio.title}</h3>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-sm leading-relaxed text-start">
            {t.portfolio.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {apps.map((app, i) => (
            <div key={i} className="group text-start">
              <div className="relative rounded-[3rem] overflow-hidden mb-8 aspect-[4/5] shadow-2xl transition-all duration-700 group-hover:-translate-y-4">
                <img src={app.img} alt={app.alt} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 shadow-xl">
                    {app.category}
                  </span>
                </div>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{app.title}</h4>
              <p className="text-slate-500 text-sm font-medium mb-6 leading-relaxed">{app.desc}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-[2px] bg-indigo-600"></div>
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{app.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
