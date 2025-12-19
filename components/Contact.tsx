
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', category: 'Mobile App Development', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulation of transmission to engineering lead
    setTimeout(() => {
      setStatus('success');
      window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          <div className="text-center lg:text-left">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Secure Portal</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 leading-[0.9] tracking-tighter">Ready to Build <br className="hidden md:block"/>the Future?</h3>
            <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-12 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
              Official project inquiries are handled via our encrypted engineering gateway.
            </p>
            
            <div className="space-y-6 md:space-y-8 max-w-xs mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white shadow-md flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-0.5 uppercase text-[9px] tracking-widest">Studio HQ</h4>
                  <p className="text-slate-500 text-xs font-medium">District 5, New Cairo</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white shadow-md flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-0.5 uppercase text-[9px] tracking-widest">Privacy Status</h4>
                  <p className="text-slate-500 text-xs font-medium italic">End-to-End Encrypted</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-[32px] md:rounded-[40px] shadow-2xl border border-slate-100 relative overflow-hidden">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-6 animate-fadeIn">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-indigo-100">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2">Transmission Successful</h4>
                <p className="text-sm text-slate-500 mb-8">Data has been routed to the Engineering Lead's priority inbox.</p>
                
                <div className="bg-slate-50 border border-slate-200 rounded-2xl md:rounded-3xl w-full text-left overflow-hidden shadow-inner">
                  <div className="bg-indigo-600 px-5 py-3 text-white flex justify-between items-center">
                    <span className="text-[9px] font-black uppercase tracking-widest">Engineering Payload Preview</span>
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="flex gap-4 border-b border-slate-200 pb-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold shrink-0">SS</div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-indigo-600">Smart Solutions Studio</p>
                        <p className="text-xs font-bold text-slate-800 line-clamp-1">Inquiry: {formData.name}</p>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-600 leading-relaxed font-medium">
                      <p><span className="text-slate-900 font-bold">Category:</span> {formData.category}</p>
                      <p><span className="text-slate-900 font-bold">Auth Email:</span> {formData.email}</p>
                      <div className="mt-4 p-4 bg-white border border-slate-100 rounded-xl italic">
                        "{formData.message || 'No additional details provided.'}"
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-indigo-600 font-black uppercase text-[10px] tracking-widest hover:underline"
                >
                  New Transmission
                </button>
              </div>
            ) : (
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Full Name</label>
                    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type="text" placeholder="Engineering Lead" className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Email Address</label>
                    <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" placeholder="contact@company.com" className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Service Required</label>
                  <div className="relative">
                    <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium appearance-none">
                      <option>Mobile App Development</option>
                      <option>Gaming Engine</option>
                      <option>Educational Platform</option>
                      <option>AI Implementation</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Detailed Brief</label>
                  <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} placeholder="Tell us about your technical vision..." className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium resize-none"></textarea>
                </div>
                <button 
                  disabled={status === 'sending'}
                  className="w-full py-4 md:py-5 bg-indigo-600 text-white font-black uppercase tracking-[0.2em] rounded-xl md:rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all disabled:bg-slate-300 disabled:translate-y-0"
                >
                  {status === 'sending' ? 'Transmitting...' : 'Initiate Project'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
