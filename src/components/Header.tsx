import { useState, useEffect } from 'react';
import { Menu, X, Phone, Compass, Calendar, Award } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar (24/7 Services & Contact) */}
      <div className="bg-royal-950 text-gold-100 text-xs py-2 px-4 border-b border-royal-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              24/7 Cab Services in Tirupati
            </span>
            <span className="hidden md:inline-flex items-center gap-1">
              • Special Tirumala Darshan packages
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${CONTACT_INFO.phonePrimary}`} className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> {CONTACT_INFO.phonePrimary}
            </a>
            <span className="hidden sm:inline text-royal-800">|</span>
            <span className="text-white bg-orange-600/95 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
              Trusted by Pilgrims
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 py-3 px-4 md:px-8 ${
        isScrolled 
          ? 'bg-royal-950/95 backdrop-blur-md shadow-lg border-b border-gold-500/10' 
          : 'bg-gradient-to-b from-royal-950/90 to-royal-950/60 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-royal-950 shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 stroke-[2.5] text-royal-950" />
              <div className="absolute -top-1 -right-1 bg-royal-950 text-amber-400 text-[8px] px-1 rounded-full font-bold border border-gold-500/30">
                SRI
              </div>
            </div>
            <div>
              <span className="block font-display text-lg sm:text-xl font-extrabold text-white tracking-wide group-hover:text-amber-400 transition-colors uppercase leading-tight">
                Sri Ganesha <span className="text-amber-400">Travels</span>
              </span>
              <span className="block text-[10px] text-gray-300 font-mono tracking-widest uppercase">
                Tirupati's Premium Fleet
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold text-gray-200 hover:text-amber-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all">
              Home
            </a>
            <a href="#fleet" className="text-sm font-semibold text-gray-200 hover:text-amber-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all">
              Our Fleet
            </a>
            <a href="#about" className="text-sm font-semibold text-gray-200 hover:text-amber-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all">
              About Us
            </a>
            <a href="#testimonials" className="text-sm font-semibold text-gray-200 hover:text-amber-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all">
              Reviews
            </a>
            <a href="#faqs" className="text-sm font-semibold text-gray-200 hover:text-amber-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all">
              FAQs
            </a>
            <a href="#contact" className="text-sm font-semibold text-gray-200 hover:text-amber-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#booking-section" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-royal-950 hover:text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-md hover:shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 uppercase duration-300 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Online Now
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white hover:text-amber-400 p-2 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Sidebar Backed Overlay Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-royal-950 border-b border-amber-500/20 py-6 px-6 shadow-xl flex flex-col gap-4 animate-fadeIn">
            <a 
              href="#home" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-100 hover:text-amber-400 py-2 border-b border-white/5"
            >
              Home
            </a>
            <a 
              href="#fleet" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-100 hover:text-amber-400 py-2 border-b border-white/5"
            >
              Our Fleet
            </a>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-100 hover:text-amber-400 py-2 border-b border-white/5"
            >
              About Us
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-100 hover:text-amber-400 py-2 border-b border-white/5"
            >
              Reviews
            </a>
            <a 
              href="#faqs" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-100 hover:text-amber-400 py-2 border-b border-white/5"
            >
              FAQs
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-gray-100 hover:text-amber-400 py-2"
            >
              Contact Us
            </a>
            
            <div className="mt-4 flex flex-col gap-3">
              <a 
                href="#booking-section" 
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-royal-950 font-bold py-3 text-center rounded-lg shadow transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </a>
              <a 
                href={`tel:${CONTACT_INFO.phonePrimary}`}
                className="border border-white/20 hover:border-white/40 text-white font-bold py-3 text-center rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call Us Direct
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
