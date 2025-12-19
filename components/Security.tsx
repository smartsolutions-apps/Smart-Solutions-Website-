
import React from 'react';

const Security: React.FC = () => {
  return (
    <section id="security" className="py-20 md:py-32 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 order-2 lg:order-1 w-full">
             <div className="relative max-w-sm mx-auto lg:max-w-none">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                   <div className="h-40 md:h-64 bg-slate-100 rounded-[2rem] md:rounded-[3rem] flex items-center justify-center text-6xl md:text-7xl shadow-inner group hover:bg-slate-200 transition-colors">
                      <span className="group-hover:scale-125 transition-transform">🔒</span>
                   </div>
                   <div className="h-40 md:h-64 bg-indigo-50 rounded-[2rem] md:rounded-[3rem] mt-8 md:mt-12 flex items-center justify-center text-6xl md:text-7xl shadow-inner group hover:bg-indigo-100 transition-colors">
                      <span className="group-hover:scale-125 transition-transform">🛡️</span>
                   </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="glass-card px-6 py-4 md:px-10 md:py-6 rounded-full shadow-2xl border border-indigo-200 font-black text-indigo-600 text-xs md:text-sm tracking-widest uppercase animate-pulse">
                      Encrypted
                   </div>
                </div>
             </div>
          </div>
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Privacy Standards</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter leading-[0.9]">Security by <br className="hidden md:block"/>Default.</h3>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-8">
              In an era of data breaches, we treat security as a primary architectural pillar, not an afterthought. For educational apps, this is non-negotiable.
            </p>
            <ul className="space-y-4 md:space-y-6 text-left max-w-xs md:max-w-none mx-auto lg:mx-0">
               <li className="flex gap-4 items-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm md:text-base font-bold shrink-0">✓</div>
                  <p className="text-sm font-bold text-slate-700">AES-256 Data Encryption at Rest</p>
               </li>
               <li className="flex gap-4 items-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm md:text-base font-bold shrink-0">✓</div>
                  <p className="text-sm font-bold text-slate-700">COPPA & GDPR Compliance Ready</p>
               </li>
               <li className="flex gap-4 items-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm md:text-base font-bold shrink-0">✓</div>
                  <p className="text-sm font-bold text-slate-700">Biometric Authentication Integration</p>
               </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
