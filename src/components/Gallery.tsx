import { useState, useEffect } from 'react';
import { Camera, Maximize2, X, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface GalleryItem {
  id: string;
  title: string;
  category: 'products' | 'interior' | 'process';
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-tea',
    title: 'Pulled Special Tea',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    description: 'Our signatures: piping-hot pulled tea frothed high, blended with crushed mountain ginger.'
  },
  {
    id: 'g-vada',
    title: 'Fresh Crispy Vadas',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    description: 'Black gram and coarse lentil vadas fried fresh at exactly 3:00 PM daily.'
  },
  {
    id: 'g-puffs',
    title: 'Flaky Egg & Veg Puffs',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80',
    description: 'Hundreds of golden, buttery, flaky layers baked with aromatic spiced masala.'
  },
  {
    id: 'g-interior',
    title: 'Cozy Mountain Corner',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    description: 'Where Mlamala locals and travelers stop to rest, recharge, and talk over tea.'
  },
  {
    id: 'g-coffee',
    title: 'Traditional Filter Coffee',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    description: 'Double-filter chicory coffee frothed in traditional brass tumbler sets.'
  },
  {
    id: 'g-brewing',
    title: 'Art of Tea Pulling',
    category: 'process',
    image: 'https://images.unsplash.com/photo-1598062548091-a6fb6ac08299?auto=format&fit=crop&w=800&q=80',
    description: 'The spectacular high pull, mixing fresh dairy milk and spices for robust body.'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'products' | 'interior' | 'process'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [revealRef, isRevealed] = useScrollReveal();
  const [isLoading, setIsLoading] = useState(true);

  // Simulated content initialization / loading feedback
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 550);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section
      id="gallery"
      ref={revealRef as any}
      className={`py-20 bg-transparent relative overflow-hidden border-t border-cream-200/40 reveal-hidden ${isRevealed ? 'reveal-visible' : ''}`}
    >
      {/* Visual background accents */}
      <div className="absolute top-1/3 left-1/10 w-72 h-72 bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-xs font-bold font-sans uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal-800 tracking-tight">
            Our Gallery & Moments
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full" />
          <p className="font-sans text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Take a visual tour of Golden Bakery—from steaming glasses of freshly brewed tea and crispy snacks to our cozy, warm high-range interior ambiance in Mlamala.
          </p>
        </div>

        {/* Gallery Filter Tab Pills */}
        <div className="bg-white/40 backdrop-blur-md p-2 rounded-2xl border border-white/50 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto mb-12 shadow-sm">
          {[
            { id: 'all', label: 'All Photos', icon: <ImageIcon className="w-4 h-4" /> },
            { id: 'products', label: 'Our Products', icon: <Sparkles className="w-4 h-4" /> },
            { id: 'interior', label: 'Bakery Cozy Corner', icon: <Camera className="w-4 h-4" /> },
            { id: 'process', label: 'Preparation', icon: <ImageIcon className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-xl font-sans font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer active:scale-95 ${
                activeCategory === tab.id
                  ? 'bg-charcoal-800 text-cream-50 shadow-md transform -translate-y-0.5'
                  : 'bg-white/40 backdrop-blur-sm border border-white/40 text-charcoal-600 hover:bg-white/85 hover:text-charcoal-800 hover:shadow-sm'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid Layout with dynamic filter & smooth hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {isLoading ? (
            Array.from({ length: activeCategory === 'all' ? 6 : 3 }).map((_, idx) => (
              <div
                key={`gallery-skeleton-${idx}`}
                style={{
                  animationDelay: `${idx * 40}ms`,
                  animationFillMode: 'both'
                }}
                className="animate-fade-in-up relative h-80 rounded-3xl overflow-hidden shadow-sm border border-white/60 bg-white/50 backdrop-blur-md p-2 animate-pulse"
              >
                <div className="relative h-full w-full rounded-2xl bg-cream-200/55 flex flex-col justify-end p-5">
                  <div className="space-y-2 w-3/4 animate-pulse">
                    <div className="h-3 bg-cream-300/40 rounded w-1/3" />
                    <div className="h-5 bg-cream-300/50 rounded-lg w-full" />
                    <div className="h-3 bg-cream-300/40 rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                style={{
                  animationDelay: `${index * 60}ms`,
                  animationFillMode: 'both'
                }}
                className="animate-fade-in-up group relative h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-white/60 bg-white/50 backdrop-blur-md p-2 transition-all duration-500 cursor-zoom-in hover:-translate-y-1"
              >
                <div className="relative h-full w-full rounded-2xl overflow-hidden bg-cream-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Frosted details overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="space-y-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400">
                        {item.category}
                      </span>
                      <h3 className="font-display font-bold text-white text-lg">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-cream-200/90 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Magnifying visual helper badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-charcoal-800 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Maximize2 className="w-4.5 h-4.5" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Lightbox / Dialog Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/85 backdrop-blur-md animate-fade-in">
            {/* Click backdrop to close */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedImage(null)} />
            
            {/* Modal Body */}
            <div className="relative bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl z-10 p-4 flex flex-col sm:flex-row gap-6 animate-scale-up">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-charcoal-900/80 text-white flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-900 transition-colors cursor-pointer z-20 focus:outline-none"
                aria-label="Close dialog"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Image Column */}
              <div className="relative h-64 sm:h-96 w-full sm:w-3/5 rounded-2xl overflow-hidden bg-cream-50 shrink-0">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Details Column */}
              <div className="flex flex-col justify-between py-2 sm:py-4 pr-2">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-1.5 text-gold-700 bg-gold-100 px-2.5 py-1 rounded-lg text-xs font-bold font-sans uppercase tracking-wider">
                    {selectedImage.category}
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl text-charcoal-800 tracking-tight leading-tight">
                    {selectedImage.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-charcoal-600 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-cream-200/80">
                  <p className="font-sans text-xs text-charcoal-500 italic">
                    Stop by our counter near SN Public school, Mlamala to explore fresh afternoon flavors prepared daily.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
