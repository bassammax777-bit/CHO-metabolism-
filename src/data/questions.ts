import { Question, TopicId } from '../types/quiz';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

export const ALL_QUESTIONS: Question[] = [...questionsPart1, ...questionsPart2];

// Verify we have exactly 100 questions
export const TOTAL_QUESTIONS_COUNT = ALL_QUESTIONS.length;

export function getQuestionsByTopic(topicId: TopicId): Question[] {
  return ALL_QUESTIONS.filter((q) => q.topicId === topicId);
}

export function getQuestionById(id: number): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.id === id);
}

export function getRandomQuestions(count: number, topicId?: TopicId): Question[] {
  const pool = topicId ? getQuestionsByTopic(topicId) : [...ALL_QUESTIONS];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, pool.length));
}

export function getQuestionsByIds(ids: number[]): Question[] {
  const set = new Set(ids);
  return ALL_QUESTIONS.filter((q) => set.has(q.id));
}
