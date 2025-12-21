
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
      alt: "Digital storytelling platform showcase"
    },
    {
      title: t.portfolio.app2.title,
      category: t.portfolio.app2.cat,
      desc: t.portfolio.app2.desc,
      stat: t.portfolio.app2.stat,
      img: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=1200",
      alt: "Gaming engine interface design"
    },
    {
      title: t.portfolio.app3.title,
      category: t.portfolio.app3.cat,
      desc: t.portfolio.app3.desc,
      stat: t.portfolio.app3.stat,
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200",
      alt: "Digital illustration tool engineering"
    }
  ];

  return (
    <section id="apps" className="py-32 bg-white px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl text-start">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-xs mb-4">{t.portfolio.badge}</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">{t.portfolio.title}</h3>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-lg md:text-xl leading-relaxed text-start">
            {t.portfolio.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {apps.map((app, i) => (
            <div key={i} className="group text-start">
              <div className="alive-image-container relative rounded-[3.5rem] overflow-hidden mb-10 aspect-[4/5] shadow-2xl transition-all duration-700">
                <img src={app.img} alt={app.alt} className="alive-image w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-10 left-10">
                  <span className="px-5 py-2.5 bg-white/95 backdrop-blur-md rounded-2xl text-xs font-black uppercase tracking-[0.2em] text-indigo-700 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    {app.category}
                  </span>
                </div>
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 group-hover:translate-x-2 transition-all duration-500">{app.title}</h4>
              <p className="text-slate-500 text-lg md:text-xl font-medium mb-8 leading-relaxed">{app.desc}</p>
              <div className="flex items-center gap-5 group/stat">
                <div className="w-12 h-1 bg-indigo-600 rounded-full group-hover/stat:w-20 transition-all duration-700"></div>
                <span className="text-sm font-black text-indigo-600 uppercase tracking-widest">{app.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
