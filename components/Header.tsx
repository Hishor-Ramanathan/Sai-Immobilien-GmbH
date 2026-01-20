
import React, { useState } from 'react';
import { Logo, Icons } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20">
              <Logo />
            </div>
            <div className="hidden lg:block">
              <h1 className="text-2xl font-bold text-brand-dark leading-none tracking-tight font-serif uppercase">SAI</h1>
              <p className="text-[10px] font-semibold text-brand-light tracking-[0.2em] uppercase">Immobilien GmbH</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, 'home')}
              className="text-gray-600 hover:text-brand-light font-medium transition-colors uppercase text-sm tracking-wider"
            >
              Startseite
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="text-gray-600 hover:text-brand-light font-medium transition-colors uppercase text-sm tracking-wider"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="text-gray-600 hover:text-brand-light font-medium transition-colors uppercase text-sm tracking-wider"
            >
              Über Uns
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="bg-brand-dark text-white px-8 py-3 rounded-md font-bold hover:bg-brand-light transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2 text-sm uppercase tracking-widest"
            >
              <Icons.Phone />
              <span>Kontakt</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-dark p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-light/20 absolute w-full shadow-2xl">
          <div className="flex flex-col p-6 space-y-6">
            <a href="#home" className="text-gray-700 hover:text-brand-light font-bold uppercase tracking-widest text-sm" onClick={(e) => handleScroll(e, 'home')}>Startseite</a>
            <a href="#services" className="text-gray-700 hover:text-brand-light font-bold uppercase tracking-widest text-sm" onClick={(e) => handleScroll(e, 'services')}>Services</a>
            <a href="#about" className="text-gray-700 hover:text-brand-light font-bold uppercase tracking-widest text-sm" onClick={(e) => handleScroll(e, 'about')}>Über Uns</a>
            <a href="#contact" className="bg-brand-dark text-white text-center py-4 rounded-md font-bold uppercase tracking-widest text-sm" onClick={(e) => handleScroll(e, 'contact')}>
              Jetzt Kontaktieren
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
