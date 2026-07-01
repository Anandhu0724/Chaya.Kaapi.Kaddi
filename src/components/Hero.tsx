import { Coffee, ArrowRight, MapPin, Sparkles, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeroProps {
  onOpenPreOrder?: () => void;
}

export default function Hero({ onOpenPreOrder }: HeroProps) {
  const [revealRef, isRevealed] = useScrollReveal();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section
      id="home"
      ref={revealRef as any}
      className={`relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-transparent reveal-hidden ${
        isRevealed ? 'reveal-visible' : ''
      }`}
    >
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/10 w-80 h-80 bg-gold-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Badge */}
            <span className="inline-block text-xs font-bold tracking-widest text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full mb-4">
              ✨ THE AUTHENTIC TASTE OF MLAMALA HIGH RANGES
            </span>

            {/* Main Header Typographic Layout */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
              <span className="text-caramel block">Hot Chai,</span>
              <span className="text-charcoal-900">Perfect Coffee</span>
              <span className="text-charcoal-900"> & </span>
              <span className="text-gold-600 relative inline-block">
                Crispy Kadiyan
                <span className="absolute left-0 bottom-2 w-full h-3 bg-gold-200/50 -z-10 rounded-full"></span>
              </span>
            </h1>

            {/* Subtitle highlighting fresh afternoon prep */}
            <p className="font-sans text-base sm:text-lg text-charcoal-600 max-w-xl leading-relaxed">
              Experience the genuine warmth of Golden Bakery. Our legendary tea-time snacks and vadas are freshly prepared by hand every single afternoon in Mlamala. We open the hot oil griddle at 3:00 PM daily—catch the crispy, steaming-hot batches right as they arrive!
            </p>

            {/* Dual Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection('menu')}
                className="group inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-charcoal-800 text-cream-50 font-sans font-bold text-base hover:bg-gold-500 hover:text-charcoal-800 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4),inset_0_0_12px_rgba(212,175,55,0.4)] cursor-pointer active:scale-98"
                id="hero-explore-menu"
              >
                Explore Menu
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <a
                href="tel:+916235160831"
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl border-2 border-charcoal-200 bg-white/40 backdrop-blur-sm text-charcoal-800 font-sans font-bold text-base hover:border-gold-500 hover:bg-white hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.2),inset_0_0_10px_rgba(212,175,55,0.15)] transition-all duration-300 cursor-pointer active:scale-98"
                id="hero-get-directions"
              >
                <MapPin className="w-5 h-5 mr-2 text-gold-500" />
                Get Directions
              </a>
            </div>

            {/* Tertiary Bulk Order Trigger */}
            <div className="pt-1 text-left">
              <button
                onClick={onOpenPreOrder}
                className="inline-flex items-center space-x-1.5 font-sans font-bold text-xs text-charcoal-700 hover:text-gold-600 transition-colors cursor-pointer group focus:outline-none"
              >
                <span>Planning an event or tea party? Pre-order in bulk</span>
                <span className="text-gold-500 group-hover:translate-x-1 transition-transform inline-block font-sans font-bold">→</span>
              </button>
            </div>

            {/* Fast Stats / High Value Points */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-cream-200/80 max-w-lg">
              <div>
                <p className="font-display font-bold text-2xl sm:text-3xl text-charcoal-800">3:00<span className="text-gold-500">PM</span></p>
                <p className="font-sans text-xs text-charcoal-500 font-medium">Fresh Hot Batches</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl sm:text-3xl text-charcoal-800">₹12<span className="text-gold-500">+</span></p>
                <p className="font-sans text-xs text-charcoal-500 font-medium">Traditional Prices</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl sm:text-3xl text-charcoal-800">100<span className="text-gold-500">%</span></p>
                <p className="font-sans text-xs text-charcoal-500 font-medium">Daily Fresh Prep</p>
              </div>
            </div>

          </div>

          {/* Right Hero Column - Interactive Floating Mockup */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            
            {/* Main Visual Card Container */}
            <div className="relative w-full max-w-sm sm:max-w-md bg-white/60 backdrop-blur-xl rounded-3xl p-5 shadow-2xl border border-white/50 transform hover:scale-[1.01] transition-transform duration-500">
              
              {/* Product Visual Overlay */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-5 bg-cream-100 shadow-inner">
                {/* Ambient looping background video layer */}
                <img
                  src="/kerala-chai-steaming.webp"
                  alt="Authentic South Indian hot tea glass"
                  className="w-full h-full object-cover"
                />

                {/* Ambient smoke/steam effects rising gently from the tea */}
                <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-20">
                  <div className="flex space-x-2 select-none">
                    <div className="w-1 bg-gradient-to-t from-white/35 to-transparent rounded-full h-20 steam-particle filter blur-[3px]" style={{ animationDelay: '0s' }} />
                    <div className="w-1.5 bg-gradient-to-t from-white/30 to-transparent rounded-full h-24 steam-particle filter blur-[4px]" style={{ animationDelay: '0.6s' }} />
                    <div className="w-1.2 bg-gradient-to-t from-white/35 to-transparent rounded-full h-18 steam-particle filter blur-[3px]" style={{ animationDelay: '1.2s' }} />
                  </div>
                </div>
                
                {/* Visual Glassmorphic Tag */}
                <div className="absolute top-4 right-4 bg-charcoal-900/80 backdrop-blur-md border border-white/10 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 z-10">
                  <Coffee className="w-4 h-4 text-gold-400" />
                  <span>Now Brewing</span>
                </div>
                
                {/* Visual Bottom Title Block */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-950/90 to-transparent p-4 flex items-end justify-between z-10">
                  <div>
                    <h3 className="font-display font-bold text-white text-lg leading-tight">Our Afternoon Special</h3>
                    <p className="font-sans text-gold-300 text-xs font-medium">Fresh Chai & Crispy Kadiyan combination</p>
                  </div>
                  <span className="font-display font-extrabold text-gold-400 text-lg">₹27</span>
                </div>
              </div>

              {/* Status Indicator Bar - Live, pulsing radiant emerald dot */}
              <div className="bg-white/40 backdrop-blur-md border border-white/55 rounded-2xl p-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="relative flex h-4.5 w-4.5 shrink-0 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-emerald-500/25 animate-pulse"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-sm text-charcoal-800">Daily Batch Status</p>
                    <p className="font-sans text-xs text-charcoal-600">Fresh Vadas & Puffs rolling out!</p>
                  </div>
                </div>
                
                <div className="bg-emerald-100/90 text-emerald-900 px-3 py-1 rounded-xl text-xs font-bold font-sans shadow-sm">
                  ACTIVE NOW
                </div>
              </div>

              {/* Customer Testimonial Bubble */}
              <div className="mt-4 bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-sans font-bold text-xs text-charcoal-800">Joyal Mathew</p>
                  <div className="flex text-gold-500 text-xs">★★★★★</div>
                </div>
                <p className="font-sans text-xs italic text-charcoal-600">
                  "Nothing matches the Golden Bakery vibe. Their ginger Special Tea at 3:30 PM with hot crispy Pazham Pori is heaven after a drive around Mlamala hills."
                </p>
              </div>

            </div>

            {/* Back Ambient Design Accent */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gold-400/10 rounded-2xl -z-10 rotate-12" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-charcoal-800/5 rounded-3xl -z-10 -rotate-12" />
          </div>

        </div>
      </div>
    </section>
  );
}
