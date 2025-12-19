
import React, { useState } from 'react';
import LegalModal from './LegalModal';
import { useTranslation } from '../App';
import { Locale } from '../translations';

const Footer: React.FC = () => {
  const { t, locale, setLocale } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | null }>({
    isOpen: false,
    type: null
  });

  const languages: { code: Locale; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🇪🇬' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

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

  return (
    <>
      <footer className="bg-slate-950 text-white pt-16 md:pt-24 pb-10 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-24 text-center md:text-start">
            {/* Identity */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center justify-center md:justify-start gap-3 cursor-pointer group" onClick={handleScrollToTop}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-black text-2xl md:text-3xl shadow-xl shadow-indigo-500/20 group-hover:rotate-6 transition-transform">
                  S
                </div>
                <div className="text-start">
                  <h2 className="text-xl md:text-2xl font-black tracking-tighter leading-none">SMART</h2>
                  <p className="text-[9px] md:text-[10px] tracking-[0.4em] font-bold text-indigo-400 leading-none mt-1 uppercase">Solutions</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium max-w-xs mx-auto md:mx-0">
                {t.footer.desc}
              </p>
            </div>

            {/* Engineering */}
            <div className="hidden sm:block">
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">{t.footer.engineering}</h4>
              <ul className="space-y-3 md:space-y-4">
                {[
                  { label: t.nav.anatomy, id: 'anatomy' },
                  { label: 'Technical Stack', id: 'tech' },
                  { label: 'Security Protocols', id: 'security' },
                  { label: 'Performance Standards', id: 'performance' },
                  { label: t.nav.ecosystem, id: 'ecosystem' }
                ].map((link) => (
                  <li key={link.id}>
                    <button onClick={() => handleScroll(link.id)} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 group text-start">
                      <span className="w-1 h-1 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategy */}
            <div className="hidden sm:block">
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">{t.footer.strategy}</h4>
              <ul className="space-y-3 md:space-y-4">
                {[
                  { label: t.nav.lifecycle, id: 'lifecycle' },
                  { label: 'Monetization Models', id: 'monetization' },
                  { label: 'Design Thinking', id: 'design-thinking' },
                  { label: 'Industry Insights', id: 'industry' },
                  { label: 'Portfolio Works', id: 'apps' }
                ].map((link) => (
                  <li key={link.id}>
                    <button onClick={() => handleScroll(link.id)} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 group text-start">
                      <span className="w-1 h-1 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio HQ */}
            <div>
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">{t.footer.hq}</h4>
              <div className="space-y-4 md:space-y-6 text-start">
                <div>
                  <p className="text-sm font-bold text-white mb-1">{t.footer.hqLoc}</p>
                  <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed font-medium">
                    {t.footer.hqAddr}<br />
                    {t.footer.hqTitle}
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-bold text-white mb-1">{t.footer.inquiries}</p>
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium italic">{t.footer.portalLink}</p>
                </div>
                <div className="pt-2 flex justify-center md:justify-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[9px] font-black text-green-400 uppercase tracking-widest">{t.footer.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Row */}
          <div className="pt-10 md:pt-16 border-t border-white/5 mb-10 md:mb-16">
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em] text-center mb-6 md:mb-8">{t.footer.devEnv}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {['React', 'Figma', 'VS Code', 'Firebase'].map((name) => (
                <div key={name} className="flex items-center gap-2 md:gap-3 group">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 relative">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 order-2 md:order-1">
              <span>© {new Date().getFullYear()} {t.footer.rights}</span>
              <button onClick={() => setModalState({ isOpen: true, type: 'privacy' })} className="hover:text-white transition-colors">{t.footer.privacy}</button>
              <button onClick={() => setModalState({ isOpen: true, type: 'terms' })} className="hover:text-white transition-colors">{t.footer.terms}</button>
            </div>

            {/* Language Selector Drop-up */}
            <div className="relative order-1 md:order-2">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
              >
                <span className="text-lg">{languages.find(l => l.code === locale)?.flag}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">{languages.find(l => l.code === locale)?.label}</span>
                <svg className={`w-3 h-3 text-slate-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
              </button>

              {isLangOpen && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 glass-card border border-white/10 rounded-2xl p-2 shadow-2xl animate-scaleIn z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLocale(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        locale === lang.code ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={handleScrollToTop} className="flex items-center gap-3 text-indigo-500 hover:text-white transition-colors group order-3">
              {t.footer.scroll}
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
        title={t.footer.privacy}
      >
        <div className="space-y-6 text-slate-600 text-start">
          <section>
            <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">1. Data Governance</h4>
            <p>Smart Solutions Ltd is committed to protecting your personal data. We utilize AES-256 grade encryption within our New Cairo engineering facility.</p>
          </section>
        </div>
      </LegalModal>

      <LegalModal 
        isOpen={modalState.isOpen && modalState.type === 'terms'} 
        onClose={() => setModalState({ isOpen: false, type: null })}
        title={t.footer.terms}
      >
        <div className="space-y-6 text-slate-600 text-start">
          <section>
            <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">1. Intellectual Property</h4>
            <p>All software architectures, UI components, and the "My Wonder Books" brand are the exclusive property of Smart Solutions Ltd.</p>
          </section>
        </div>
      </LegalModal>
      <style>{`
        @keyframes scaleIn { from { transform: translateX(-50%) scale(0.9); opacity: 0; } to { transform: translateX(-50%) scale(1); opacity: 1; } }
        .animate-scaleIn { animation: scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </>
  );
};

export default Footer;
