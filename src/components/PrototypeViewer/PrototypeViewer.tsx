import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import PrototypeFrame from './PrototypeFrame';
import { prototypeScreens } from './prototypeConfig';

export default function PrototypeViewer() {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentScreen = prototypeScreens[currentScreenIndex];

  const handleNext = () => {
    setCurrentScreenIndex((prev) => (prev + 1) % prototypeScreens.length);
  };

  const handlePrevious = () => {
    setCurrentScreenIndex((prev) =>
      prev === 0 ? prototypeScreens.length - 1 : prev - 1
    );
  };

  const handleScreenSelect = (index: number) => {
    setCurrentScreenIndex(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Mobile: Button to open modal
  if (isMobile) {
    return (
      <>
        <div className="flex justify-center">
          <motion.button
            onClick={openModal}
            className="px-6 py-3 border-2 border-terminal-green text-terminal-green
                       hover:bg-terminal-green hover:text-black transition-colors duration-200
                       font-terminal text-lg terminal-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Prototype
          </motion.button>
        </div>

        {/* Full-screen modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-col items-center justify-center max-h-full">
                <PrototypeFrame
                  screen={currentScreen}
                  onClose={closeModal}
                  showCloseButton
                />

                {/* Navigation controls */}
                <div className="mt-6 flex items-center gap-4">
                  <button
                    onClick={handlePrevious}
                    className="text-terminal-green text-2xl hover:text-terminal-green/70"
                  >
                    ←
                  </button>

                  <div className="text-terminal-green font-terminal text-sm">
                    {currentScreenIndex + 1} / {prototypeScreens.length}
                  </div>

                  <button
                    onClick={handleNext}
                    className="text-terminal-green text-2xl hover:text-terminal-green/70"
                  >
                    →
                  </button>
                </div>

                {/* Screen selector */}
                <div className="mt-4 flex gap-2 flex-wrap justify-center">
                  {prototypeScreens.map((screen, index) => (
                    <button
                      key={screen.id}
                      onClick={() => handleScreenSelect(index)}
                      className={`px-3 py-1 text-xs font-terminal border
                                ${
                                  index === currentScreenIndex
                                    ? 'border-terminal-green bg-terminal-green text-black'
                                    : 'border-terminal-green/50 text-terminal-green'
                                }`}
                    >
                      {screen.title}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop: Inline viewer
  return (
    <div className="space-y-6">
      {/* Current screen */}
      <PrototypeFrame screen={currentScreen} />

      {/* Navigation controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={handlePrevious}
          className="text-terminal-green text-3xl hover:text-terminal-green/70
                     transition-colors"
        >
          ←
        </button>

        <div className="text-terminal-green font-terminal">
          {currentScreenIndex + 1} / {prototypeScreens.length}
        </div>

        <button
          onClick={handleNext}
          className="text-terminal-green text-3xl hover:text-terminal-green/70
                     transition-colors"
        >
          →
        </button>
      </div>

      {/* Screen menu */}
      <div className="flex gap-2 flex-wrap justify-center">
        {prototypeScreens.map((screen, index) => (
          <button
            key={screen.id}
            onClick={() => handleScreenSelect(index)}
            className={`px-4 py-2 text-sm font-terminal border transition-all
                      ${
                        index === currentScreenIndex
                          ? 'border-terminal-green bg-terminal-green text-black'
                          : 'border-terminal-green/50 text-terminal-green hover:border-terminal-green'
                      }`}
          >
            {screen.title}
          </button>
        ))}
      </div>
    </div>
  );
}
