import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateScorePercentage,
  calculateAccuracy,
  calculateXpForAnswer,
  getLevelFromXp,
  formatTime,
  getGradeInfo,
  checkNewBadges
} from './rules';
import { UserStats } from '../types/quiz';

test('calculateScorePercentage handles edge cases and rounding', () => {
  assert.equal(calculateScorePercentage(0, 0), 0);
  assert.equal(calculateScorePercentage(10, 10), 100);
  assert.equal(calculateScorePercentage(1, 3), 33);
  assert.equal(calculateScorePercentage(2, 3), 67);
  assert.equal(calculateScorePercentage(85, 100), 85);
});

test('calculateAccuracy returns correct percentage', () => {
  assert.equal(calculateAccuracy(0, 5), 0);
  assert.equal(calculateAccuracy(45, 50), 90);
});

test('calculateXpForAnswer rewards streaks and participation', () => {
  assert.equal(calculateXpForAnswer(false, 0), 5); // wrong answer
  assert.equal(calculateXpForAnswer(true, 0), 25); // base correct
  assert.equal(calculateXpForAnswer(true, 2), 35); // streak bonus
  assert.equal(calculateXpForAnswer(true, 10), 50); // capped bonus
});

test('getLevelFromXp computes level and progress accurately', () => {
  const lvl1 = getLevelFromXp(50);
  assert.equal(lvl1.level, 1);
  assert.equal(lvl1.progress, 25);
  assert.equal(lvl1.title, 'Medical Student');

  const lvl5 = getLevelFromXp(850);
  assert.equal(lvl5.level, 5);
  assert.equal(lvl5.title, 'Metabolism Specialist');
});

test('formatTime formats minutes and seconds with zero padding', () => {
  assert.equal(formatTime(0), '00:00');
  assert.equal(formatTime(65), '01:05');
  assert.equal(formatTime(600), '10:00');
});

test('getGradeInfo classifies scores accurately', () => {
  assert.equal(getGradeInfo(95).grade, 'A+');
  assert.equal(getGradeInfo(82).grade, 'A');
  assert.equal(getGradeInfo(75).grade, 'B');
  assert.equal(getGradeInfo(65).grade, 'C');
  assert.equal(getGradeInfo(40).grade, 'Needs Review');
});

test('checkNewBadges awards badges appropriately', () => {
  const dummyStats: UserStats = {
    totalQuestionsAnswered: 105,
    totalCorrect: 95,
    xp: 1200,
    level: 6,
    currentStreak: 10,
    highestStreak: 10,
    lastActiveDate: '2026-10-30',
    savedQuestionIds: [],
    incorrectQuestionIds: [],
    attempts: [{
      id: '1',
      date: '2026-10-30',
      mode: 'exam',
      totalQuestions: 100,
      correctAnswers: 92,
      scorePercentage: 92,
      timeSpentSec: 1800,
      answers: []
    }],
    unlockedBadges: []
  };

  const newBadges = checkNewBadges(dummyStats, 10, 92);
  assert.ok(newBadges.includes('first_quiz'));
  assert.ok(newBadges.includes('streak_3'));
  assert.ok(newBadges.includes('streak_10'));
  assert.ok(newBadges.includes('high_scorer'));
  assert.ok(newBadges.includes('century_club'));
  assert.ok(newBadges.includes('glycolysis_champ'));
});

test('ALL_QUESTIONS contains exactly 100 high-yield questions with valid structure', async () => {
  const { ALL_QUESTIONS, TOTAL_QUESTIONS_COUNT } = await import('../data/questions');
  assert.equal(TOTAL_QUESTIONS_COUNT, 100, 'Should have exactly 100 questions');
  assert.equal(ALL_QUESTIONS.length, 100);

  const idSet = new Set<number>();
  for (let i = 0; i < ALL_QUESTIONS.length; i++) {
    const q = ALL_QUESTIONS[i];
    assert.ok(q.id >= 1 && q.id <= 100, `Question id ${q.id} out of bounds`);
    assert.ok(!idSet.has(q.id), `Duplicate question ID ${q.id}`);
    idSet.add(q.id);

    assert.ok(q.text && q.text.trim().length > 10, `Question ${q.id} text too short`);
    assert.equal(q.options.length, 4, `Question ${q.id} must have 4 options`);
    assert.ok(q.correctAnswer >= 0 && q.correctAnswer <= 3, `Question ${q.id} correctAnswer out of range`);
    assert.ok(q.explanation && q.explanation.length > 20, `Question ${q.id} explanation missing or too short`);
    assert.ok(Array.isArray(q.keyConcepts) && q.keyConcepts.length > 0, `Question ${q.id} keyConcepts missing`);
    assert.ok(q.topicId, `Question ${q.id} topicId missing`);
  }
});
