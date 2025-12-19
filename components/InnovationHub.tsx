
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
        prompt: 'A futuristic tech laboratory in New Cairo, neon lights, cinematic 4k',
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        setVideoUrl(`${downloadLink}&key=${process.env.API_KEY}`);
      }
    } catch (error) {
      console.error("Video generation failed:", error);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section id="innovation" className="py-32 bg-slate-950 text-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Innovation Hub</h2>
          <h3 className="text-5xl font-black tracking-tighter mb-6">Tools of the Future.</h3>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">
            We master the industry's most powerful technologies to deliver unparalleled results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3 border ${
                activeTab === tab.id 
                ? 'bg-indigo-600 border-indigo-500 shadow-xl shadow-indigo-500/20' 
                : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[4rem] p-8 md:p-16 min-h-[500px] flex items-center justify-center relative overflow-hidden">
          {/* Decorative Blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full"></div>

          {activeTab === 'react' && (
            <div className="grid md:grid-cols-2 gap-12 items-center w-full animate-fadeIn">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-3xl">⚛️</div>
                <h4 className="text-4xl font-black tracking-tight">Scalable Frontend Architecture</h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  We use React to build components that are modular, testable, and lightning fast. Our architecture supports real-time data sync and complex state management.
                </p>
                <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm text-indigo-300 border border-white/5">
                  <code>
                    const SmartApp = () => &#123; <br/>
                    &nbsp;&nbsp;return &lt;Experience engine="V3" /&gt; <br/>
                    &#125;;
                  </code>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-1 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800" alt="React Development" className="rounded-3xl w-full h-80 object-cover opacity-90" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-slate-950 p-6 rounded-2xl shadow-2xl font-black text-xs uppercase tracking-widest">
                  Component-Driven
                </div>
              </div>
            </div>
          )}

          {activeTab === 'figma' && (
            <div className="grid md:grid-cols-2 gap-12 items-center w-full animate-fadeIn">
               <div className="relative order-2 md:order-1 group cursor-pointer">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-1 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
                  <img src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800" alt="UI Design" className="rounded-3xl w-full h-80 object-cover opacity-90" />
                </div>
                <div className="absolute -top-4 -left-4 bg-emerald-500 text-white p-6 rounded-2xl shadow-2xl font-black text-xs uppercase tracking-widest">
                  Pixel Perfect
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-3xl">🎨</div>
                <h4 className="text-4xl font-black tracking-tight">Immersive Experience Design</h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Design is not just how it looks, but how it works. We prototype every micro-interaction in Figma before a single line of code is written.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    UX Archetypes
                  </li>
                  <li className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Rapid Prototyping
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'gemini' && (
            <div className="max-w-3xl w-full text-center space-y-8 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-4xl mx-auto">🧠</div>
              <h4 className="text-4xl font-black tracking-tight">AI Logical Engines</h4>
              <p className="text-slate-400 text-lg">
                We integrate Gemini to power adaptive learning paths in <span className="text-blue-400 font-bold">My Wonder Books</span>. The app learns as the child grows.
              </p>
              <div className="p-8 bg-blue-900/20 border border-blue-500/20 rounded-3xl text-left">
                <p className="text-blue-200 italic font-medium">"Create a story for a 6-year-old about a robot discovering a hidden garden in Mars..."</p>
                <div className="mt-4 pt-4 border-t border-blue-500/20 text-blue-300 text-sm">
                  Gemini generates personalized, pedagogical-safe content in milliseconds.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'veo' && (
            <div className="max-w-4xl w-full text-center space-y-8 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-4xl mx-auto">🎬</div>
              <h4 className="text-4xl font-black tracking-tight">Cinematic AI Motion</h4>
              <p className="text-slate-400 text-lg">
                Generate high-definition studio concepts with Veo. See the vision before we build the reality.
              </p>
              
              <div className="relative aspect-video bg-black/40 rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center">
                {videoUrl ? (
                  <video src={videoUrl} controls className="w-full h-full object-cover" />
                ) : (
                  <div className="p-12 text-center">
                    {aiLoading ? (
                      <div className="space-y-4">
                        <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="text-pink-400 font-bold uppercase tracking-widest text-xs">Imagining your future...</p>
                      </div>
                    ) : (
                      <button 
                        onClick={handleGenerateVideo}
                        className="px-10 py-5 bg-pink-600 text-white font-black rounded-2xl hover:bg-pink-500 transition-all shadow-xl shadow-pink-500/20"
                      >
                        Generate Studio Demo
                      </button>
                    )}
                  </div>
                )}
              </div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Powered by Google Veo 3.1 Fast</p>
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