
import React from 'react';

const About: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800";
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl h-60 md:h-80 relative group bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt="Workspace" 
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-36 md:h-48 relative bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                    onError={handleImageError}
                    className="w-full h-full object-cover" 
                    alt="Engineering" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-36 md:h-48 relative bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" 
                    onError={handleImageError}
                    className="w-full h-full object-cover" 
                    alt="Process" 
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-2xl h-60 md:h-80 relative bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                    onError={handleImageError}
                    className="w-full h-full object-cover" 
                    alt="Team" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Identity</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 leading-[0.95] tracking-tighter">Engineering Built <br className="hidden md:block"/>on Precision.</h3>
            <p className="text-slate-500 mb-6 text-sm md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Smart Solutions is a New Cairo-based engineering studio. We believe that code is a work of art, and trust is our primary architecture.
            </p>
            <p className="text-slate-500 mb-8 md:mb-10 text-sm md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Powering world-class educational platforms with over <strong>500,000 global users</strong>.
            </p>
            
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="p-6 rounded-[2rem] bg-indigo-50 border border-indigo-100 text-left">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm mb-3">✓</div>
                <h4 className="font-bold text-indigo-900 uppercase text-[9px] tracking-widest">Global</h4>
                <p className="text-[10px] text-indigo-700 font-semibold">Scale Reach</p>
              </div>
              <div className="p-6 rounded-[2rem] bg-slate-900 border border-slate-800 text-left">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400 shadow-sm mb-3">✓</div>
                <h4 className="font-bold text-white uppercase text-[9px] tracking-widest">Secure</h4>
                <p className="text-[10px] text-slate-400 font-semibold">Data Privacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
