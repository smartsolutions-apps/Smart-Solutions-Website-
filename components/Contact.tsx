
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../App';

interface CountryCode {
  code: string;
  country: string;
  flag: string;
}

const PREFERRED_CODES: CountryCode[] = [
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
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>(PREFERRED_CODES);
  const { t, locale } = useTranslation();
  
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    countryCode: '+20',
    phone: '',
    category: t.contact.cat1, 
    message: '' 
  });

  // Automatic IP-based Country Detection
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        if (data.country_calling_code) {
          const detectedCode = data.country_calling_code.startsWith('+') 
            ? data.country_calling_code 
            : `+${data.country_calling_code}`;
          
          const exists = countryCodes.find(c => c.code === detectedCode);
          
          if (!exists) {
            const newEntry: CountryCode = {
              code: detectedCode,
              country: data.country_name || 'Detected',
              flag: '🌐'
            };
            setCountryCodes(prev => [newEntry, ...prev]);
          }
          
          setFormData(prev => ({ ...prev, countryCode: detectedCode }));
        }
      } catch (err) {
        console.warn("Country detection via IP failed. Using default (+20).", err);
      }
    };

    detectCountry();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzgmxiAFE2VALewPnUXeTKZGYVKwI1FBFoH9ZhqCd1nnPSHfA3SA3inTtkHfE9ORZhumA/exec';

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          fullPhone: `${formData.countryCode} ${formData.phone}`
        })
      });
      
      setStatus('success');
      window.scrollTo({ top: (document.getElementById('contact')?.offsetTop || 0) - 100, behavior: 'smooth' });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus('success');
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^a-zA-Z\s\u0600-\u06FF]/g, '');
    setFormData({...formData, name: val});
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setFormData({...formData, phone: val});
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{t.contact.portal}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">{t.contact.title}</h3>
          <p className="text-slate-500 font-medium max-w-md mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="bg-white p-6 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden">
          {status === 'success' ? (
            <div className="text-center py-10 animate-fadeIn">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-8 mx-auto shadow-xl">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="text-3xl font-black text-slate-900 mb-4">{t.contact.successTitle}</h4>
              <p className="text-slate-500 mb-8">{t.contact.successDesc}</p>
              <button onClick={() => setStatus('idle')} className="text-indigo-600 font-black uppercase tracking-widest text-xs hover:underline">{t.contact.newSub}</button>
            </div>
          ) : (
            <form className="grid md:grid-cols-2 gap-8 lg:gap-12" onSubmit={handleSubmit}>
              {/* Left Column: Essential Info */}
              <div className="space-y-6">
                <div className="space-y-2 text-start">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t.contact.fullName}</label>
                  <input 
                    required 
                    value={formData.name} 
                    onChange={handleNameChange} 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium" 
                  />
                </div>

                <div className="space-y-2 text-start">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t.contact.email}</label>
                  <input 
                    required 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    type="email" 
                    placeholder="client@company.com" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium" 
                  />
                </div>

                <div className="space-y-2 text-start">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t.contact.mobile}</label>
                  {/* CRITICAL: dir="ltr" ensures the code stays to the left of the number even in Arabic mode */}
                  <div className="flex gap-3" dir="ltr">
                    <div className="relative w-32 shrink-0">
                      <select 
                        value={formData.countryCode} 
                        onChange={e => setFormData({...formData, countryCode: e.target.value})}
                        className="w-full pl-10 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-sm appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-indigo-500/20"
                      >
                        {countryCodes.map(c => (
                          <option key={c.code} value={c.code}>{c.code}</option>
                        ))}
                      </select>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg pointer-events-none">
                        {countryCodes.find(c => c.code === formData.countryCode)?.flag || '🌐'}
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

                <div className="space-y-2 text-start">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t.contact.category}</label>
                  <select 
                    value={formData.category} 
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-sm appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value={t.contact.cat1}>{t.contact.cat1}</option>
                    <option value={t.contact.cat2}>{t.contact.cat2}</option>
                    <option value={t.contact.cat3}>{t.contact.cat3}</option>
                  </select>
                </div>
              </div>

              {/* Right Column: Brief & Submission */}
              <div className="flex flex-col">
                <div className="space-y-2 text-start flex-1 mb-6">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t.contact.brief}</label>
                  <textarea 
                    required 
                    value={formData.message} 
                    onChange={e => setFormData({...formData, message: e.target.value})} 
                    placeholder={t.contact.briefPlaceholder} 
                    className="w-full h-full min-h-[200px] md:min-h-0 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button disabled={status === 'sending'} className="w-full py-6 bg-indigo-600 text-white font-black uppercase tracking-[0.4em] rounded-2xl shadow-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all disabled:bg-slate-300">
                  {status === 'sending' ? t.contact.transmitting : t.contact.submit}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
