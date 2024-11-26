import React from 'react';

const ContactSection = () => {
  return (
    <div className="relative py-24 px-4">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-60"></div>
      
      {/* Content */}
      <div className="relative max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Get in touch
          </h2>
          <p className="text-slate-600 mb-8">
            Whether you have questions, prayer requests, or just want to say hello, we'd love to hear from you.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;