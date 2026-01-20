
import React from 'react';
import { COMPANY_INFO, Icons } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-brand-accent relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-dark/5 -skew-x-12 transform translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="w-20 h-1 bg-brand-light mb-8"></div>
            <h3 className="text-brand-light font-bold text-sm tracking-[0.4em] uppercase mb-4">Über {COMPANY_INFO.name}</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">Tradition trifft <br/><span className="italic text-brand-light">Exzellenz</span></h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light">
              Als etablierte Immobiliengesellschaft in Niederlenz setzen wir Maßstäbe in der Vermittlung von Wohneigentum und Gewerbeflächen. 
              {COMPANY_INFO.name} steht für eine diskrete, professionelle und zielorientierte Arbeitsweise.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-10 font-light">
              Unser tiefes Verständnis für den lokalen Markt in 5702 Niederlenz ermöglicht es uns, für jedes Objekt die optimale Vermarktungsstrategie zu entwickeln und nachhaltige Werte für unsere Kunden zu schaffen.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-brand-light/30">
               <div>
                  <p className="text-3xl font-serif font-bold text-brand-dark">100%</p>
                  <p className="text-sm text-brand-light font-bold uppercase tracking-widest mt-1">Lokal</p>
               </div>
               <div>
                  <p className="text-3xl font-serif font-bold text-brand-dark">Premium</p>
                  <p className="text-sm text-brand-light font-bold uppercase tracking-widest mt-1">Service</p>
               </div>
            </div>
          </div>

          {/* Map Content */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-light/10 rounded-2xl group-hover:bg-brand-light/20 transition-colors"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.189568282909!2d8.167825277150117!3d47.394553502931215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790176867078345%3A0x643644f77c3a033b!2sDorfrain%2010%2C%205702%20Niederlenz!5e0!3m2!1sde!2sch!4v1716383000000!5m2!1sde!2sch" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Sai Immobilien GmbH"
                ></iframe>
                <div className="absolute top-6 right-6 bg-brand-dark text-white p-5 rounded-md shadow-2xl">
                   <p className="font-bold flex items-center gap-3 text-sm tracking-wider uppercase">
                     <Icons.MapPin />
                     {COMPANY_INFO.address}, {COMPANY_INFO.city}
                   </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
