
import React from 'react';
import { COMPANY_INFO, Logo } from '../constants';

interface FooterProps {
  onOpenLegal?: (type: 'impressum' | 'datenschutz' | 'agb') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-brand-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded w-16 h-16">
                  <Logo />
               </div>
               <div>
                  <h2 className="text-2xl font-bold font-serif uppercase tracking-wider">{COMPANY_INFO.name}</h2>
                  <p className="text-xs text-brand-light font-bold tracking-[0.2em] uppercase">Ihr Immobilienpartner</p>
               </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Wir begleiten Sie mit Leidenschaft und Expertise bei jedem Schritt Ihres Immobilienprojekts. Vertrauen Sie auf lokale Kompetenz in Niederlenz.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-brand-light text-sm font-bold uppercase tracking-[0.3em]">Kontakt</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-brand-light">Adres:</span>
                {COMPANY_INFO.address}, {COMPANY_INFO.city}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-light">Tel:</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-light">Email:</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors break-all">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h3 className="text-brand-light text-sm font-bold uppercase tracking-[0.3em]">Rechtliches</h3>
            <div className="flex flex-col gap-4 items-start">
              <button 
                onClick={() => onOpenLegal?.('impressum')} 
                className="text-gray-300 hover:text-brand-light transition-colors text-sm uppercase tracking-widest"
              >
                Impressum
              </button>
              <button 
                onClick={() => onOpenLegal?.('datenschutz')} 
                className="text-gray-300 hover:text-brand-light transition-colors text-sm uppercase tracking-widest"
              >
                Datenschutz
              </button>
              <button 
                onClick={() => onOpenLegal?.('agb')} 
                className="text-gray-300 hover:text-brand-light transition-colors text-sm uppercase tracking-widest"
              >
                AGB
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 tracking-widest uppercase">&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8">
             <span className="text-[10px] text-gray-600 uppercase tracking-widest">Region Aargau</span>
             <span className="text-[10px] text-gray-600 uppercase tracking-widest">Schweiz</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
