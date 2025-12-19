
import React, { useState } from 'react';
import { useTranslation } from '../App';

type TabType = 'react' | 'figma' | 'gemini';

const InnovationHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('react');
  const { t } = useTranslation();

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'react', label: t.innovation.tabDev, icon: '⚛️' },
    { id: 'figma', label: t.innovation.tabDes, icon: '🎨' },
    { id: 'gemini', label: t.innovation.tabInt, icon: '🧠' }
  ];

  return (
    <section id="innovation" className="py-24 bg-slate-950 text-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4">{t.innovation.badge}</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-none">{t.innovation.title}</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs transition-all flex items-center gap-2 border ${
                activeTab === tab.id ? 'bg-indigo-600 border-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)]' : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 relative overflow-hidden">
          {activeTab === 'react' && (
            <div className="grid md:grid-cols-2 gap-12 items-center w-full animate-fadeIn">
              <div className="space-y-6 text-center md:text-left">
                <h4 className="text-3xl md:text-4xl font-black tracking-tight leading-none">{t.innovation.devH4}</h4>
                <p className="text-slate-400 text-sm md:text-lg leading-relaxed">{t.innovation.devP}</p>
              </div>
              <div className="aspect-video h-48 md:h-80 overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" 
                  alt="Development Hub"
                />
              </div>
            </div>
          )}

          {activeTab === 'figma' && (
            <div className="grid md:grid-cols-2 gap-12 items-center w-full animate-fadeIn">
              <div className="aspect-video h-48 md:h-80 order-2 md:order-1 overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" 
                  alt="UX Design Studio"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2 text-center md:text-left">
                <h4 className="text-3xl md:text-4xl font-black tracking-tight leading-none">{t.innovation.desH4}</h4>
                <p className="text-slate-400 text-sm md:text-lg leading-relaxed">{t.innovation.desP}</p>
              </div>
            </div>
          )}

          {activeTab === 'gemini' && (
            <div className="max-w-3xl w-full text-center space-y-8 animate-fadeIn mx-auto">
              <div className="w-20 h-20 rounded-3xl bg-blue-600/20 flex items-center justify-center text-4xl mx-auto border border-blue-500/20">🧠</div>
              <h4 className="text-3xl md:text-4xl font-black leading-none">{t.innovation.intH4}</h4>
              <p className="text-slate-400 text-sm md:text-lg max-w-xl mx-auto">{t.innovation.intP}</p>
              <div className="p-8 bg-blue-500/5 rounded-3xl border border-blue-500/10">
                <p className="text-blue-300 italic font-medium">{t.innovation.intQuote}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default InnovationHub;
