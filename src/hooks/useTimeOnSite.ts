import { useState, useEffect } from 'react';

export function useTimeOnSite() {
  const [timeOnSite, setTimeOnSite] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOnSite((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return { timeOnSite, formattedTime: formatTime(timeOnSite) };
}
