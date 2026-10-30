import confetti from 'canvas-confetti';

export function fireCorrectAnswerConfetti() {
  confetti({
    particleCount: 40,
    spread: 60,
    origin: { y: 0.8 },
    colors: ['#10B981', '#3B82F6', '#F59E0B', '#8B5CF6'],
    ticks: 150,
    gravity: 1.2,
    scalar: 0.9,
    disableForReducedMotion: true,
  });
}

export function fireGrandCelebration() {
  try {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#10B981', '#3B82F6', '#F59E0B', '#8B5CF6'],
      ticks: 120,
      gravity: 1.1,
      disableForReducedMotion: true,
    });
  } catch {
    // Fallback gracefully
  }
}
