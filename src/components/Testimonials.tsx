import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  date: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Joyal Mathew',
    role: 'Regular Patron / High Range Driver',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    quote: "Nothing matches the Golden Bakery vibe. Their ginger Special Tea at 3:30 PM with hot crispy Pazham Pori is heaven after a long drive around the Mlamala tea plantations. A daily ritual for many of us!",
    date: 'Yesterday'
  },
  {
    id: 't-2',
    name: 'Priya Narayanan',
    role: 'SN Public School Teacher',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    quote: "As teachers at the nearby school, we count down the minutes to 3:00 PM! The aroma of fresh baked egg puffs and golden hot uzhunnu vadas wafting down SN School road is irresistible. Clean, authentic, and delicious.",
    date: '2 weeks ago'
  },
  {
    id: 't-3',
    name: 'Abby Abraham',
    role: 'Kochi Traveler',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    quote: "Stopped here during our weekend drive to Vandiperiyar. The light, flaky texture of their vegetable puff pastries is unbelievable—rivaling high-end city cafes at a fraction of the cost. Must-visit local gem!",
    date: '3 weeks ago'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealRef, isRevealed] = useScrollReveal();

  // Auto-rotate every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <section
      id="testimonials"
      ref={revealRef as any}
      className={`py-20 bg-transparent border-t border-cream-200/40 relative overflow-hidden reveal-hidden ${isRevealed ? 'reveal-visible' : ''}`}
    >
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-gold-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-xs font-bold font-sans uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Local Reviews</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal-800 tracking-tight">
            Loved by Mlamala Locals
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full" />
          <p className="font-sans text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Don't just take our word for it. Here is what school teachers, high-range plantation drivers, and travelers have to say about their afternoon tea-time experiences.
          </p>
        </div>

        {/* Carousel / Slider Display */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Card Frame utilizing Frosted Glass */}
          <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-[32px] p-8 sm:p-12 shadow-xl overflow-hidden min-h-[340px] flex flex-col justify-between">
            
            {/* Quote watermark icon */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-gold-500/5 select-none pointer-events-none" />

            <div className="space-y-6">
              {/* Stars Rating and Header */}
              <div className="flex items-center space-x-1">
                {[...Array(TESTIMONIALS_DATA[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Quote Statement */}
              <blockquote className="font-sans text-base sm:text-lg text-charcoal-700 font-medium italic leading-relaxed relative z-10">
                "{TESTIMONIALS_DATA[currentIndex].quote}"
              </blockquote>
            </div>

            {/* Testimonial Author Block */}
            <div className="flex items-center justify-between pt-6 border-t border-cream-200/50 mt-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-white bg-cream-100 shadow-sm shrink-0">
                  <img
                    src={TESTIMONIALS_DATA[currentIndex].avatar}
                    alt={TESTIMONIALS_DATA[currentIndex].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-charcoal-800">
                    {TESTIMONIALS_DATA[currentIndex].name}
                  </h4>
                  <p className="font-sans text-xs text-charcoal-500 font-medium">
                    {TESTIMONIALS_DATA[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Date Badge */}
              <span className="hidden sm:inline-block px-2.5 py-1 rounded-lg bg-white/60 backdrop-blur-sm border border-white/50 font-sans text-[10px] font-semibold text-charcoal-500">
                {TESTIMONIALS_DATA[currentIndex].date}
              </span>
            </div>

          </div>

          {/* Left / Right Carousel Arrow Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 lg:-left-12 z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-cream-200 hover:border-gold-500 text-charcoal-800 flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-900 transition-all cursor-pointer shadow-lg active:scale-95 focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 lg:-right-12 z-20">
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-cream-200 hover:border-gold-500 text-charcoal-800 flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-900 transition-all cursor-pointer shadow-lg active:scale-95 focus:outline-none"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Slides indicator dots */}
        <div className="flex justify-center space-x-2.5 mt-8">
          {TESTIMONIALS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index ? 'w-8 bg-gold-500' : 'w-2.5 bg-charcoal-200 hover:bg-charcoal-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
