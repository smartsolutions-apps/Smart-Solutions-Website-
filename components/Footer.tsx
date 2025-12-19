
import React from 'react';

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const techLogos = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Swift", icon: "🍎" },
    { name: "Kotlin", icon: "🤖" },
    { name: "Node.js", icon: "🟢" },
    { name: "AWS", icon: "☁️" }
  ];

  return (
    <footer id="footer" className="bg-slate-900 text-white pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Column 1: Branding */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-xl shadow-indigo-500/20 transition-transform group-hover:rotate-6">
                S
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tighter leading-none">SMART</h2>
                <p className="text-[10px] tracking-[0.4em] font-bold text-indigo-400 leading-none mt-1 uppercase">Solutions</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              A premier engineering studio in New Cairo crafting high-performance digital infrastructure for the global education and gaming sectors.
            </p>
            <div className="flex gap-4">
               {['LinkedIn', 'X', 'Insta', 'GitHub'].map(social => (
                 <div key={social} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all cursor-pointer">
                   <span className="text-[10px] font-black">{social}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Column 2: Engineering Expertise */}
          <div>
            <h4 className="text-[11px] font-black text-indigo-400 mb-8 uppercase tracking-[0.3em]">Engineering</h4>
            <ul className="space-y-5">
              {[
                { label: 'System Anatomy', id: 'anatomy' },
                { label: 'Performance Standards', id: 'performance' },
                { label: 'Security Protocols', id: 'security' },
                { label: 'Technical Stack', id: 'tech' },
                { label: 'Tooling Ecosystem', id: 'ecosystem' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleScroll(link.id)} 
                    className="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Strategy & Vision */}
          <div>
            <h4 className="text-[11px] font-black text-indigo-400 mb-8 uppercase tracking-[0.3em]">Strategy</h4>
            <ul className="space-y-5">
              {[
                { label: 'App Lifecycle', id: 'lifecycle' },
                { label: 'Design Thinking', id: 'design-thinking' },
                { label: 'Monetization Models', id: 'monetization' },
                { label: 'Future Trends', id: 'future' },
                { label: 'Global Impact', id: 'home' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleScroll(link.id)} 
                    className="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Contact */}
          <div>
            <h4 className="text-[11px] font-black text-indigo-400 mb-8 uppercase tracking-[0.3em]">Studio HQ</h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-white mb-1">New Cairo, Egypt</p>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  District 5, Marakez<br />
                  Digital Innovation Wing
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Contact Details</p>
                <p className="text-sm text-slate-400 font-medium">hello@smartsolutions.app</p>
              </div>
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">Office Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Partner Bar */}
        <div className="pt-16 border-t border-white/5 mb-16">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] text-center mb-10">Proprietary Technology Stack</p>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {techLogos.map(tech => (
              <div key={tech.name} className="flex items-center gap-3 group">
                <span className="text-3xl group-hover:scale-125 transition-transform">{tech.icon}</span>
                <span className="text-xs font-black tracking-widest text-slate-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="flex items-center gap-8">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Smart Solutions Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-[10px] text-slate-500 font-black uppercase tracking-widest">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
          <button 
            onClick={handleScrollToTop} 
            className="flex items-center gap-3 text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em] group"
          >
            Scroll to Top
            <div className="w-10 h-10 rounded-full border border-indigo-400/30 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
