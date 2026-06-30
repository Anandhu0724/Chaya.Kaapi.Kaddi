import { useEffect, useRef, useState } from 'react';

export function useScrollReveal() {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Avoid running on server side or if IntersectionObserver is not available
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -60px 0px', // Trigger slightly before element is fully in view
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, []);

  return [elementRef, isRevealed] as const;
}
