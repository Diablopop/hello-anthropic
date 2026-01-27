import { useState, useEffect } from 'react';

export function useScrollDepth() {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const calculateScrollDepth = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const maxScroll = documentHeight - windowHeight;
      const depth = maxScroll > 0 ? Math.round((scrollTop / maxScroll) * 100) : 0;

      setScrollDepth(Math.min(100, Math.max(0, depth)));
    };

    calculateScrollDepth();
    window.addEventListener('scroll', calculateScrollDepth, { passive: true });

    return () => window.removeEventListener('scroll', calculateScrollDepth);
  }, []);

  return scrollDepth;
}
