export type TopicId =
  | 'bioenergetics'
  | 'respiratory-chain'
  | 'etc-inhibitors'
  | 'shuttles-mitochondria'
  | 'carb-digestion-absorption'
  | 'glycolysis-steps'
  | 'glycolysis-regulation'
  | 'pdh-complex'
  | 'tca-cycle'
  | 'hmp-shunt-favism'
  | 'uronic-acid-pathway'
  | 'glycogen-metabolism'
  | 'glycogen-storage-diseases'
  | 'gluconeogenesis'
  | 'galactose-fructose'
  | 'diabetes-blood-glucose';

export interface Question {
  id: number;
  topicId: TopicId;
  topicName: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  text: string;
  options: string[];
  correctAnswer: number; // 0-indexed: 0 for A, 1 for B, 2 for C, 3 for D
  explanation: string;
  keyConcepts: string[];
  sourcePage?: number;
}

export type QuizMode = 'practice' | 'exam' | 'topic' | 'mistakes';

export interface AnswerRecord {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpentSec: number;
  flagged?: boolean;
}

export interface QuizAttempt {
  id: string;
  date: string;
  mode: QuizMode;
  topicId?: TopicId;
  totalQuestions: number;
  correctAnswers: number;
  scorePercentage: number;
  timeSpentSec: number;
  answers: AnswerRecord[];
}

export interface UserStats {
  totalQuestionsAnswered: number;
  totalCorrect: number;
  xp: number;
  level: number;
  currentStreak: number;
  highestStreak: number;
  lastActiveDate: string;
  savedQuestionIds: number[];
  incorrectQuestionIds: number[];
  attempts: QuizAttempt[];
  unlockedBadges: string[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: string;
}
