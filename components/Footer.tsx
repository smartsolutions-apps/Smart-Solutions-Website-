
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

  // Fix: renamed use of function to match defined handleScrollTo
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
  };

  const stack = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Node.js', icon: '⬢' },
    { name: 'Gemini AI', icon: '🧠' },
    { name: 'Figma', icon: '🎨' },
    { name: 'GitHub', icon: 'Git' }
  ];

  return (
    <>
      <footer className="bg-slate-950 text-white pt-24 md:pt-32 pb-10 overflow-hidden border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tech Stack Row - Professional monochrome logos area */}
          <div className="flex flex-wrap items-center justify-between gap-8 mb-20 pb-12 border-b border-white/5">
             <div className="flex flex-col gap-2">
               <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em]">Engineered With</span>
               <div className="flex flex-wrap gap-8 items-center">
                 {stack.map((item, i) => (
                   <div key={i} className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
                     <span className="text-xl font-black text-white">{item.icon}</span>
                     <span className="text-xs font-bold uppercase tracking-widest">{item.name}</span>
                   </div>
                 ))}
               </div>
             </div>
             {/* Fix: changed handleScroll to handleScrollTo */}
             <button 
               onClick={() => handleScrollTo('contact')}
               className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
             >
               Start A Project
             </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20 text-start">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <SmartLogo className="h-16 w-auto" invert={true} />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-sm">
                Architecting the future of education through high-performance digital infrastructure. Smart Solutions is a premier engineering studio based in New Cairo, serving a global market.
              </p>
              <div className="flex gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors">
                  <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors">
                  <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Engineering</h4>
              <ul className="space-y-4">
                {/* Fix: changed multiple handleScroll to handleScrollTo */}
                <li><button onClick={() => handleScrollTo('anatomy')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">{t.nav.anatomy}</button></li>
                <li><button onClick={() => handleScrollTo('tech-choices')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Tech Choices</button></li>
                <li><button onClick={() => handleScrollTo('tech')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Platform Stack</button></li>
                <li><button onClick={() => handleScrollTo('performance')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Performance</button></li>
                <li><button onClick={() => handleScrollTo('security')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Security Protocol</button></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Strategic Hub</h4>
              <ul className="space-y-4">
                {/* Fix: changed multiple handleScroll to handleScrollTo */}
                <li><button onClick={() => handleScrollTo('innovation')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Innovation Lab</button></li>
                <li><button onClick={() => handleScrollTo('monetization')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Scaling Models</button></li>
                <li><button onClick={() => handleScrollTo('future')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Future Trends</button></li>
                <li><button onClick={() => handleScrollTo('apps')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Portfolio</button></li>
                <li><button onClick={() => handleScrollTo('lifecycle')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Lifecycle</button></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Company</h4>
              <ul className="space-y-4">
                {/* Fix: changed multiple handleScroll to handleScrollTo */}
                <li><button onClick={() => handleScrollTo('about')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Our Identity</button></li>
                <li><button onClick={() => handleScrollTo('contact')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Careers</button></li>
                <li><button onClick={() => handleScrollTo('contact')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Initiate Portal</button></li>
                <li className="pt-4 border-t border-white/5">
                  <p className="text-sm font-bold text-white mb-1">New Cairo Studio</p>
                  <p className="text-[11px] text-slate-400 font-medium">District 5, Marakez, Egypt</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
              <span>© {new Date().getFullYear()} Smart Solutions Ltd.</span>
              <button onClick={() => setModalState({ isOpen: true, type: 'privacy' })} className="hover:text-white transition-colors">Privacy Privacy</button>
              <button onClick={() => setModalState({ isOpen: true, type: 'terms' })} className="hover:text-white transition-colors">Terms of Service</button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Systems Operational</span>
              </div>
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
