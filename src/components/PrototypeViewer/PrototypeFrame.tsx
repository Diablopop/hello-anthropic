import { motion } from 'framer-motion';
import type { PrototypeScreen } from './prototypeConfig';

interface PrototypeFrameProps {
  screen: PrototypeScreen;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export default function PrototypeFrame({ screen, onClose, showCloseButton }: PrototypeFrameProps) {
  return (
    <motion.div
      className="relative max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Close button for mobile modal */}
      {showCloseButton && onClose && (
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-terminal-green text-2xl
                     hover:text-terminal-green/70 transition-colors z-10"
        >
          ✕
        </button>
      )}

      {/* Frame */}
      <div className="border-2 border-terminal-green/50 overflow-hidden
                      bg-black shadow-2xl">
        {/* Screen Title */}
        <div className="bg-terminal-dark border-b border-terminal-green/30 px-4 py-2">
          <p className="text-terminal-green text-sm font-terminal terminal-glow">
            {screen.title}
          </p>
        </div>

        {/* Screen Image */}
        <div className="aspect-[2/3] bg-black">
          <img
            src={screen.image}
            alt={screen.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Description */}
        <div className="bg-terminal-dark border-t border-terminal-green/30 px-4 py-2">
          <p className="text-terminal-green text-xs font-terminal opacity-70">
            {screen.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
