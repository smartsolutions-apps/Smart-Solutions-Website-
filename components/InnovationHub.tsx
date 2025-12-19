
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

type TabType = 'react' | 'figma' | 'gemini' | 'veo';

const InnovationHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('react');
  const [aiLoading, setAiLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'react', label: 'Development', icon: '⚛️' },
    { id: 'figma', label: 'Design', icon: '🎨' },
    { id: 'gemini', label: 'Intelligence', icon: '🧠' },
    { id: 'veo', label: 'Motion', icon: '🎬' }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Branded fallback image URL
    e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800";
  };

  const handleGenerateVideo = async () => {
    if (!window.aistudio) return;
    setAiLoading(true);
    try {
      if (!await window.aistudio.hasSelectedApiKey()) {
        await window.aistudio.openSelectKey();
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Futuristic digital engineering studio in Cairo, ultra-modern, 4k cinematic',
        config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '16:9' }
      });
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }
      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) setVideoUrl(`${downloadLink}&key=${process.env.API_KEY}`);
    } catch (error) {
      console.error("Video generation failed:", error);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section id="innovation" className="py-20 md:py-32 bg-slate-950 text-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Innovation Hub</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 md:mb-6">Tools of the Future.</h3>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium text-xs md:text-base leading-relaxed">
            Mastering industry-leading technologies to engineer scalable digital architectures.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[9px] md:text-xs transition-all flex items-center gap-2 md:gap-3 border ${
                activeTab === tab.id ? 'bg-indigo-600 border-indigo-500' : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <span className="text-lg md:text-xl transition-transform">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[4rem] p-6 md:p-16 flex items-center justify-center relative overflow-hidden min-h-[450px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[80px] rounded-full"></div>
          
          {activeTab === 'react' && (
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full animate-fadeIn">
              <div className="space-y-4 md:space-y-6 text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-3xl mx-auto md:mx-0">⚛️</div>
                <h4 className="text-3xl md:text-4xl font-black tracking-tight leading-none">High-Speed Frontend</h4>
                <p className="text-slate-400 text-xs md:text-base leading-relaxed">Modular components engineered for native-level performance across all mobile devices.</p>
              </div>
              <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl h-48 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200" 
                  onError={handleImageError} 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            </div>
          )}

          {activeTab === 'figma' && (
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full animate-fadeIn">
               <div className="relative order-2 md:order-1 overflow-hidden rounded-2xl md:rounded-3xl h-48 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200" 
                  onError={handleImageError} 
                  className="w-full h-full object-cover opacity-90" 
                />
              </div>
              <div className="space-y-4 md:space-y-6 order-1 md:order-2 text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 flex items-center justify-center text-3xl mx-auto md:mx-0">🎨</div>
                <h4 className="text-3xl md:text-4xl font-black tracking-tight leading-none">Interface Precision</h4>
                <p className="text-slate-400 text-xs md:text-base leading-relaxed">Prototyping every micro-interaction to ensure absolute user delight before a line of code is written.</p>
              </div>
            </div>
          )}

          {activeTab === 'gemini' && (
            <div className="max-w-3xl w-full text-center space-y-6 md:space-y-8 animate-fadeIn">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600/20 flex items-center justify-center text-4xl mx-auto">🧠</div>
              <h4 className="text-3xl md:text-4xl font-black tracking-tight">AI Logical Engines</h4>
              <p className="text-slate-400 text-xs md:text-lg">Adaptive learning paths that evolve with the user's progress.</p>
              <div className="p-6 md:p-8 bg-blue-900/20 border border-blue-500/20 rounded-2xl text-left">
                <p className="text-blue-200 italic font-medium text-xs md:text-base">"Engineering narratives that learn, adapt, and inspire."</p>
              </div>
            </div>
          )}

          {activeTab === 'veo' && (
            <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8 animate-fadeIn">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-pink-600/20 flex items-center justify-center text-4xl mx-auto">🎬</div>
              <h4 className="text-3xl md:text-4xl font-black tracking-tight">Cinematic Logic</h4>
              <p className="text-slate-400 text-xs md:text-lg">AI-powered motion design for studio-quality interactive storytelling.</p>
              <div className="relative aspect-video bg-black/40 rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center">
                {videoUrl ? (
                  <video src={videoUrl} controls className="w-full h-full object-cover" />
                ) : (
                  <div className="p-8 md:p-12 text-center">
                    {aiLoading ? (
                      <div className="space-y-4">
                        <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="text-pink-400 font-bold uppercase tracking-widest text-[9px]">Transmitting...</p>
                      </div>
                    ) : (
                      <button onClick={handleGenerateVideo} className="px-6 py-4 md:px-10 md:py-5 bg-pink-600 text-white font-black rounded-xl md:rounded-2xl hover:bg-pink-500 transition-all text-xs uppercase tracking-widest">
                        Generate Concept
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default InnovationHub;
