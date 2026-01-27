import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressTracker from './ProgressTracker';
import { useTrackerMetrics } from './useTrackerMetrics';
import { triggerSmallCelebration, triggerLargeCelebration } from '../../utils/celebrations';
import type { EngagementStatus } from '../../hooks/useEngagementStatus';

export default function TrackerDrawer() {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      {/* Tab with eye icon */}
      <motion.button
        className="md:hidden tracker-card fixed right-0 top-1/2 -translate-y-1/2
                   glass-terminal border-l border-t border-b border-terminal-green/30
                   rounded-l-lg p-2 z-50"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src="/assets/eye-icon.svg"
          alt="Tracker"
          className="w-6 h-6"
        />
      </motion.button>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer content */}
            <motion.div
              ref={trackerRef}
              className="md:hidden tracker-card fixed right-0 top-0 bottom-0
                         glass-terminal border-l border-terminal-green/30 p-6
                         w-64 text-terminal-green z-50 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="space-y-4 text-sm font-terminal">
                <div className="flex justify-between items-center border-b border-terminal-green/30 pb-3">
                  <p className="text-xs opacity-70">ENGAGEMENT TRACKER</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-terminal-green hover:text-terminal-green/70"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="opacity-70 text-xs">Time on Site</p>
                    <p className="text-base terminal-glow">{formattedTime}</p>
                  </div>

                  <div>
                    <p className="opacity-70 text-xs">Scroll Depth</p>
                    <p className="text-base terminal-glow">{scrollDepth}%</p>
                  </div>

                  <div>
                    <p className="opacity-70 text-xs">Engagement</p>
                    <p className="text-base terminal-glow">{clickCount} clicks</p>
                  </div>

                  <div>
                    <p className="opacity-70 text-xs">Status</p>
                    <motion.p
                      className={`text-base font-bold ${getStatusColor()} whitespace-nowrap`}
                      animate={statusJustChanged ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {status}
                    </motion.p>
                  </div>
                </div>

                <div className="pt-3 border-t border-terminal-green/30">
                  <p className="opacity-70 mb-3 text-center text-xs">Progress</p>
                  <ProgressTracker progress={progress} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
