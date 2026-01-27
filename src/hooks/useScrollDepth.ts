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
      const constrainedDepth = Math.min(100, Math.max(0, depth));

      // Only update if the new depth is greater than the current depth
      setScrollDepth((prevDepth) => Math.max(prevDepth, constrainedDepth));
    };

    calculateScrollDepth();
    window.addEventListener('scroll', calculateScrollDepth, { passive: true });

    return () => window.removeEventListener('scroll', calculateScrollDepth);
  }, []);

  return scrollDepth;
}
