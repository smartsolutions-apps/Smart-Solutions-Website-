
import React from 'react';

const Portfolio: React.FC = () => {
  const apps = [
    {
      title: "My Wonder Books",
      category: "Education",
      desc: "Our flagship interactive library for children, featuring dynamic narration and behavioral tracking.",
      stat: "500K Users",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200", // Quality book image
      alt: "Digital storytelling platform for children"
    },
    {
      title: "Engine Quest",
      category: "Gaming",
      desc: "High-performance cognitive engine designed to measure and improve logic in young minds.",
      stat: "4.9 Rating",
      img: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=1200",
      alt: "Gaming engine interface for logic puzzles"
    },
    {
      title: "Canvas Pro",
      category: "Creativity",
      desc: "A low-latency vector engine designed for seamless digital illustration on mobile hardware.",
      stat: "Premium App",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200",
      alt: "Digital illustration tool on a high-res smartphone screen"
    }
  ];

  return (
    <section id="apps" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Case Studies</h2>
            <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">Engineering <br/>Excellence.</h3>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-sm leading-relaxed">
            Every product we build is a combination of thousands of hours of testing and precise technical architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {apps.map((app, i) => (
            <div key={i} className="group">
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
