
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    category: 'Mobile App Development', 
    message: '' 
  });
  const [errors, setErrors] = useState<{name?: string, phone?: string}>({});

  const validate = () => {
    let newErrors: {name?: string, phone?: string} = {};
    if (!/^[a-zA-Z\s]*$/.test(formData.name)) newErrors.name = "Only letters and spaces allowed";
    if (!/^\d*$/.test(formData.phone)) newErrors.phone = "Only numbers allowed";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('sending');
    // Note: To receive actual emails, replace the fetch URL with a real service like Formspree
    // Example: fetch('https://formspree.io/f/your_form_id', { ... })
    setTimeout(() => {
      setStatus('success');
      // Scroll to the top of the contact section for the success message on mobile
      const el = document.getElementById('contact');
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }, 1500);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({...formData, name: value});
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData({...formData, phone: value});
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          <div className="text-center lg:text-left">
            <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Project Gateway</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 leading-[0.9] tracking-tighter">Ready to Build <br className="hidden md:block"/>the Future?</h3>
            <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-12 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
              Official submissions are routed through our secure engineering pipeline.
            </p>
            
            <div className="space-y-6 md:space-y-8 max-w-xs mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-0.5 uppercase text-[9px] tracking-widest">Privacy Protocol</h4>
                  <p className="text-slate-500 text-xs font-medium">Encrypted Transmission</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-0.5 uppercase text-[9px] tracking-widest">Headquarters</h4>
                  <p className="text-slate-500 text-xs font-medium">District 5, New Cairo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-[32px] md:rounded-[40px] shadow-2xl border border-slate-100 relative overflow-hidden">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-4 animate-fadeIn">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-indigo-100">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2">Message Sent</h4>
                <p className="text-sm text-slate-500 mb-8 max-w-xs mx-auto">Your technical brief has been transmitted to our studio lead.</p>
                
                <div className="bg-slate-50 border border-slate-200 rounded-2xl w-full text-left overflow-y-auto max-h-[300px] shadow-inner">
                  <div className="bg-indigo-600 px-5 py-3 text-white sticky top-0 z-10">
                    <span className="text-[9px] font-black uppercase tracking-widest">Secure Payload Log</span>
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="flex gap-4 border-b border-slate-200 pb-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold">SS</div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-indigo-600">Smart Solutions</p>
                        <p className="text-xs font-bold text-slate-800">Sender: {formData.name}</p>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-600 space-y-2">
                      <p><span className="text-slate-900 font-bold uppercase text-[9px]">Mobile:</span> {formData.phone}</p>
                      <p><span className="text-slate-900 font-bold uppercase text-[9px]">Email:</span> {formData.email}</p>
                      <p><span className="text-slate-900 font-bold uppercase text-[9px]">Category:</span> {formData.category}</p>
                      <div className="mt-4 p-4 bg-white border border-slate-100 rounded-xl italic font-medium">
                        "{formData.message || 'Brief pending detail...'}"
                      </div>
                    </div>
                  </div>
                </div>
                
                <button onClick={() => setStatus('idle')} className="mt-8 text-indigo-600 font-black uppercase text-[10px] tracking-widest hover:underline">
                  New Inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Full Name</label>
                    <input required value={formData.name} onChange={handleNameChange} type="text" placeholder="Your Name" className={`w-full px-5 py-3 md:py-4 bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-100'} rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium`} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Mobile Number</label>
                    <input required value={formData.phone} onChange={handlePhoneChange} type="tel" placeholder="0123456789" className={`w-full px-5 py-3 md:py-4 bg-slate-50 border ${errors.phone ? 'border-red-400' : 'border-slate-100'} rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium`} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Email Address</label>
                  <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" placeholder="example@gmail.com" className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Inquiry Type</label>
                  <div className="relative">
                    <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium appearance-none">
                      <option>Mobile App Development</option>
                      <option>Gaming Engine</option>
                      <option>Educational Platform</option>
                      <option>AI Implementation</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg></div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Technical Brief</label>
                  <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} placeholder="Describe your project vision..." className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium resize-none"></textarea>
                </div>
                <button disabled={status === 'sending'} className="w-full py-4 md:py-5 bg-indigo-600 text-white font-black uppercase tracking-[0.2em] rounded-xl md:rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all disabled:bg-slate-300">
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
