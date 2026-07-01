import { useState, useEffect } from 'react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  Plus, 
  Minus, 
  ShoppingBag, 
  Flame, 
  CheckCircle2, 
  TrendingUp,
  ChevronRight,
  Sparkles,
  Coffee,
  UtensilsCrossed
} from 'lucide-react';

type MenuCategory = 'all' | 'drinks' | 'snacks' | 'bakery';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [platter, setPlatter] = useState<Record<string, number>>({});
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [revealRef, isRevealed] = useScrollReveal();
  const [isLoading, setIsLoading] = useState(true);

  // Simulated content initialization / loading feedback
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // Filter items based on active category selection
  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  // Platter Builder Functions
  const addToPlatter = (itemId: string) => {
    setPlatter(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromPlatter = (itemId: string) => {
    if (!platter[itemId]) return;
    setPlatter(prev => {
      const updated = { ...prev };
      if (updated[itemId] === 1) {
        delete updated[itemId];
      } else {
        updated[itemId]--;
      }
      return updated;
    });
  };

  const clearPlatter = () => {
    setPlatter({});
  };

  // Compute Platter Stats
  const platterItems = Object.entries(platter).map(([id, quantity]) => {
    const item = MENU_ITEMS.find(m => m.id === id);
    const quantityNum = Number(quantity);
    return {
      item,
      quantity: quantityNum,
      totalPrice: item ? item.price * quantityNum : 0
    };
  }).filter(entry => entry.item !== undefined) as { item: MenuItem; quantity: number; totalPrice: number }[];

  const platterSubtotal = platterItems.reduce((acc, entry) => acc + entry.totalPrice, 0);
  const platterTotalCount = platterItems.reduce((acc, entry) => acc + entry.quantity, 0);

  const triggerCopyNotice = (itemName: string) => {
    setCopiedItem(itemName);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section
      id="menu"
      ref={revealRef as any}
      className={`py-12 md:py-20 bg-transparent relative reveal-hidden ${isRevealed ? 'reveal-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-gold-100 text-gold-800 px-3.5 py-1.5 rounded-full text-xs font-bold font-sans uppercase tracking-widest shadow-sm animate-float">
            <Flame className="w-3.5 h-3.5 fill-current animate-pulse text-gold-600" />
            <span>Afternoon Batch</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-charcoal-800 tracking-tight leading-tight">
            Our Afternoon Menu
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full" />
          <p className="font-sans text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Every bite is prepared fresh using pure ingredients. Handcrafted at our griddle daily near SN Public school, Mlamala.
          </p>
        </div>

        {/* Categories Tab Toggles */}
        <div className="bg-white/30 backdrop-blur-md p-2 rounded-2xl border border-white/40 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-12 shadow-sm" id="menu-category-tabs">
          {[
            { id: 'all', label: 'All Items', icon: <UtensilsCrossed className="w-4 h-4" /> },
            { id: 'drinks', label: 'Drinks', icon: <Coffee className="w-4 h-4" /> },
            { id: 'snacks', label: 'Snacks & Vadas', icon: <Flame className="w-4 h-4" /> },
            { id: 'bakery', label: 'Bakery Specials', icon: <Sparkles className="w-4 h-4" /> }
          ].map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as MenuCategory)}
              className={`inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-sans font-bold text-sm transition-all duration-300 cursor-pointer active:scale-95 hover:scale-105 hover:shadow-[0_8px_20px_-4px_rgba(212,175,55,0.25),inset_0_0_12px_rgba(212,175,55,0.4)] hover:border-gold-400 ${
                selectedCategory === category.id
                  ? 'bg-gold-500 text-charcoal-900 border border-gold-400 shadow-md transform -translate-y-0.5'
                  : 'bg-white/40 backdrop-blur-sm border border-white/40 text-charcoal-600 hover:bg-gold-500 hover:text-charcoal-900'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic CSS Grid Menu Displays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {isLoading ? (
            Array.from({ length: selectedCategory === 'all' ? 8 : 4 }).map((_, idx) => (
              <div
                key={`menu-skeleton-${idx}`}
                className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl overflow-hidden p-2 flex flex-col justify-between space-y-4 animate-pulse h-[400px]"
              >
                <div className="relative h-48 w-full bg-cream-200/50 rounded-2xl" />
                <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="h-5 bg-cream-200/60 rounded-lg w-3/4" />
                    <div className="space-y-1.5">
                      <div className="h-3 bg-cream-200/40 rounded w-full" />
                      <div className="h-3 bg-cream-200/40 rounded w-5/6" />
                    </div>
                  </div>
                  <div className="h-9 bg-cream-200/60 rounded-xl w-full" />
                </div>
              </div>
            ))
          ) : (
            filteredItems.map((item, index) => {
              const platterCount = platter[item.id] || 0;
              return (
                <div
                  key={item.id}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'both'
                  }}
                  className="animate-fade-in-up group relative bg-white/40 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/90 rounded-3xl overflow-hidden transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_0_rgba(212,175,55,0.15)] flex flex-col justify-between"
                  id={`menu-card-${item.id}`}
                >
                  {/* Image and Badge Area */}
                  <div className="relative h-48 w-full overflow-hidden bg-cream-100/40">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle Steam Effect for Fresh Hot Items */}
                    {(item.tag === 'Crispy & Hot' || item.tag === 'Sweet Delight' || item.tag === 'Signature Bake' || item.tag === 'Spicy Bite' || item.tag === 'Fresh Brewed') && (
                      <div className="absolute inset-x-0 bottom-0 pointer-events-none flex items-end justify-center pb-6 opacity-30 group-hover:opacity-75 transition-opacity z-10">
                        <div className="flex space-x-2 select-none">
                          <div className="w-0.5 bg-gradient-to-t from-white/30 to-transparent rounded-full h-12 steam-particle filter blur-[1.5px]" style={{ animationDelay: '0s' }} />
                          <div className="w-1 bg-gradient-to-t from-white/20 to-transparent rounded-full h-16 steam-particle filter blur-[2px]" style={{ animationDelay: '0.7s' }} />
                          <div className="w-0.5 bg-gradient-to-t from-white/30 to-transparent rounded-full h-14 steam-particle filter blur-[1.5px]" style={{ animationDelay: '1.4s' }} />
                        </div>
                      </div>
                    )}
                    
                    {/* Item Category/Tags Badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                      {item.tag && (
                        <span className="bg-charcoal-800/80 backdrop-blur-md text-gold-300 text-[10px] font-bold font-sans px-2.5 py-1 rounded-lg uppercase tracking-wider">
                          {item.tag}
                        </span>
                      )}
                      {item.isVegetarian && (
                        <span className="bg-emerald-500/90 backdrop-blur-md text-white text-[9px] font-bold font-sans px-2 py-0.5 rounded-md flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
                          <span>VEG</span>
                        </span>
                      )}
                    </div>

                    {/* Gourmet Gold Stamp Overlay */}
                    {item.id === 'layered-puffs' && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-gold-500 text-charcoal-900 text-[9px] font-extrabold font-display px-2.5 py-1 rounded-xl uppercase tracking-widest shadow-md flex items-center gap-1 border border-amber-400/30 z-10 animate-pulse-slow">
                        <span>★</span>
                        <span>BESTSELLER</span>
                      </div>
                    )}

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-2xl shadow-md border border-cream-100 font-display font-bold text-charcoal-800 text-base flex items-center gap-0.5">
                      <span className="text-xs font-normal text-charcoal-500">₹</span>
                      <span>{item.price}</span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="font-display font-bold text-lg text-charcoal-800 group-hover:text-gold-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-charcoal-500 leading-relaxed min-h-[44px]">
                        {item.description}
                      </p>

                      {/* Food Specific Specs */}
                      {item.ingredients && item.ingredients.length > 0 && (
                        <div className="space-y-1 text-left">
                          <p className="text-[9px] uppercase font-bold tracking-wider text-charcoal-400">Ingredients</p>
                          <div className="flex flex-wrap gap-1">
                            {item.ingredients.map((ing, i) => (
                              <span key={i} className="text-[9px] bg-amber-50/80 text-amber-900 font-sans font-medium px-2 py-0.5 rounded-md border border-amber-200/40">
                                {ing}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Flavor indicators and pairings */}
                      <div className="pt-1 flex flex-col gap-1.5 text-left">
                        {(item.spicyLevel !== undefined || item.sweetness !== undefined) && (
                          <div className="flex items-center space-x-3 text-[10.5px]">
                            {item.spicyLevel !== undefined && (
                              <div className="flex items-center space-x-1">
                                <span className="font-semibold text-charcoal-500">Spice:</span>
                                <span className="flex">
                                  {Array.from({ length: 3 }).map((_, i) => (
                                    <span key={i} className={`text-xs ${i < item.spicyLevel! ? 'opacity-100 scale-110' : 'opacity-25 grayscale'}`} title={`${item.spicyLevel}/3 Spicy`}>🌶️</span>
                                  ))}
                                </span>
                              </div>
                            )}
                            {item.sweetness !== undefined && (
                              <div className="flex items-center space-x-1">
                                <span className="font-semibold text-charcoal-500">Sweetness:</span>
                                <span className="flex">
                                  {Array.from({ length: 3 }).map((_, i) => (
                                    <span key={i} className={`text-xs ${i < item.sweetness! ? 'opacity-100 scale-110' : 'opacity-25 grayscale'}`} title={`${item.sweetness}/3 Sweet`}>🔥</span>
                                  ))}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {item.pairing && (
                          <div className="text-[10px] text-emerald-800 bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-500/10 py-1 px-2 rounded-xl flex items-center gap-1.5 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="font-bold shrink-0">Best Pair:</span>
                            <span className="font-sans font-medium truncate">{item.pairing}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Add To Platter Action Button */}
                    <div className="pt-3 flex items-center justify-between gap-2 border-t border-cream-100/80">
                      <button
                        onClick={() => triggerCopyNotice(item.name)}
                        className="font-sans font-bold text-xs text-gold-700 hover:text-charcoal-800 transition-colors cursor-pointer"
                      >
                        {copiedItem === item.name ? 'Link Ready!' : 'Recipe Info'}
                      </button>
                      
                      {platterCount > 0 ? (
                        <div className="flex items-center space-x-2 bg-gold-100 border border-gold-200 rounded-xl p-1 animate-scale-up">
                          <button
                            onClick={() => removeFromPlatter(item.id)}
                            className="w-7 h-7 rounded-lg bg-white text-charcoal-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors cursor-pointer focus:outline-none active:scale-90"
                            aria-label="Remove item"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-sans font-bold text-sm text-charcoal-800 w-5 text-center">
                            {platterCount}
                          </span>
                          <button
                            onClick={() => addToPlatter(item.id)}
                            className="w-7 h-7 rounded-lg bg-white text-charcoal-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors cursor-pointer focus:outline-none active:scale-90"
                            aria-label="Add item"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToPlatter(item.id)}
                          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cream-50 border border-cream-200 text-charcoal-800 font-sans font-semibold text-xs hover:border-gold-500 hover:bg-gold-50 hover:text-gold-700 transition-all duration-200 active:scale-95 active:rotate-1 cursor-pointer focus:outline-none"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add To Platter</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Copy confirmation dialog */}
        {copiedItem && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-charcoal-950 text-white font-sans text-xs py-3 px-6 rounded-2xl shadow-2xl border border-white/10 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Interested in {copiedItem}? Ask us about our preparation daily at 3:00 PM!</span>
          </div>
        )}

        {/* Interactive Platter Builder Showcase Drawer (Only visible if item added) */}
        <div 
          id="platter-builder" 
          className={`mt-16 bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 ${
            platterTotalCount > 0 ? 'opacity-100 scale-100 max-h-[1000px] p-6 sm:p-8' : 'opacity-60 max-h-[100px] overflow-hidden p-6 text-center border-dashed border-white/40'
          }`}
        >
          {platterTotalCount > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Platter Left Info */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="inline-flex items-center space-x-1.5 text-gold-700 bg-white/50 backdrop-blur-md border border-white/60 px-3 py-1 rounded-xl shadow-sm">
                  <ShoppingBag className="w-4 h-4" />
                  <span className="font-sans font-bold text-xs uppercase tracking-wider">Your Hot Tea Platter</span>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-charcoal-800 leading-tight">
                  Ready to experience Golden Bakery?
                </h3>
                
                <p className="font-sans text-sm text-charcoal-600 leading-relaxed">
                  You have assembled <strong className="text-charcoal-800">{platterTotalCount} local delicacies</strong> on your virtual serving tray. Bring this selection when you stop by near SN Public school, and we'll plate them fresh, crisp, and piping hot for you!
                </p>

                <div className="pt-2">
                  <div className="flex items-center space-x-2 text-xs text-emerald-600 font-semibold bg-white/40 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-3 max-w-sm">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>No pre-payment required. Pay on pick-up using Cash or UPI.</span>
                  </div>
                </div>
              </div>

              {/* Platter Middle Dynamic List */}
              <div className="lg:col-span-4 bg-white/30 backdrop-blur-md rounded-2xl p-5 border border-white/55 max-h-56 overflow-y-auto space-y-3 text-left">
                <div className="flex items-center justify-between border-b border-cream-200 pb-2">
                  <span className="font-sans font-bold text-xs text-charcoal-500 uppercase tracking-wide">Platter Items</span>
                  <button 
                    onClick={clearPlatter}
                    className="font-sans font-bold text-xs text-rose-600 hover:text-rose-800 transition-colors cursor-pointer"
                  >
                    Clear Platter
                  </button>
                </div>
                
                {platterItems.map(({ item, quantity, totalPrice }) => (
                  <div key={item.id} className="flex items-center justify-between text-sm py-1">
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex w-5.5 h-5.5 items-center justify-center rounded bg-gold-100 text-gold-800 text-[10px] font-extrabold">
                        {quantity}x
                      </span>
                      <span className="font-sans font-semibold text-charcoal-800 truncate max-w-[150px]">{item.name}</span>
                    </div>
                    <span className="font-display font-bold text-charcoal-700">₹{totalPrice}</span>
                  </div>
                ))}
              </div>

              {/* Platter Right Checkout Panel */}
              <div className="lg:col-span-3 text-center lg:text-left bg-charcoal-800 text-cream-50 p-6 rounded-2xl flex flex-col justify-between h-full space-y-6">
                <div>
                  <p className="font-sans text-xs text-gold-300 font-semibold uppercase tracking-wider">Estimated Bill</p>
                  <p className="font-display font-extrabold text-4xl text-white mt-1">
                    ₹{platterSubtotal}
                  </p>
                  <p className="font-sans text-[10px] text-cream-200/70 mt-1">Includes traditional fresh brewing.</p>
                </div>

                <a
                  href="tel:+916235160831"
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-800 font-sans font-bold text-sm transition-all duration-300 cursor-pointer shadow-md active:scale-95 group"
                >
                  <span>Order via Phone</span>
                  <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ) : (
            <div className="py-6 flex flex-col items-center space-y-3">
              <ShoppingBag className="w-8 h-8 text-charcoal-300 animate-bounce" />
              <p className="font-sans text-sm text-charcoal-500">
                Tap <strong className="text-charcoal-700">"Add To Platter"</strong> on any menu card to build your virtual afternoon snack plate!
              </p>
              <div className="flex items-center space-x-1.5 text-[11px] text-gold-600 font-semibold bg-gold-50 px-3 py-1 rounded-full border border-gold-100">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Special Tea + Pazham Pori combination is highly recommended today!</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
