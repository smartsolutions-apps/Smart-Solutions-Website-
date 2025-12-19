
import React from 'react';

const Security: React.FC = () => {
  return (
    <section id="security" className="py-32 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 order-2 lg:order-1">
             <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                   <div className="h-64 bg-slate-100 rounded-[3rem] flex items-center justify-center text-6xl">🔒</div>
                   <div className="h-64 bg-indigo-50 rounded-[3rem] mt-12 flex items-center justify-center text-6xl">🛡️</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="glass-card p-8 rounded-full shadow-2xl border border-indigo-200 font-black text-indigo-600 text-sm tracking-widest uppercase animate-pulse">
                      Encrypted
                   </div>
                </div>
             </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Privacy Standards</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">Security by Default.</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
              In an era of data breaches, we treat security as a primary architectural pillar, not an afterthought. For educational apps, this is non-negotiable.
            </p>
            <ul className="space-y-6">
               <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                  <p className="text-sm font-bold text-slate-700">AES-256 Data Encryption at Rest</p>
               </li>
               <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                  <p className="text-sm font-bold text-slate-700">COPPA & GDPR Compliance Ready</p>
               </li>
               <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
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
