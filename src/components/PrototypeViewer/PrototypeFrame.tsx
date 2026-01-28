import { motion } from 'framer-motion';
import type { PrototypeScreen } from './prototypeConfig';

interface PrototypeFrameProps {
  screen: PrototypeScreen;
}

export default function PrototypeFrame({ screen }: PrototypeFrameProps) {
  return (
    <motion.div
      className="relative max-w-md sm:max-w-xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Frame */}
      <div className="border-2 border-terminal-green/50 overflow-hidden
                      bg-transparent shadow-2xl">
        {/* Screen Title */}
        <div className="px-4 py-2">
          <p className="text-terminal-green text-sm font-terminal terminal-glow">
            {screen.title}
          </p>
        </div>

        {/* Screen Image */}
        <div>
          <img
            src={screen.image}
            alt={screen.title}
            className="w-full max-h-[70vh] sm:max-h-[600px] object-contain"
          />
        </div>

        {/* Description */}
        <div className="px-4 py-2">
          <p className="text-terminal-green text-xs font-terminal opacity-70">
            {screen.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
