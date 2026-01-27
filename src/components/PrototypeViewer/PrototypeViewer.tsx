import { useState } from 'react';
import PrototypeFrame from './PrototypeFrame';
import { prototypeScreens } from './prototypeConfig';

export default function PrototypeViewer() {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

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
