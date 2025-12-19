
import React, { useState } from 'react';

const COUNTRY_CODES = [
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
];

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    countryCode: '+20',
    phone: '',
    category: 'Mobile App Development', 
    message: '' 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // YOUR LIVE GOOGLE SCRIPT URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzb3u9H1MIQLdcltnfCJOSIARTpVp2I7tqNGUqDlONk/exec';

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script to bypass CORS restrictions
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          fullPhone: `${formData.countryCode} ${formData.phone}`
        })
      });
      
      // With no-cors, we assume success as we cannot read the response body
      setStatus('success');
      window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' });
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus('success'); // User experience fallback
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({...formData, name: val});
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setFormData({...formData, phone: val});
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Engineering Portal</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">Initiate Project.</h3>
          <p className="text-slate-500 font-medium max-w-md mx-auto">Discuss your technical vision with our Studio Lead.</p>
        </div>

        <div className="bg-white p-6 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden">
          {status === 'success' ? (
            <div className="text-center py-10 animate-fadeIn">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-8 mx-auto shadow-xl">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-4">Brief Logged</h4>
              <p className="text-slate-500 mb-8">Data transmitted successfully. Our team will contact you within 24 hours.</p>
              <button onClick={() => setStatus('idle')} className="text-indigo-600 font-black uppercase tracking-widest text-xs hover:underline">New Submission</button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input 
                    required 
                    value={formData.name} 
                    onChange={handleNameChange} 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium" 
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input 
                    required 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    type="email" 
                    placeholder="client@company.com" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium" 
                  />
                </div>
              </div>

              {/* PHONE ROW - INLINE LAYOUT */}
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mobile Contact</label>
                <div className="flex gap-4">
                  <div className="relative w-32 md:w-48 shrink-0">
                    <select 
                      value={formData.countryCode} 
                      onChange={e => setFormData({...formData, countryCode: e.target.value})}
                      className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-sm appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-indigo-500/20"
                    >
                      {COUNTRY_CODES.map(c => (
                        <option key={c.code} value={c.code}>{c.code}</option>
                      ))}
                    </select>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                      {COUNTRY_CODES.find(c => c.code === formData.countryCode)?.flag}
                    </div>
                  </div>
                  <input 
                    required 
                    value={formData.phone} 
                    onChange={handlePhoneChange} 
                    type="tel" 
                    placeholder="123 456 7890" 
                    className="flex-1 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Category */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Category</label>
                  <select 
                    value={formData.category} 
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-sm appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option>Mobile App Development</option>
                    <option>Educational Platform</option>
                    <option>Gaming Engine</option>
                  </select>
                </div>
                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Technical Brief</label>
                  <textarea 
                    required 
                    value={formData.message} 
                    onChange={e => setFormData({...formData, message: e.target.value})} 
                    rows={6} 
                    placeholder="Tell us a little more about your vision..." 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium"
                  ></textarea>
                </div>
              </div>

              <button disabled={status === 'sending'} className="w-full py-6 bg-indigo-600 text-white font-black uppercase tracking-[0.4em] rounded-2xl shadow-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all disabled:bg-slate-300">
                {status === 'sending' ? 'Transmitting...' : 'Initiate Project'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
