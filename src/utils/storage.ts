import { UserStats, QuizAttempt, AnswerRecord } from '../types/quiz';
import { calculateXpForAnswer, getLevelFromXp, checkNewBadges } from './rules';

const STORAGE_KEY = 'biomaster_user_stats_v1';

const INITIAL_STATS: UserStats = {
  totalQuestionsAnswered: 24,
  totalCorrect: 20,
  xp: 560,
  level: 3,
  currentStreak: 4,
  highestStreak: 7,
  lastActiveDate: new Date().toISOString().split('T')[0],
  savedQuestionIds: [5, 14, 52, 92],
  incorrectQuestionIds: [18, 54, 76, 98],
  attempts: [
    {
      id: 'demo-attempt-1',
      date: new Date(Date.now() - 86400000 * 2).toISOString(),
      mode: 'practice',
      topicId: 'bioenergetics',
      totalQuestions: 8,
      correctAnswers: 7,
      scorePercentage: 88,
      timeSpentSec: 210,
      answers: [],
    },
    {
      id: 'demo-attempt-2',
      date: new Date(Date.now() - 86400000).toISOString(),
      mode: 'exam',
      totalQuestions: 16,
      correctAnswers: 13,
      scorePercentage: 81,
      timeSpentSec: 480,
      answers: [],
    },
  ],
  unlockedBadges: ['first_quiz', 'streak_3'],
};

export function loadUserStats(): UserStats {
  if (typeof window === 'undefined') return INITIAL_STATS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_STATS));
      return INITIAL_STATS;
    }
    const parsed = JSON.parse(raw) as UserStats;
    return parsed;
  } catch {
    return INITIAL_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (err) {
    console.error('Failed to save stats to localStorage', err);
  }
}

export function recordSingleAnswer(
  isCorrect: boolean,
  questionId: number,
  currentStreak: number
): { xpEarned: number; newStreak: number; newStats: UserStats } {
  const stats = loadUserStats();
  const xpEarned = calculateXpForAnswer(isCorrect, currentStreak);
  const newStreak = isCorrect ? currentStreak + 1 : 0;
  const newXp = stats.xp + xpEarned;
  const { level } = getLevelFromXp(newXp);

  const newIncorrect = new Set(stats.incorrectQuestionIds);
  if (isCorrect) {
    newIncorrect.delete(questionId);
  } else {
    newIncorrect.add(questionId);
  }

  const updatedStats: UserStats = {
    ...stats,
    totalQuestionsAnswered: stats.totalQuestionsAnswered + 1,
    totalCorrect: isCorrect ? stats.totalCorrect + 1 : stats.totalCorrect,
    xp: newXp,
    level,
    currentStreak: newStreak,
    highestStreak: Math.max(stats.highestStreak, newStreak),
    lastActiveDate: new Date().toISOString().split('T')[0],
    incorrectQuestionIds: Array.from(newIncorrect),
  };

  saveUserStats(updatedStats);
  return { xpEarned, newStreak, newStats: updatedStats };
}

export function recordQuizAttempt(attempt: QuizAttempt): { updatedStats: UserStats; newlyUnlocked: string[] } {
  const stats = loadUserStats();
  const updatedAttempts = [attempt, ...stats.attempts].slice(0, 30); // keep last 30 attempts

  // Calculate new totals
  let totalAnswered = stats.totalQuestionsAnswered;
  let totalCorrect = stats.totalCorrect;
  let newXp = stats.xp;
  let streak = stats.currentStreak;
  let highestStreak = stats.highestStreak;
  const incorrectSet = new Set(stats.incorrectQuestionIds);

  for (const ans of attempt.answers) {
    totalAnswered++;
    if (ans.isCorrect) {
      totalCorrect++;
      streak++;
      highestStreak = Math.max(highestStreak, streak);
      incorrectSet.delete(ans.questionId);
    } else {
      streak = 0;
      incorrectSet.add(ans.questionId);
    }
    newXp += calculateXpForAnswer(ans.isCorrect, streak);
  }

  // Bonus XP for finishing a full quiz/exam
  if (attempt.scorePercentage >= 80) {
    newXp += 50; // High score completion bonus
  }

  const { level } = getLevelFromXp(newXp);

  const interimStats: UserStats = {
    ...stats,
    totalQuestionsAnswered: totalAnswered,
    totalCorrect,
    xp: newXp,
    level,
    currentStreak: streak,
    highestStreak,
    lastActiveDate: new Date().toISOString().split('T')[0],
    incorrectQuestionIds: Array.from(incorrectSet),
    attempts: updatedAttempts,
  };

  const newlyUnlocked = checkNewBadges(interimStats, highestStreak, attempt.scorePercentage);
  const allUnlocked = Array.from(new Set([...stats.unlockedBadges, ...newlyUnlocked]));

  const finalStats: UserStats = {
    ...interimStats,
    unlockedBadges: allUnlocked,
  };

  saveUserStats(finalStats);
  return { updatedStats: finalStats, newlyUnlocked };
}

export function toggleSaveQuestion(questionId: number): boolean {
  const stats = loadUserStats();
  const set = new Set(stats.savedQuestionIds);
  let isSaved = false;

  if (set.has(questionId)) {
    set.delete(questionId);
    isSaved = false;
  } else {
    set.add(questionId);
    isSaved = true;
  }

  saveUserStats({
    ...stats,
    savedQuestionIds: Array.from(set),
  });

  return isSaved;
}

export function resetProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
