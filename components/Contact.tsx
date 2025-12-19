
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Get in Touch</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">Ready to Build <br/>the Future?</h3>
            <p className="text-slate-500 text-lg mb-12 max-w-md font-medium leading-relaxed">
              Whether you have a fully-formed idea or just a spark of inspiration, our engineers in New Cairo are ready to scale it.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 uppercase text-[10px] tracking-widest">Studio HQ</h4>
                  <p className="text-slate-500 text-sm">District 5, New Cairo, Egypt</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 uppercase text-[10px] tracking-widest">Inquiries</h4>
                  <p className="text-slate-500 text-sm">hello@smartsolutions.app</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 relative overflow-hidden">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20 animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-slate-500">Our engineering lead will reach out within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-indigo-600 font-bold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Email</label>
                    <input required type="email" placeholder="john@company.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Project Category</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm appearance-none">
                    <option>Mobile App Development</option>
                    <option>Gaming Engine</option>
                    <option>Educational Platform</option>
                    <option>AI Implementation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Message</label>
                  <textarea required rows={4} placeholder="Tell us about your vision..." className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none"></textarea>
                </div>
                <button 
                  disabled={status === 'sending'}
                  className="w-full py-5 bg-indigo-600 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all disabled:bg-slate-300 disabled:translate-y-0"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
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
