import { UserStats, Badge } from '../types/quiz';

export const BADGES: Badge[] = [
  {
    id: 'first_quiz',
    title: 'First Step',
    description: 'Completed your very first biochemistry quiz!',
    icon: '🎯',
    requirement: 'Complete 1 quiz attempt',
  },
  {
    id: 'streak_3',
    title: 'Streak Novice',
    description: 'Maintained a correct answer streak of 3!',
    icon: '⚡',
    requirement: 'Reach 3 consecutive correct answers',
  },
  {
    id: 'streak_10',
    title: 'Biochem Prodigy',
    description: 'Achieved an incredible streak of 10 correct answers in a row!',
    icon: '🔥',
    requirement: 'Reach 10 consecutive correct answers',
  },
  {
    id: 'high_scorer',
    title: 'Master of Metabolism',
    description: 'Scored 90% or higher on an exam attempt!',
    icon: '🏆',
    requirement: 'Score >= 90% on any quiz or exam',
  },
  {
    id: 'century_club',
    title: 'Centurion Scholar',
    description: 'Answered over 100 questions across your study sessions!',
    icon: '📚',
    requirement: 'Answer 100 questions in total',
  },
  {
    id: 'glycolysis_champ',
    title: 'Enzyme Specialist',
    description: 'Reached Level 5 in biochemistry mastery!',
    icon: '🧬',
    requirement: 'Reach Level 5 (1,000+ XP)',
  },
];

export function calculateScorePercentage(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((correct / total) * 100);
}

export function calculateAccuracy(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((correct / total) * 100);
}

export function calculateXpForAnswer(isCorrect: boolean, currentStreak: number): number {
  if (!isCorrect) return 5; // participation XP
  const base = 25;
  const streakBonus = Math.min(currentStreak * 5, 25);
  return base + streakBonus;
}

export function getLevelFromXp(xp: number): { level: number; title: string; currentLevelXp: number; nextLevelXp: number; progress: number } {
  // Each level requires 200 XP
  const level = Math.floor(xp / 200) + 1;
  const currentLevelXp = xp % 200;
  const nextLevelXp = 200;
  const progress = Math.min(100, Math.round((currentLevelXp / nextLevelXp) * 100));

  let title = 'Medical Student';
  if (level >= 10) title = 'Distinguished Biochemist';
  else if (level >= 7) title = 'Master of Cellular Energetics';
  else if (level >= 5) title = 'Metabolism Specialist';
  else if (level >= 3) title = 'Glycolysis Researcher';
  else if (level >= 2) title = 'Biochem Scholar';

  return { level, title, currentLevelXp, nextLevelXp, progress };
}

export function checkNewBadges(stats: UserStats, latestStreak: number, latestScorePct: number): string[] {
  const unlocked = new Set<string>(stats.unlockedBadges);
  const newlyUnlocked: string[] = [];

  if (stats.attempts.length >= 1 && !unlocked.has('first_quiz')) {
    newlyUnlocked.push('first_quiz');
  }
  if (latestStreak >= 3 && !unlocked.has('streak_3')) {
    newlyUnlocked.push('streak_3');
  }
  if (latestStreak >= 10 && !unlocked.has('streak_10')) {
    newlyUnlocked.push('streak_10');
  }
  if (latestScorePct >= 90 && !unlocked.has('high_scorer')) {
    newlyUnlocked.push('high_scorer');
  }
  if (stats.totalQuestionsAnswered >= 100 && !unlocked.has('century_club')) {
    newlyUnlocked.push('century_club');
  }
  if (stats.level >= 5 && !unlocked.has('glycolysis_champ')) {
    newlyUnlocked.push('glycolysis_champ');
  }

  return newlyUnlocked;
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function getGradeInfo(scorePct: number): { grade: string; text: string; color: string } {
  if (scorePct >= 90) return { grade: 'A+', text: 'Outstanding Mastery!', color: 'text-emerald-600' };
  if (scorePct >= 80) return { grade: 'A', text: 'Excellent Performance!', color: 'text-teal-600' };
  if (scorePct >= 70) return { grade: 'B', text: 'Good Understanding!', color: 'text-blue-600' };
  if (scorePct >= 60) return { grade: 'C', text: 'Satisfactory, Keep Practicing!', color: 'text-amber-600' };
  return { grade: 'Needs Review', text: 'Review Explanations & Retry!', color: 'text-rose-600' };
}
