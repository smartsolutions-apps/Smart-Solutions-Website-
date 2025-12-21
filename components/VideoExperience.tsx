
import React from 'react';

// Using a high-quality professional cinematic tech video as default 
// so the site works immediately. Rename your downloaded video to 'evolution-film.mp4'
// and place it in the same directory to use yours.
const STATIC_VIDEO_URL = "https://cdn.pixabay.com/video/2021/08/13/84918-588326710_large.mp4"; 

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
            <div className="absolute bottom-10 left-10 p-8 glass-card rounded-3xl border-white/20 hidden md:block">
               <div className="flex items-center gap-4 mb-3">
                 <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-xs">S</div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Featured Production</p>
               </div>
               <p className="text-xl font-black text-white uppercase tracking-tight">Smart Solutions: The Evolution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExperience;
