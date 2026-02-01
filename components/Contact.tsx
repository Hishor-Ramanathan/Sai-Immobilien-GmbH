import React from 'react';
import { COMPANY_INFO, Icons } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark text-white relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Kontaktieren Sie uns</h2>
          <p className="text-brand-light text-lg mx-auto max-w-2xl">
            Wir freuen uns auf Ihre Nachricht. Nutzen Sie einen der folgenden Kanäle, um mit uns in Kontakt zu treten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10">
            <div className="text-brand-light mb-4 text-4xl">
              <Icons.MapPin />
            </div>
            <h3 className="font-bold text-xl mb-3">Adresse</h3>
            <p className="text-gray-300">{COMPANY_INFO.address}</p>
            <p className="text-gray-300">{COMPANY_INFO.city}</p>
          </div>

          {/* Phone Card */}
          <a href={`tel:${COMPANY_INFO.phone}`} className="flex flex-col items-center text-center p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10 group">
            <div className="text-brand-light mb-4 text-4xl group-hover:scale-110 transition-transform">
              <Icons.Phone />
            </div>
            <h3 className="font-bold text-xl mb-3">Telefon</h3>
            <p className="text-gray-300 group-hover:text-white transition-colors">{COMPANY_INFO.phone}</p>
            <span className="text-xs text-brand-light/70 uppercase tracking-widest mt-2">{COMPANY_INFO.role}</span>
          </a>

          {/* Email Card */}
          <a href={`mailto:${COMPANY_INFO.email}`} className="flex flex-col items-center text-center p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10 group">
            <div className="text-brand-light mb-4 text-4xl group-hover:scale-110 transition-transform">
              <Icons.Mail />
            </div>
            <h3 className="font-bold text-xl mb-3">Email</h3>
            <p className="text-gray-300 group-hover:text-white transition-colors break-all">{COMPANY_INFO.email}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;