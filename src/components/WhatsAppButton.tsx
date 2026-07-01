import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Show a friendly message hint 800ms after load to engage users on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Keep the tooltip open for 15 seconds to allow full reading and easy interaction
  useEffect(() => {
    if (showTooltip) {
      const dismissTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 15000);
      return () => clearTimeout(dismissTimer);
    }
  }, [showTooltip]);

  const whatsappUrl = "https://wa.me/916235160831?text=Hi%20Golden%20Bakery,%20I'd%20like%20to%20inquire%20about%20today's%20fresh%20snacks!";

  const handleButtonClick = () => {
    setHasInteracted(true);
    setShowTooltip(false);
    // Use window.open with fallback for iframe sandboxing
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-end space-x-3 select-none pointer-events-auto">
      {/* Tooltip speech bubble - Glassmorphic White & Gold Premium Style */}
      <div
        className={`bg-white/70 backdrop-blur-md text-charcoal-800 border border-white/40 shadow-lg px-5 py-4 rounded-2.5xl max-w-xs transition-all duration-500 ease-out flex items-start space-x-3 relative ${
          showTooltip
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-2 scale-90 pointer-events-none'
        }`}
        style={{ transformOrigin: 'bottom left' }}
      >
        <div className="space-y-1">
          <p className="font-display font-extrabold text-xs text-gold-700 tracking-wider uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Quick question?
          </p>
          <p className="font-sans text-[11.5px] text-charcoal-600 leading-relaxed font-medium">
            Tap to message us directly for hot snacks availability or quick pickups!
          </p>
        </div>
        
        {/* Dismiss tooltip button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowTooltip(false);
            setHasInteracted(true);
          }}
          className="text-charcoal-400 hover:text-gold-600 transition-colors p-1 rounded-lg focus:outline-none cursor-pointer"
          aria-label="Dismiss tooltip"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Small pointer tail */}
        <div className="absolute bottom-5 -left-1.5 w-3 h-3 bg-white/70 border-l border-b border-white/40 rotate-45" />
      </div>

      {/* Main Pulse Button */}
      <div className="relative">
        {/* Outer ambient wave pulses to catch eye elegantly */}
        <span className="absolute inset-0 rounded-2xl bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />
        
        <button
          onClick={handleButtonClick}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-none group border border-emerald-400/30"
          title="Chat with us on WhatsApp"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-6 transition-transform duration-300" />
          
          {/* Active online green dot */}
          <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </span>
        </button>
      </div>
    </div>
  );
}
