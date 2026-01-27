import { useTimeOnSite } from '../../hooks/useTimeOnSite';
import { useScrollDepth } from '../../hooks/useScrollDepth';
import { useClickTracking } from '../../hooks/useClickTracking';
import { useEngagementStatus } from '../../hooks/useEngagementStatus';

export function useTrackerMetrics() {
  const { timeOnSite, formattedTime } = useTimeOnSite();
  const scrollDepth = useScrollDepth();
  const { clickCount, trackerRef } = useClickTracking('.tracker-card');

  const { status, score, progress, statusJustChanged } = useEngagementStatus({
    timeOnSite,
    scrollDepth,
    clickCount,
  });

  return {
    timeOnSite,
    formattedTime,
    scrollDepth,
    clickCount,
    status,
    score,
    progress,
    statusJustChanged,
    trackerRef,
  };
}
