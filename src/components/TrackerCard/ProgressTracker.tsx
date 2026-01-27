import { motion } from 'framer-motion';

interface ProgressTrackerProps {
  progress: number; // 0-10
}

export default function ProgressTracker({ progress }: ProgressTrackerProps) {
  return (
    <div className="flex gap-1 items-center justify-center">
      {Array.from({ length: 10 }).map((_, index) => {
        const isFilled = index < progress;

        return (
          <motion.div
            key={index}
            className="border border-terminal-green transition-all duration-300"
            initial={{ width: 8, height: 8 }}
            animate={{
              width: isFilled ? 12 : 8,
              height: isFilled ? 12 : 8,
              backgroundColor: isFilled ? 'var(--color-terminal-green)' : 'transparent',
            }}
            transition={{ duration: 0.3 }}
          />
        );
      })}
    </div>
  );
}
