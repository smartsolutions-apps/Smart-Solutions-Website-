
import React from 'react';

// PRODUCTION: Place your downloaded video in the root of your project
// and rename it to 'evolution-film.mp4'. 
const STATIC_VIDEO_URL = "evolution-film.mp4"; 

const VideoExperience: React.FC = () => {
  return (
    <section id="cinema" className="py-24 md:py-44 bg-slate-950 text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px] mb-6">Cinematic Narrative</h2>
          <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-none">The Evolution of Apps</h3>
          <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto font-medium">
            Architecting the future through precision engineering and digital storytelling.
          </p>
        </div>

        <div className="relative aspect-video w-full rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-slate-900 border border-white/10 shadow-2xl group">
          <div className="relative h-full w-full">
            <video 
              src={STATIC_VIDEO_URL} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000"
            />
            
            {/* Glassmorphic Overlay for Brand presence */}
            <div className="absolute bottom-8 left-8 p-6 glass-card rounded-2xl border-white/20 hidden md:block">
               <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-1">Featured Production</p>
               <p className="text-sm font-bold text-white uppercase tracking-tight">Smart Solutions: The Evolution</p>
            </div>
            
            {/* Fallback Message for developers */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40">
               <p className="text-xs text-white/50 text-center px-10">
                 (Place your 'evolution-film.mp4' in the root directory to see this video live)
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExperience;
