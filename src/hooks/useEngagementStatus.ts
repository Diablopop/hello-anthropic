import { useState, useEffect, useRef } from 'react';

export type EngagementStatus = 'AWARENESS' | 'INTEREST' | 'CONSIDERATION';

interface EngagementMetrics {
  timeOnSite: number;
  scrollDepth: number;
  clickCount: number;
}

export function useEngagementStatus(metrics: EngagementMetrics) {
  const [status, setStatus] = useState<EngagementStatus>('AWARENESS');
  const [score, setScore] = useState(0);
  const previousStatus = useRef<EngagementStatus>('AWARENESS');
  const [statusJustChanged, setStatusJustChanged] = useState(false);

  // Helper to get status hierarchy level
  const getStatusLevel = (status: EngagementStatus): number => {
    switch (status) {
      case 'AWARENESS':
        return 1;
      case 'INTEREST':
        return 2;
      case 'CONSIDERATION':
        return 3;
      default:
        return 1;
    }
  };

  useEffect(() => {
    // Calculate engagement score: time × 0.5 + scroll × 2 + clicks × 3
    const calculatedScore =
      metrics.timeOnSite * 0.5 +
      metrics.scrollDepth * 2 +
      metrics.clickCount * 3;

    // Only increase score, never decrease
    setScore((prevScore) => Math.max(prevScore, calculatedScore));

    // Determine status based on score
    let newStatus: EngagementStatus = 'AWARENESS';
    if (calculatedScore >= 200) {
      newStatus = 'CONSIDERATION';
    } else if (calculatedScore >= 80) {
      newStatus = 'INTEREST';
    }

    // Only allow status to progress forward, never backward
    if (getStatusLevel(newStatus) > getStatusLevel(previousStatus.current)) {
      previousStatus.current = newStatus;
      setStatus(newStatus);
      setStatusJustChanged(true);

      // Reset the flag after a short delay
      setTimeout(() => setStatusJustChanged(false), 100);
    }
  }, [metrics.timeOnSite, metrics.scrollDepth, metrics.clickCount]);

  // Calculate progress (0-10) for the progress tracker
  const progress = Math.min(10, Math.floor((score / 200) * 10));

  return {
    status,
    score,
    progress,
    statusJustChanged,
  };
}
