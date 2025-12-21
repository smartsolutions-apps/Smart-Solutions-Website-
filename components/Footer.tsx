
import React, { useState } from 'react';
import LegalModal from './LegalModal';
import { useTranslation } from '../App';
import { Locale } from '../translations';
import { SmartLogo } from './Navbar';

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
  ];

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="bg-slate-950 text-white pt-16 md:pt-24 pb-10 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-24 text-start">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center cursor-pointer group" onClick={handleScrollToTop}>
                <SmartLogo className="h-16 w-auto" invert={true} />
              </div>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium max-w-xs">{t.footer.desc}</p>
            </div>

            <div>
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">{t.footer.engineering}</h4>
              <ul className="space-y-3 md:space-y-4">
                <li><button className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.nav.anatomy}</button></li>
                <li><button className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">Stack</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">{t.footer.strategy}</h4>
              <ul className="space-y-3 md:space-y-4">
                <li><button className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.footer.links.monetization}</button></li>
                <li><button className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.portfolio.badge}</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] md:text-[11px] font-black text-indigo-400 mb-6 md:mb-8 uppercase tracking-[0.3em]">{t.footer.hq}</h4>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <p className="text-sm font-bold text-white mb-1">{t.footer.hqLoc}</p>
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium">{t.footer.hqAddr}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <span>© {new Date().getFullYear()} {t.footer.rights}</span>
              <button onClick={() => setModalState({ isOpen: true, type: 'privacy' })} className="hover:text-white transition-colors">{t.footer.privacy}</button>
              <button onClick={() => setModalState({ isOpen: true, type: 'terms' })} className="hover:text-white transition-colors">{t.footer.terms}</button>
            </div>

            <div className="relative">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <span>{languages.find(l => l.code === locale)?.flag}</span>
                <span className="text-slate-200">{languages.find(l => l.code === locale)?.label}</span>
              </button>
              {isLangOpen && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-slate-900 border border-white/10 rounded-2xl p-2 z-50 shadow-2xl">
                  {languages.map((lang) => (
                    <button key={lang.code} onClick={() => { setLocale(lang.code); setIsLangOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${locale === lang.code ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-white/10'}`}>
                      <span>{lang.flag}</span><span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
      
      <LegalModal isOpen={modalState.isOpen && modalState.type === 'privacy'} onClose={() => setModalState({ isOpen: false, type: null })} title={t.footer.privacy}>
        <div className="text-start space-y-8">
          {t.footer.privacyContent.map((item: any, i: number) => (
            <div key={i}>
              <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{item.h}</h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.p}</p>
            </div>
          ))}
        </div>
      </LegalModal>

      <LegalModal isOpen={modalState.isOpen && modalState.type === 'terms'} onClose={() => setModalState({ isOpen: false, type: null })} title={t.footer.terms}>
        <div className="text-start space-y-8">
          {t.footer.termsContent.map((item: any, i: number) => (
            <div key={i}>
              <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{item.h}</h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.p}</p>
            </div>
          ))}
        </div>
      </LegalModal>
    </>
  );
};

export default Footer;
