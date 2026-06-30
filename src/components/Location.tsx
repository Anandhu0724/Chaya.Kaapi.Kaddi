import { useState } from 'react';
import { LOCATION_INFO } from '../data';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Copy, 
  Check, 
  Navigation, 
  Plus, 
  Minus, 
  Info, 
  Compass,
  Milestone,
  Trees
} from 'lucide-react';

export default function Location() {
  const [zoomLevel, setZoomLevel] = useState<number>(1.2);
  const [activeLayer, setActiveLayer] = useState<'all' | 'schools' | 'estates'>('all');
  const [isAddressCopied, setIsAddressCopied] = useState(false);

  // Map limits
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2.0));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.8));
  };

  // Copy full location details to clipboard
  const handleCopyAddress = () => {
    const fullText = `${LOCATION_INFO.name}, ${LOCATION_INFO.landmark}, ${LOCATION_INFO.address}, Pincode: ${LOCATION_INFO.pincode}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setIsAddressCopied(true);
      setTimeout(() => setIsAddressCopied(false), 2000);
    });
  };

  return (
    <section id="location" className="py-20 bg-charcoal-900 text-cream-50 relative overflow-hidden">
      {/* Background design accents */}
      <div className="absolute top-1/10 left-3/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/10 left-1/10 w-96 h-96 bg-charcoal-800/60 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official Location Info in deep-contrast */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 px-3.5 py-1.5 rounded-xl">
                <Compass className="w-4.5 h-4.5 text-gold-400 animate-spin-slow" />
                <span className="font-sans font-bold text-xs text-gold-400 tracking-wider uppercase">Find Us</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Our Little Spot in Idukki
              </h2>
              <div className="w-12 h-1 bg-gold-500 rounded-full" />
            </div>

            {/* Pulsing Open Status Bar */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4.5 rounded-2xl flex items-center justify-between shadow-md">
              <div className="flex items-center space-x-3.5">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </span>
                <div>
                  <p className="font-sans font-bold text-sm text-white">We are Open Today</p>
                  <p className="font-sans text-xs text-charcoal-300">Fresh bakes ready to serve</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display font-bold text-sm text-gold-400">1:00 PM - 8:30 PM</p>
                <p className="font-sans text-[10px] text-charcoal-400">Indian Standard Time</p>
              </div>
            </div>

            {/* Address Layout Frame - 100% Strict Accuracy */}
            <div className="space-y-6 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-3 flex-grow">
                  <h4 className="font-sans font-bold text-xs text-gold-400 uppercase tracking-wider">Official Location Address</h4>
                  
                  {/* Full Exact Requested Geolocational Text String */}
                  <p className="font-sans text-sm sm:text-base text-cream-100 leading-relaxed font-semibold">
                    <span className="text-white font-extrabold text-lg block font-display mb-1">Golden Bakery</span>
                    Near SN Public school, Mlamala, Thengakal P.O, Vandiperiyar, Peermade Sub District, Idukki, Pincode: <span className="font-mono text-gold-300 font-bold">685533</span>.
                  </p>
                </div>
              </div>

              {/* Extra details (Hours & phone) */}
              <div className="pt-4 border-t border-charcoal-850 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2.5 text-xs text-charcoal-300">
                  <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>{LOCATION_INFO.hours}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-charcoal-300">
                  <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>{LOCATION_INFO.phone}</span>
                </div>
              </div>
            </div>

            {/* Dual Actions: Copy address & simulated GPS triggers */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-charcoal-800 border border-charcoal-700 hover:border-gold-500 text-cream-50 hover:text-gold-400 font-sans font-semibold text-xs transition-all duration-300 cursor-pointer active:scale-95"
              >
                {isAddressCopied ? (
                  <>
                    <Check className="w-4.5 h-4.5 mr-2 text-emerald-400" />
                    <span>Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4.5 h-4.5 mr-2 text-gold-500" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent('Golden Bakery Near SN Public school Mlamala Thengakal P.O Vandiperiyar Peermade Idukki 685533')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-sans font-extrabold text-xs transition-all duration-300 cursor-pointer active:scale-95 shadow-md"
              >
                <Navigation className="w-4 h-4 mr-2 animate-bounce" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Craft Interactive Simulated Map Card */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-4.5 sm:p-6 shadow-2xl relative">
              
              {/* Map Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 pb-3 border-b border-charcoal-700/60">
                <div>
                  <h3 className="font-display font-bold text-white text-base">Mlamala Local Map Guide</h3>
                  <p className="font-sans text-[11px] text-charcoal-400">Interactive localized routing viewport</p>
                </div>

                {/* Layer selector pills */}
                <div className="flex bg-charcoal-900/60 p-1 rounded-xl border border-charcoal-700">
                  {[
                    { id: 'all', label: 'All View' },
                    { id: 'schools', label: 'School' },
                    { id: 'estates', label: 'Tea Estate' }
                  ].map(layer => (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-sans font-bold transition-all cursor-pointer ${
                        activeLayer === layer.id
                          ? 'bg-gold-500 text-charcoal-900'
                          : 'text-charcoal-400 hover:text-white'
                      }`}
                    >
                      {layer.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Styled Interactive SVG Vector Map Frame */}
              <div className="relative h-80 sm:h-96 w-full rounded-2xl bg-charcoal-950 overflow-hidden border border-charcoal-900 flex items-center justify-center">
                
                {/* SVG Vector Map Canvas wrapper */}
                <div 
                  className="absolute inset-0 transition-transform duration-500 origin-center flex items-center justify-center"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <svg 
                    viewBox="0 0 500 400" 
                    className="w-[500px] h-[400px] select-none text-charcoal-700"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Grid Pattern */}
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222222" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Mlamala River/Water Stream */}
                    <path 
                      d="M -50,50 Q 150,120 280,30 T 550,80" 
                      fill="none" 
                      stroke="#1e3a5f" 
                      strokeWidth="20" 
                      strokeLinecap="round" 
                      opacity="0.4"
                    />
                    <text x="310" y="55" fill="#3b82f6" fontSize="9" className="font-mono italic font-bold select-none" opacity="0.5">Periyar Water Stream</text>

                    {/* Road Network Vectors */}
                    {/* Vandiperiyar Main Road */}
                    <path 
                      d="M 50,-50 L 150,450" 
                      fill="none" 
                      stroke="#444444" 
                      strokeWidth="10" 
                      strokeLinecap="round" 
                    />
                    <text x="75" y="180" fill="#888888" fontSize="8" transform="rotate(76 75 180)" className="font-sans font-bold">Vandiperiyar Road</text>

                    {/* Mlamala Branch Road */}
                    <path 
                      d="M 120,120 C 220,130 280,220 480,240" 
                      fill="none" 
                      stroke="#555555" 
                      strokeWidth="8" 
                      strokeLinecap="round" 
                    />
                    <text x="210" y="165" fill="#888888" fontSize="8" transform="rotate(12 210 165)" className="font-sans font-bold">Mlamala Road</text>

                    {/* School link path */}
                    <path 
                      d="M 280,220 L 280,320" 
                      fill="none" 
                      stroke="#333333" 
                      strokeWidth="6" 
                      strokeDasharray="4 4"
                    />

                    {/* LANDMARKS LAYERS */}
                    
                    {/* SN Public School (visible when all or schools) */}
                    {(activeLayer === 'all' || activeLayer === 'schools') && (
                      <g className="transition-opacity duration-300">
                        <circle cx="280" cy="320" r="14" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                        <rect x="272" y="312" width="16" height="16" fill="#f59e0b" rx="2" opacity="0.3" />
                        <text x="280" y="323" fill="#ffffff" fontSize="8" textAnchor="middle" className="font-sans font-bold">SN</text>
                        {/* Text Label */}
                        <rect x="210" y="342" width="140" height="18" fill="#0f172a" rx="6" stroke="#334155" strokeWidth="1" />
                        <text x="280" y="354" fill="#cbd5e1" fontSize="8" textAnchor="middle" className="font-sans font-semibold">SN Public School (Landmark)</text>
                      </g>
                    )}

                    {/* Tea Estate Plots (visible when all or estates) */}
                    {(activeLayer === 'all' || activeLayer === 'estates') && (
                      <g className="transition-opacity duration-300">
                        {/* Plantation plot 1 */}
                        <polygon points="350,60 460,70 420,160 330,130" fill="#064e3b" opacity="0.25" stroke="#047857" strokeWidth="1" />
                        <text x="390" y="105" fill="#059669" fontSize="8" textAnchor="middle" className="font-sans font-bold">Mlamala Tea Gardens</text>
                        
                        {/* Plantation plot 2 */}
                        <polygon points="20,250 110,240 90,320 10,310" fill="#064e3b" opacity="0.2" stroke="#047857" strokeWidth="1" />
                        <text x="50" y="285" fill="#059669" fontSize="7" textAnchor="middle" className="font-sans">Cardamom Plot</text>
                      </g>
                    )}

                    {/* Golden Bakery Target Marker - ALWAYS visible */}
                    <g className="cursor-pointer">
                      {/* Active target pulsing rings */}
                      <circle cx="265" cy="205" r="24" fill="#d4af37" opacity="0.15">
                        <animate attributeName="r" values="12;28;12" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="265" cy="205" r="14" fill="#d4af37" opacity="0.3" />
                      {/* Base pin */}
                      <circle cx="265" cy="205" r="6" fill="#d4af37" stroke="#ffffff" strokeWidth="1.5" />
                      
                      {/* Visual Callout bubble */}
                      <g transform="translate(195, 125)">
                        <rect width="140" height="42" fill="#d4af37" rx="12" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.4))" />
                        <polygon points="70,42 64,48 76,48" fill="#d4af37" />
                        <text x="70" y="18" fill="#1c1c1c" fontSize="10" textAnchor="middle" className="font-display font-extrabold">GOLDEN BAKERY</text>
                        <text x="70" y="32" fill="#4b380e" fontSize="7.5" textAnchor="middle" className="font-sans font-bold">Hot Chai & Snacks Ready</text>
                      </g>
                    </g>

                    {/* Route arrow indicator */}
                    <path 
                      d="M 125,212 Q 195,212 250,206" 
                      fill="none" 
                      stroke="#d4af37" 
                      strokeWidth="3" 
                      strokeDasharray="5 3" 
                      markerEnd="url(#arrow)"
                    />
                  </svg>
                </div>

                {/* Compass HUD Accent */}
                <div className="absolute top-4 left-4 bg-charcoal-900/80 backdrop-blur-md p-2 rounded-xl border border-charcoal-700/60 text-charcoal-400 font-mono text-[9px] flex items-center space-x-2">
                  <Compass className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
                  <span>GPS: 9.6105° N, 77.0863° E</span>
                </div>

                {/* Map Interactive Zoom Widget Controls */}
                <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                  <button 
                    onClick={handleZoomIn}
                    className="w-10 h-10 rounded-xl bg-charcoal-900/95 border border-charcoal-700/60 hover:border-gold-500 text-white flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-900 transition-all cursor-pointer shadow-md"
                    aria-label="Zoom Map In"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleZoomOut}
                    className="w-10 h-10 rounded-xl bg-charcoal-900/95 border border-charcoal-700/60 hover:border-gold-500 text-white flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-900 transition-all cursor-pointer shadow-md"
                    aria-label="Zoom Map Out"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                </div>

                {/* Landmark Notice Card */}
                <div className="absolute bottom-4 left-4 max-w-xs bg-charcoal-900/90 backdrop-blur-md border border-charcoal-800 p-3 rounded-xl flex items-start space-x-2.5">
                  <Info className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-[10px] text-charcoal-300 leading-tight">
                    We are located on Mlamala road, just a short walk past <strong>SN Public school</strong>. High range tea estate trails border our north boundary.
                  </p>
                </div>

              </div>

              {/* Distances Estimates Dashboard */}
              <div className="mt-4.5 grid grid-cols-3 gap-3">
                {[
                  { place: 'Vandiperiyar Town', time: '8 mins', dist: '4.2 km' },
                  { place: 'Thengakal', time: '4 mins', dist: '2.1 km' },
                  { place: 'Peermade Subdt.', time: '25 mins', dist: '16 km' }
                ].map((route, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-3 rounded-xl text-center">
                    <p className="font-sans text-[9px] text-charcoal-300 font-bold uppercase truncate">{route.place}</p>
                    <p className="font-display font-extrabold text-sm text-gold-400 mt-0.5">{route.time}</p>
                    <p className="font-sans text-[9px] text-charcoal-400">{route.dist}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
