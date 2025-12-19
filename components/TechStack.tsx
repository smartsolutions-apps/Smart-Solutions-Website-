
import React from 'react';

const TechStack: React.FC = () => {
  const technologies = [
    { name: "React / Native", desc: "Cross-platform performance with zero compromises on user experience." },
    { name: "TypeScript", desc: "Enterprise-grade type safety ensuring robust and bug-free codebases." },
    { name: "Generative AI", desc: "Custom-trained models powering dynamic storytelling and smarter game logic." },
    { name: "Cloud Infrastructure", desc: "Scalable backend systems designed to support millions of concurrent users." }
  ];

  return (
    <section id="tech" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">The Modern Stack</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
              Where AI Meets Human Ingenuity.
            </h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              We leverage the latest advancements in technology to build apps that are faster, smarter, and more secure. AI isn't just a buzzword for us; it's a tool we use at every stage—from automated testing to intelligent content generation in our kids' applications.
            </p>
            
            <div className="grid gap-6">
              {technologies.map((tech, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-600 font-black">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{tech.name}</h4>
                    <p className="text-sm text-slate-500">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-12 space-y-4">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-xl" alt="Programming" />
                <div className="p-8 bg-indigo-600 rounded-2xl text-white">
                  <div className="text-3xl font-black mb-1">99.9%</div>
                  <div className="text-xs uppercase font-bold tracking-widest opacity-80">Uptime Reliability</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-8 bg-slate-900 rounded-2xl text-white">
                  <div className="text-3xl font-black mb-1">AI-Powered</div>
                  <div className="text-xs uppercase font-bold tracking-widest opacity-80">Next-Gen Delivery</div>
                </div>
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-xl" alt="Artificial Intelligence" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
