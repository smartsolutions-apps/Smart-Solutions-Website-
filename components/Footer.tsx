
import React from 'react';

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (id: string) => {
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
    <footer id="footer" className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg transition-transform group-hover:rotate-3">
                S
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tighter text-slate-800 leading-none">SMART</h1>
                <p className="text-[9px] tracking-[0.3em] font-bold text-indigo-600 leading-none mt-1 uppercase">Solutions</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              A world-class engineering studio delivering high-performance digital experiences for the next generation.
            </p>
            <div className="flex gap-4">
               {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                 <div key={social} className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-white transition-all cursor-pointer shadow-sm">
                   <span className="sr-only">{social}</span>
                   <div className="w-5 h-5 bg-current opacity-20 rounded-sm"></div>
                 </div>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-900 mb-6 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><button onClick={() => handleScrollToSection('home')} className="hover:text-indigo-600 transition-colors">Home</button></li>
              <li><button onClick={() => handleScrollToSection('about')} className="hover:text-indigo-600 transition-colors">Our Story</button></li>
              <li><button onClick={() => handleScrollToSection('apps')} className="hover:text-indigo-600 transition-colors">Portfolio</button></li>
              <li><button onClick={() => handleScrollToSection('contact')} className="hover:text-indigo-600 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-900 mb-6 uppercase tracking-widest">HQ Location</h4>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              District 5, Marakez<br />
              New Cairo, Egypt
            </p>
            <p className="text-xs text-indigo-600 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Office Active
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-900 mb-6 uppercase tracking-widest">Global Reach</h4>
            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
              <p className="text-indigo-900 font-bold text-lg mb-1">500,000+</p>
              <p className="text-indigo-600 text-[10px] font-black uppercase tracking-widest leading-none">Global Downloads</p>
              <div className="mt-4 flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-indigo-50 bg-indigo-200"></div>
                 ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">© {new Date().getFullYear()} Smart Solutions. Engineering Excellence.</p>
          <div className="flex gap-8 text-[10px] text-slate-400 font-black uppercase tracking-widest">
            <span className="hover:text-indigo-600 transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-indigo-600 transition-colors cursor-pointer">Terms</span>
            <button onClick={handleScrollToTop} className="text-indigo-600 flex items-center gap-2 group">
              Back to Top
              <svg className="w-4 h-4 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
