
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Our workspace" />
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Coding excellence" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Apps for kids" />
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Team strategy" />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Three Years of Excellence</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              A Legacy of Quality, Born in the Heart of New Cairo.
            </h3>
            <p className="text-slate-600 mb-6 text-lg">
              Smart Solutions isn't just an app company; we are an engineering powerhouse. Over the last three years, we have meticulously built a reputation for delivering high-performance, aesthetically pleasing, and deeply engaging applications.
            </p>
            <p className="text-slate-600 mb-10 text-lg">
              Our journey reached a monumental milestone when our flagship application, <strong>My Wonder Books</strong>, surpassed half a million downloads and earned us an invitation to present our engineering philosophy at <strong>Harvard University</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-sm text-slate-600">To create apps that aren't just tools, but meaningful experiences that empower and educate the next generation.</p>
              </div>
              <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                <h4 className="font-bold text-indigo-900 mb-2">Our Vision</h4>
                <p className="text-sm text-indigo-700">To become the global standard for quality in the kids' application and gaming industry, right from Egypt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
