import { useState, useEffect, useRef } from 'react';

export function useClickTracking(excludeSelector?: string) {
  const [clickCount, setClickCount] = useState(0);
  const trackerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Exclude clicks on the tracker card itself
      if (excludeSelector && trackerRef.current) {
        if (trackerRef.current.contains(e.target as Node)) {
          return;
        }
      }

      setClickCount((prev) => prev + 1);
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [excludeSelector]);

  return { clickCount, trackerRef };
}
