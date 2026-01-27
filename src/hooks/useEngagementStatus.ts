import { useState, useEffect, useRef } from 'react';
import { SCORE_WEIGHTS, STATUS_THRESHOLDS } from '../utils/constants';

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
    // Calculate engagement score using weights from constants
    const calculatedScore =
      metrics.timeOnSite * SCORE_WEIGHTS.time +
      metrics.scrollDepth * SCORE_WEIGHTS.scroll +
      metrics.clickCount * SCORE_WEIGHTS.clicks;

    // Only increase score, never decrease
    setScore((prevScore) => Math.max(prevScore, calculatedScore));

    // Determine status based on score
    let newStatus: EngagementStatus = 'AWARENESS';
    if (calculatedScore >= STATUS_THRESHOLDS.CONSIDERATION) {
      newStatus = 'CONSIDERATION';
    } else if (calculatedScore >= STATUS_THRESHOLDS.INTEREST) {
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
  const progress = Math.min(10, Math.floor((score / STATUS_THRESHOLDS.CONSIDERATION) * 10));

  return {
    status,
    score,
    progress,
    statusJustChanged,
  };
}
