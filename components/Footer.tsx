
import React, { useState } from 'react';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | null }>({
    isOpen: false,
    type: null
  });

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

  const tools = [
    { name: 'React', icon: <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg> },
    { name: 'Figma', icon: <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5A3.5 3.5 0 0 1 19 5.5 3.5 3.5 0 0 1 15.5 9H12V2z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z"/><path d="M12 16h3.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5H12v-7z"/></svg> },
    { name: 'VS Code', icon: <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 6v12"/><path d="M10 6v12"/><path d="m13 6-3 3"/><path d="m13 18-3-3"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg> },
    { name: 'Firebase', icon: <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L4 12h16L12 2z"/><path d="M4 12l8 10 8-10H4z"/></svg> }
  ];

  return (
    <>
      <footer className="bg-slate-950 text-white pt-16 md:pt-24 pb-10 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-24 text-center md:text-left">
            {/* Identity */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center justify-center md:justify-start gap-3 cursor-pointer group" onClick={handleScrollToTop}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-black text-2xl md:text-3xl shadow-xl shadow-indigo-500/20 group-hover:rotate-6 transition-transform">
                  S
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black tracking-tighter leading-none">SMART</h2>
                  <p className="text-[9px] md:text-[10px] tracking-[0.4em] font-bold text-indigo-400 leading-none mt-1 uppercase">Solutions</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium max-w-xs mx-auto md:mx-0">
                A premier engineering studio based in New Cairo, specializing in high-performance digital infrastructure for global education and gaming.
              </p>
            </div>

            {/* Engineering */}
            <div className="hidden sm:block">
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">Engineering</h4>
              <ul className="space-y-3 md:space-y-4">
                {[
                  { label: 'System Anatomy', id: 'anatomy' },
                  { label: 'Technical Stack', id: 'tech' },
                  { label: 'Security Protocols', id: 'security' },
                  { label: 'Performance Standards', id: 'performance' },
                  { label: 'Development Ecosystem', id: 'ecosystem' }
                ].map((link) => (
                  <li key={link.id}>
                    <button onClick={() => handleScroll(link.id)} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 group text-left">
                      <span className="w-1 h-1 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategy */}
            <div className="hidden sm:block">
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">Strategy</h4>
              <ul className="space-y-3 md:space-y-4">
                {[
                  { label: 'App Lifecycle', id: 'lifecycle' },
                  { label: 'Monetization Models', id: 'monetization' },
                  { label: 'Design Thinking', id: 'design-thinking' },
                  { label: 'Industry Insights', id: 'industry' },
                  { label: 'Portfolio Works', id: 'apps' }
                ].map((link) => (
                  <li key={link.id}>
                    <button onClick={() => handleScroll(link.id)} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 group text-left">
                      <span className="w-1 h-1 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio HQ */}
            <div>
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">Studio HQ</h4>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <p className="text-sm font-bold text-white mb-1">New Cairo, Egypt</p>
                  <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed font-medium">
                    District 5, Marakez<br />
                    Digital Innovation Center
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-bold text-white mb-1">Inquiries</p>
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium italic">Contact via Engineering Portal</p>
                </div>
                <div className="pt-2 flex justify-center md:justify-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[9px] font-black text-green-400 uppercase tracking-widest">Status: Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Row */}
          <div className="pt-10 md:pt-16 border-t border-white/5 mb-10 md:mb-16">
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em] text-center mb-6 md:mb-8">Development Environment</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2 md:gap-3 group">
                  <div className="text-white group-hover:text-indigo-400 transition-colors">
                    {tool.icon}
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <div className="flex gap-6 md:gap-8">
              <span>© {new Date().getFullYear()} Smart Solutions Ltd.</span>
              <button onClick={() => setModalState({ isOpen: true, type: 'privacy' })} className="hover:text-white transition-colors">Privacy</button>
              <button onClick={() => setModalState({ isOpen: true, type: 'terms' })} className="hover:text-white transition-colors">Terms</button>
            </div>
            <button onClick={handleScrollToTop} className="flex items-center gap-3 text-indigo-500 hover:text-white transition-colors group">
              Scroll to Summit
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
              </div>
            </button>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      <LegalModal 
        isOpen={modalState.isOpen && modalState.type === 'privacy'} 
        onClose={() => setModalState({ isOpen: false, type: null })}
        title="Privacy Policy"
      >
        <div className="space-y-6 text-slate-600">
          <section>
            <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">1. Data Governance</h4>
            <p>Smart Solutions Ltd is committed to protecting your personal data. We utilize AES-256 grade encryption within our New Cairo engineering facility.</p>
          </section>
        </div>
      </LegalModal>

      <LegalModal 
        isOpen={modalState.isOpen && modalState.type === 'terms'} 
        onClose={() => setModalState({ isOpen: false, type: null })}
        title="Terms of Service"
      >
        <div className="space-y-6 text-slate-600">
          <section>
            <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">1. Intellectual Property</h4>
            <p>All software architectures, UI components, and the "My Wonder Books" brand are the exclusive property of Smart Solutions Ltd.</p>
          </section>
        </div>
      </LegalModal>
    </>
  );
};

export default Footer;
