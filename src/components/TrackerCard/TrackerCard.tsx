import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ProgressTracker from './ProgressTracker';
import { useTrackerMetrics } from './useTrackerMetrics';
import { triggerSmallCelebration, triggerLargeCelebration } from '../../utils/celebrations';
import type { EngagementStatus } from '../../hooks/useEngagementStatus';

export default function TrackerCard() {
  const {
    formattedTime,
    scrollDepth,
    clickCount,
    status,
    progress,
    statusJustChanged,
    trackerRef,
  } = useTrackerMetrics();

  const previousStatus = useRef<EngagementStatus>('AWARENESS');
  const celebrationTriggered = useRef<Set<EngagementStatus>>(new Set(['AWARENESS']));

  useEffect(() => {
    if (statusJustChanged && status !== previousStatus.current) {
      // Trigger celebration based on new status
      if (status === 'INTEREST' && !celebrationTriggered.current.has('INTEREST')) {
        triggerSmallCelebration();
        celebrationTriggered.current.add('INTEREST');
      } else if (status === 'CONSIDERATION' && !celebrationTriggered.current.has('CONSIDERATION')) {
        triggerLargeCelebration();
        celebrationTriggered.current.add('CONSIDERATION');
      }

      previousStatus.current = status;
    }
  }, [status, statusJustChanged]);

  const getStatusColor = () => {
    switch (status) {
      case 'AWARENESS':
        return 'text-yellow-400';
      case 'INTEREST':
        return 'text-orange-400';
      case 'CONSIDERATION':
        return 'text-terminal-green';
      default:
        return 'text-terminal-green';
    }
  };

  return (
    <motion.div
      ref={trackerRef}
      className="tracker-card hidden md:block fixed right-6 top-1/2 -translate-y-1/2
                 glass-terminal border border-terminal-green/30 rounded-lg p-4
                 w-56 text-terminal-green z-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="space-y-3 text-xs font-terminal">
        <div className="text-center border-b border-terminal-green/30 pb-2">
          <p className="text-[10px] opacity-70">ENGAGEMENT TRACKER</p>
        </div>

        <div className="space-y-2">
          <div>
            <p className="opacity-70">Time on Site</p>
            <p className="text-sm terminal-glow">{formattedTime}</p>
          </div>

          <div>
            <p className="opacity-70">Scroll Depth</p>
            <p className="text-sm terminal-glow">{scrollDepth}%</p>
          </div>

          <div>
            <p className="opacity-70">Engagement</p>
            <p className="text-sm terminal-glow">{clickCount} clicks</p>
          </div>

          <div>
            <p className="opacity-70">Status</p>
            <motion.p
              className={`text-sm font-bold ${getStatusColor()} whitespace-nowrap`}
              animate={statusJustChanged ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {status}
            </motion.p>
          </div>
        </div>

        <div className="pt-2 border-t border-terminal-green/30">
          <p className="opacity-70 mb-2 text-center">Progress</p>
          <ProgressTracker progress={progress} />
        </div>
      </div>
    </motion.div>
  );
}
