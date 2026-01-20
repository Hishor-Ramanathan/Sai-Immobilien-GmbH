
import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop",
    alt: "Elegante moderne Architektur"
  },
  {
    url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000&auto=format&fit=crop",
    alt: "Luxuriöses Wohnzimmer Interieur"
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
    alt: "Moderne Villa bei Sonnenuntergang"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Slideshow Container */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.url} 
              alt={slide.alt} 
              className="w-full h-full object-cover transform scale-100 animate-slow-zoom"
            />
            {/* Dark gradient for text readability and branding feel */}
            <div className="absolute inset-0 bg-brand-dark/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/20 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl text-left">
          <div className="inline-block px-4 py-1.5 border border-brand-light/50 rounded-full bg-brand-dark/30 backdrop-blur-sm mb-6">
            <p className="text-brand-light text-xs font-bold uppercase tracking-[0.3em]">Exklusive Immobilien</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold mb-8 leading-[1.05] drop-shadow-xl">
            Werte schaffen.<br />
            <span className="text-brand-light italic">Zukunft</span> gestalten.
          </h1>
          
          <p className="text-gray-100 text-lg md:text-xl mb-12 max-w-2xl font-light leading-relaxed drop-shadow-md">
            Ihr Partner für erstklassige Immobilienlösungen in <span className="font-semibold text-white">Niederlenz</span>. 
            Individuell, kompetent und mit dem Blick für das Besondere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="bg-brand-light text-white px-10 py-4 rounded-md font-bold hover:bg-brand-light/80 transition-all transform hover:-translate-y-1 shadow-2xl text-center flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
            >
              Unsere Expertise
              <span className="text-xl">→</span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-brand-dark transition-all transform hover:-translate-y-1 text-center shadow-lg uppercase tracking-widest text-sm"
            >
              Beratung anfragen
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-700 rounded-full ${
              index === currentSlide 
                ? 'bg-brand-light w-16 h-1' 
                : 'bg-white/30 w-4 h-1 hover:bg-white/60'
            }`}
            aria-label={`Bild ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.12); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 35s linear infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
