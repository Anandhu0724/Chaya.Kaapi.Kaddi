/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import PreOrderModal from './components/PreOrderModal';
import WhatsAppButton from './components/WhatsAppButton';
import { Coffee, Facebook, Instagram, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-food-pattern flex flex-col justify-between selection:bg-gold-500 selection:text-charcoal-800">
      {/* Premium Navigation Header */}
      <Header onOpenPreOrder={() => setIsPreOrderOpen(true)} />

      {/* Main Single-Page App Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenPreOrder={() => setIsPreOrderOpen(true)} />

        {/* Dynamic Interactive Menu with Platter Builder */}
        <Menu />

        {/* Beautiful Image Gallery Showcase */}
        <Gallery />

        {/* Reviews Section */}
        <Testimonials />

        {/* Location Section */}
        <Location />
      </main>

      {/* Premium Minimalist Footer */}
      <footer className="bg-charcoal-950 text-charcoal-400 border-t border-charcoal-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: Brand & Vibe */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center text-charcoal-900 shadow-sm font-bold">
                  <Coffee className="w-4.5 h-4.5" />
                </div>
                <span className="font-display font-bold text-lg tracking-tight text-white">
                  Golden <span className="text-gold-500">Bakery</span>
                </span>
              </div>
              <p className="font-sans text-xs text-charcoal-400 max-w-sm leading-relaxed">
                Brewing hot ginger cardamom tea and baking flaky golden puffs every single afternoon since 2012 in the serene hills of Mlamala. Quality and local trust is our ingredient.
              </p>
              <div className="flex space-x-4 text-charcoal-500 pt-2">
                <a href="#" className="hover:text-gold-400 transition-colors" aria-label="Facebook Link">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-gold-400 transition-colors" aria-label="Instagram Link">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3 space-y-4 text-left">
              <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider">Quick Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#home" className="hover:text-gold-400 transition-colors">Home Page</a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-gold-400 transition-colors">Our Menu</a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-gold-400 transition-colors">Image Gallery</a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-gold-400 transition-colors">Testimonials</a>
                </li>
                <li>
                  <a href="#location" className="hover:text-gold-400 transition-colors font-semibold text-gold-500">Find SN School Road</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Hours & Quick Contact */}
            <div className="md:col-span-4 space-y-4 text-left">
              <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider">Fresh Timing</h4>
              <p className="font-sans text-xs text-charcoal-300 leading-relaxed">
                Our kitchen opens daily at <strong>1:00 PM</strong>. Fresh hot vadas and baked puffs are taken out of the griddle at exactly <strong>3:00 PM</strong>. We close at <strong>8:30 PM</strong>.
              </p>
              <p className="font-sans text-xs text-gold-400 font-semibold">
                Tel: +91 62351 60831
              </p>
            </div>

          </div>

          {/* Bottom Copyright Block */}
          <div className="mt-12 pt-8 border-t border-charcoal-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-[11px] text-charcoal-500">
              © {new Date().getFullYear()} Golden Bakery. Handcrafted in Vandiperiyar, Peermade, Idukki, Kerala. All rights reserved.
            </p>
            <p className="font-sans text-[10px] text-charcoal-500 flex items-center space-x-1">
              <span>Authentic High-Range Bakery Experience</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-800 flex items-center justify-center shadow-lg transition-all cursor-pointer active:scale-95 border border-gold-400/30"
          aria-label="Scroll to top"
          id="scroll-to-top-button"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Pre-Order & Bulk Inquiry Modal */}
      <PreOrderModal isOpen={isPreOrderOpen} onClose={() => setIsPreOrderOpen(false)} />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
