import { useState, useEffect } from 'react';
import { Coffee, Menu, X, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenPreOrder?: () => void;
}

export default function Header({ onOpenPreOrder }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream-50/90 backdrop-blur-xl shadow-md border-b border-cream-250/30 py-3'
            : 'bg-cream-50/40 backdrop-blur-md border-b border-cream-200/20 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2.5 group focus:outline-none"
              id="logo-button"
            >
              <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-gold-400 shadow-md group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-all duration-300">
                <Coffee className="w-5.5 h-5.5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-charcoal-800 group-hover:text-gold-600 transition-colors duration-300">
                Golden <span className="text-gold-500 group-hover:text-charcoal-800">Bakery</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('home')}
                className="font-sans font-semibold text-sm text-charcoal-700 hover:text-gold-600 transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="font-sans font-semibold text-sm text-charcoal-700 hover:text-gold-600 transition-colors cursor-pointer"
              >
                Our Menu
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="font-sans font-semibold text-sm text-charcoal-700 hover:text-gold-600 transition-colors cursor-pointer"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="font-sans font-semibold text-sm text-charcoal-700 hover:text-gold-600 transition-colors cursor-pointer"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('platter-builder')}
                className="font-sans font-semibold text-sm text-charcoal-700 hover:text-gold-600 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Platter Builder</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="font-sans font-semibold text-sm text-charcoal-700 hover:text-gold-600 transition-colors cursor-pointer"
              >
                Location & Hours
              </button>
            </nav>

            {/* Action Button & Hamburger */}
            <div className="flex items-center space-x-3">
              <a
                href="https://wa.me/916235160831?text=Hi%20Golden%20Bakery,%20I'd%20like%20to%20inquire%20about%20today's%20fresh%20snacks!"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-charcoal-900 text-white font-sans font-bold text-xs hover:bg-charcoal-800 hover:scale-105 transition-all duration-300 shadow-sm border border-white/10 hover:border-gold-500 cursor-pointer active:scale-95"
              >
                Bulk Inquiry
              </a>

              <button
                onClick={() => scrollToSection('menu')}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gold-500 text-charcoal-900 font-sans font-bold text-sm hover:bg-gold-600 hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer active:scale-95 border border-gold-400/30"
                id="cta-view-menu"
              >
                View Menu
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-cream-200 transition-colors text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                aria-label="Toggle Menu"
                id="hamburger-button"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-charcoal-800/40 backdrop-blur-sm"
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-cream-50 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-8 pt-16">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="font-display font-semibold text-xl text-left text-charcoal-800 hover:text-gold-500 py-2 border-b border-cream-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="font-display font-semibold text-xl text-left text-charcoal-800 hover:text-gold-500 py-2 border-b border-cream-200"
              >
                Our Menu
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="font-display font-semibold text-xl text-left text-charcoal-800 hover:text-gold-500 py-2 border-b border-cream-200"
              >
                Image Gallery
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="font-display font-semibold text-xl text-left text-charcoal-800 hover:text-gold-500 py-2 border-b border-cream-200"
              >
                Customer Reviews
              </button>
              <button
                onClick={() => scrollToSection('platter-builder')}
                className="font-display font-semibold text-xl text-left text-charcoal-800 hover:text-gold-500 py-2 border-b border-cream-200 flex items-center justify-between"
              >
                <span>Platter Builder</span>
                <span className="px-2.5 py-0.5 rounded-full bg-gold-100 text-gold-700 text-xs font-bold font-sans">
                  Interactive
                </span>
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="font-display font-semibold text-xl text-left text-charcoal-800 hover:text-gold-500 py-2 border-b border-cream-200"
              >
                Location & Hours
              </button>
              <a
                href="https://wa.me/916235160831?text=Hi%20Golden%20Bakery,%20I'd%20like%20to%20inquire%20about%20today's%20fresh%20snacks!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="font-display font-semibold text-xl text-left text-gold-600 hover:text-gold-500 py-2 border-b border-cream-200 flex items-center justify-between"
              >
                <span>Bulk Pre-order</span>
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-ping"></span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm text-charcoal-600 bg-cream-100 p-3.5 rounded-xl">
              <Clock className="w-5 h-5 text-gold-500 shrink-0" />
              <div>
                <p className="font-semibold text-xs text-charcoal-800">Fresh Batches Daily</p>
                <p className="text-xs">Afternoons at 3:00 PM</p>
              </div>
            </div>
            
            <button
              onClick={() => scrollToSection('menu')}
              className="w-full py-3.5 rounded-xl bg-gold-500 text-charcoal-800 font-sans font-bold text-center hover:bg-gold-600 transition-colors shadow-md block"
            >
              Explore Today's Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
