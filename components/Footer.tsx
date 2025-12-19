
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

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      window.scrollTo({ top: element.offsetTop - offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-slate-950 text-white pt-16 md:pt-24 pb-10 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-24 text-start">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={handleScrollToTop}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-2xl md:text-3xl shadow-xl">S</div>
                <div className="text-start">
                  <h2 className="text-xl md:text-2xl font-black tracking-tighter leading-none">SMART</h2>
                  <p className="text-[9px] md:text-[10px] tracking-[0.4em] font-bold text-indigo-400 leading-none mt-1 uppercase">Solutions</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium max-w-xs">{t.footer.desc}</p>
            </div>

            <div>
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">{t.footer.engineering}</h4>
              <ul className="space-y-3 md:space-y-4">
                <li><button onClick={() => handleScroll('anatomy')} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.nav.anatomy}</button></li>
                <li><button onClick={() => handleScroll('tech')} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">Stack</button></li>
                <li><button onClick={() => handleScroll('security')} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.footer.links.security}</button></li>
                <li><button onClick={() => handleScroll('performance')} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.footer.links.perf}</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">{t.footer.strategy}</h4>
              <ul className="space-y-3 md:space-y-4">
                <li><button onClick={() => handleScroll('monetization')} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.footer.links.monetization}</button></li>
                <li><button onClick={() => handleScroll('design-thinking')} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.footer.links.design}</button></li>
                <li><button onClick={() => handleScroll('industry')} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.footer.links.industry}</button></li>
                <li><button onClick={() => handleScroll('apps')} className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.portfolio.badge}</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">{t.footer.hq}</h4>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <p className="text-sm font-bold text-white mb-1">{t.footer.hqLoc}</p>
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium">{t.footer.hqAddr}</p>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-bold text-white mb-1">{t.footer.inquiries}</p>
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium italic">{t.footer.portalLink}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <span>© {new Date().getFullYear()} {t.footer.rights}</span>
              <button onClick={() => setModalState({ isOpen: true, type: 'privacy' })}>{t.footer.privacy}</button>
              <button onClick={() => setModalState({ isOpen: true, type: 'terms' })}>{t.footer.terms}</button>
            </div>

            <div className="relative">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
                <span>{languages.find(l => l.code === locale)?.flag}</span>
                <span className="text-slate-200">{languages.find(l => l.code === locale)?.label}</span>
              </button>
              {isLangOpen && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-slate-900 border border-white/10 rounded-2xl p-2 z-50">
                  {languages.map((lang) => (
                    <button key={lang.code} onClick={() => { setLocale(lang.code); setIsLangOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${locale === lang.code ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-white/10'}`}>
                      <span>{lang.flag}</span><span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={handleScrollToTop} className="flex items-center gap-3 text-indigo-500 hover:text-white transition-colors">
              {t.footer.scroll}
              <div className="w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
              </div>
            </button>
          </div>
        </div>
      </footer>
      <LegalModal isOpen={modalState.isOpen && modalState.type === 'privacy'} onClose={() => setModalState({ isOpen: false, type: null })} title={t.footer.privacy}>
        <div className="text-start"><h4 className="font-black text-slate-900 mb-2">1. Data Governance</h4><p>Encryption within our New Cairo facility.</p></div>
      </LegalModal>
      <LegalModal isOpen={modalState.isOpen && modalState.type === 'terms'} onClose={() => setModalState({ isOpen: false, type: null })} title={t.footer.terms}>
        <div className="text-start"><h4 className="font-black text-slate-900 mb-2">1. Intellectual Property</h4><p>Exclusive property of Smart Solutions Ltd.</p></div>
      </LegalModal>
    </>
  );
};

export default Footer;
