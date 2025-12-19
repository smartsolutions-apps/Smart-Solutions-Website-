
import React from 'react';

const Portfolio: React.FC = () => {
  const apps = [
    {
      title: "My Wonder Books",
      category: "Education",
      desc: "An award-winning interactive library with custom-tailored narration engine.",
      stat: "500K Users",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      alt: "My Wonder Books educational app interface on a tablet"
    },
    {
      title: "Logic Quest",
      category: "Gaming",
      desc: "Advanced cognitive puzzle engine built with complex state management.",
      stat: "Coming Soon",
      img: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=800",
      alt: "Logic Quest gaming app puzzle engine visualization"
    },
    {
      title: "Smart Sketch",
      category: "Creativity",
      desc: "A low-latency vector engine for digital illustration on mobile devices.",
      stat: "In Pipeline",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
      alt: "Digital illustration tool Smart Sketch on a smartphone"
    }
  ];

  return (
    <section id="apps" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Portfolio</h2>
            <h3 className="text-5xl font-black text-slate-900 tracking-tight leading-none">Engineering <br/>Showcase.</h3>
          </div>
          <p className="text-slate-500 font-medium max-w-sm">
            We prioritize quality over quantity. Every project we accept undergoes thousands of hours of rigorous development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {apps.map((app, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative rounded-[32px] overflow-hidden mb-8 aspect-[4/5] shadow-2xl transition-transform duration-700 group-hover:-translate-y-4">
                <img src={app.img} alt={app.alt} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600">
                    {app.category}
                  </span>
                </div>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{app.title}</h4>
              <p className="text-slate-500 text-sm font-medium mb-4 leading-relaxed">{app.desc}</p>
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-indigo-600"></span>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{app.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
