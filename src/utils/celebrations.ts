import confetti from 'canvas-confetti';

export function triggerSmallCelebration() {
  // Small celebration for INTEREST status
  confetti({
    particleCount: 30,
    spread: 50,
    origin: { y: 0.6, x: 0.9 },
    colors: ['#00FF00', '#00AA00'],
    ticks: 100,
  });

  // Vibrate if supported
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }
}

export function triggerLargeCelebration() {
  // Large pixelated confetti for CONSIDERATION status
  const count = 200;
  const defaults = {
    origin: { y: 0.5 },
    colors: ['#00FF00', '#00AA00', '#00FF00'],
    shapes: ['square'],
    ticks: 200,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Fire multiple bursts
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });

  // Stronger vibration
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }
}
