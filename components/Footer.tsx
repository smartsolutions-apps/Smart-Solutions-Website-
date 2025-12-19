
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

  const socialIcons = [
    { name: 'LinkedIn', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
    { name: 'X', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { name: 'GitHub', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> }
  ];

  const tools = [
    { name: 'React', icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg> },
    { name: 'Figma', icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5A3.5 3.5 0 0 1 19 5.5 3.5 3.5 0 0 1 15.5 9H12V2z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z"/><path d="M12 16h3.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5H12v-7z"/></svg> },
    { name: 'VS Code', icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 6v12"/><path d="M10 6v12"/><path d="m13 6-3 3"/><path d="m13 18-3-3"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg> },
    { name: 'Firebase', icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L4 12h16L12 2z"/><path d="M4 12l8 10 8-10H4z"/></svg> }
  ];

  return (
    <>
      <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Identity */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={handleScrollToTop}>
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-xl shadow-indigo-500/20 group-hover:rotate-6 transition-transform">
                  S
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tighter leading-none">SMART</h2>
                  <p className="text-[10px] tracking-[0.4em] font-bold text-indigo-400 leading-none mt-1 uppercase">Solutions</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                A premier engineering studio based in New Cairo, specializing in high-performance digital infrastructure for global education and gaming sectors.
              </p>
              <div className="flex gap-4">
                {socialIcons.map((social) => (
                  <button 
                    key={social.name} 
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-indigo-600 transition-all"
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Engineering */}
            <div>
              <h4 className="text-[11px] font-black text-indigo-400 mb-8 uppercase tracking-[0.3em]">Engineering</h4>
              <ul className="space-y-4">
                {[
                  { label: 'System Anatomy', id: 'anatomy' },
                  { label: 'Technical Stack', id: 'tech' },
                  { label: 'Security Protocols', id: 'security' },
                  { label: 'Performance Standards', id: 'performance' },
                  { label: 'Development Ecosystem', id: 'ecosystem' }
                ].map((link) => (
                  <li key={link.id}>
                    <button onClick={() => handleScroll(link.id)} className="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-left">
                      <span className="w-1 h-1 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategy */}
            <div>
              <h4 className="text-[11px] font-black text-indigo-400 mb-8 uppercase tracking-[0.3em]">Strategy</h4>
              <ul className="space-y-4">
                {[
                  { label: 'App Lifecycle', id: 'lifecycle' },
                  { label: 'Monetization Models', id: 'monetization' },
                  { label: 'Design Thinking', id: 'design-thinking' },
                  { label: 'Industry Insights', id: 'industry' },
                  { label: 'Portfolio Works', id: 'apps' }
                ].map((link) => (
                  <li key={link.id}>
                    <button onClick={() => handleScroll(link.id)} className="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2 group text-left">
                      <span className="w-1 h-1 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio HQ */}
            <div>
              <h4 className="text-[11px] font-black text-indigo-400 mb-8 uppercase tracking-[0.3em]">Studio HQ</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold text-white mb-1">New Cairo, Egypt</p>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    District 5, Marakez<br />
                    Digital Innovation Center
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-bold text-white mb-1">General Inquiries</p>
                  <p className="text-xs text-slate-400 font-medium">hello@smartsolutions-eg.vercel.app</p>
                </div>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[9px] font-black text-green-400 uppercase tracking-widest">Studio Status: Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Row */}
          <div className="pt-16 border-t border-white/5 mb-16">
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em] text-center mb-8">Professional Development Environment</p>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 group">
                  <div className="text-white group-hover:text-indigo-400 transition-colors">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <div className="flex gap-8">
              <span>© {new Date().getFullYear()} Smart Solutions Ltd.</span>
              <button 
                onClick={() => setModalState({ isOpen: true, type: 'privacy' })}
                className="hidden sm:block hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setModalState({ isOpen: true, type: 'terms' })}
                className="hidden sm:block hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
            <button onClick={handleScrollToTop} className="flex items-center gap-3 text-indigo-500 hover:text-white transition-colors group">
              Scroll to Summit
              <div className="w-10 h-10 rounded-full border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
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
            <p>Smart Solutions Ltd ("we", "our", or "us") is committed to protecting your personal data. We utilize AES-256 grade encryption for all data-at-rest and TLS 1.3 for data-in-transit within our New Cairo engineering facility.</p>
          </section>
          <section>
            <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">2. Information We Collect</h4>
            <p>We collect minimal telemetry required for high-performance app maintenance. This includes crash reports, latency metrics, and hardware specifications to optimize the My Wonder Books engine.</p>
          </section>
          <section>
            <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">3. Global Compliance</h4>
            <p>Our applications are built with <strong>COPPA (Children's Online Privacy Protection Act)</strong> and <strong>GDPR</strong> principles at their core. We never sell user data to third-party advertisers or data brokers.</p>
          </section>
          <section>
            <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">4. AI Ethics</h4>
            <p>Our generative AI narratives are filtered for safety and processed locally on-device where possible to ensure maximum user privacy and zero data leakage.</p>
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
            <p>All software architectures, UI components, and the "My Wonder Books" brand are the exclusive property of Smart Solutions Ltd. Unauthorized replication of our source code or design patterns is strictly prohibited.</p>
          </section>
          <section>
            <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">2. Service Delivery</h4>
            <p>Our engineering studio operates on an Agile Sprint-based delivery model. Timelines and project scopes are governed by the specific Service Level Agreements (SLAs) signed per engagement.</p>
          </section>
          <section>
            <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">3. Liability Framework</h4>
            <p>While we guarantee 99.9% server uptime and rigorous QA testing, Smart Solutions Ltd is not liable for interruptions caused by global infrastructure providers or third-party cloud outages.</p>
          </section>
          <section>
            <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">4. Jurisdiction</h4>
            <p>These terms are governed by the digital laws of the Arab Republic of Egypt, with primary jurisdiction held in the courts of New Cairo.</p>
          </section>
        </div>
      </LegalModal>
    </>
  );
};

export default Footer;
