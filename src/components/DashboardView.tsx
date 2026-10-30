import React from 'react';
import { 
  Trophy, 
  Flame, 
  Zap, 
  CheckCircle2, 
  Bookmark, 
  RotateCcw, 
  ArrowRight, 
  Target, 
  Award, 
  Clock, 
  Layers,
  ChevronRight,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import { UserStats, TopicId } from '../types/quiz';
import { TOPICS } from '../data/topics';
import { ALL_QUESTIONS } from '../data/questions';
import { getLevelFromXp, calculateAccuracy, formatTime, BADGES } from '../utils/rules';

interface DashboardViewProps {
  stats: UserStats;
  onStartExam: (count: number, topicId?: TopicId) => void;
  onStartPractice: (count: number, topicId?: TopicId) => void;
  onStartWeakPractice: () => void;
  onOpenFlashcards: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  stats,
  onStartExam,
  onStartPractice,
  onStartWeakPractice,
  onOpenFlashcards,
}) => {
  const levelInfo = getLevelFromXp(stats.xp);
  const accuracy = calculateAccuracy(stats.totalCorrect, stats.totalQuestionsAnswered);

  // Group questions by topic for topic cards
  const questionsByTopic = ALL_QUESTIONS.reduce((acc, q) => {
    acc[q.topicId] = (acc[q.topicId] || 0) + 1;
    return acc;
  }, {} as Record<TopicId, number>);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Hero Student Profile & Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-lg border border-slate-800">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <BrainCircuit className="h-4 w-4" />
              <span>Oraby Medical Biochemistry Examination Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Welcome back, Scholar!
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Master Bioenergetics and Carbohydrate Metabolism across 100 board-style clinical questions with instant correction, key concept highlights, and persistent performance tracking.
            </p>

            {/* Level & XP progress */}
            <div className="pt-2 space-y-1.5 max-w-md">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-emerald-400">Level {levelInfo.level} · {levelInfo.title}</span>
                <span className="text-slate-400">{levelInfo.currentLevelXp} / {levelInfo.nextLevelXp} XP to Level {levelInfo.level + 1}</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${levelInfo.progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Quick Stat Pill Trio in Hero */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 bg-slate-800/80 backdrop-blur-xs p-4 rounded-2xl border border-slate-700/80 md:w-80">
            <div className="text-center">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Total XP</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400 flex items-center justify-center gap-1 mt-0.5">
                <Zap className="h-4 w-4 fill-amber-400 text-amber-400 inline" />
                {stats.xp}
              </span>
            </div>
            <div className="text-center border-x border-slate-700/80">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Streak</span>
              <span className="text-xl sm:text-2xl font-black text-orange-400 flex items-center justify-center gap-1 mt-0.5">
                <Flame className="h-4 w-4 fill-orange-400 text-orange-400 inline" />
                {stats.currentStreak}
              </span>
            </div>
            <div className="text-center">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Accuracy</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5 block">
                {accuracy}%
              </span>
            </div>
          </div>
        </div>

        {/* Ambient subtle glow background */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Exam Launchers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 100-Question Board Exam */}
        <div className="bg-white border-2 border-emerald-500/40 hover:border-emerald-500 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Award className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Full Curriculum
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">100-Question Mock Exam</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Comprehensive board examination covering every chapter, table, and biochemical reaction in the textbook with detailed scoring.
              </p>
            </div>
          </div>
          <button
            onClick={() => onStartExam(100)}
            className="mt-5 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
          >
            Start 100-Q Exam
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* 20-Question Daily Practice */}
        <div className="bg-white border border-slate-200 hover:border-slate-300 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Target className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                Instant Feedback
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">20-Question Practice Drill</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Immediate explanations with highlighted key concepts after every question, plus rewarding celebrations and streak boosts.
              </p>
            </div>
          </div>
          <button
            onClick={() => onStartPractice(20)}
            className="mt-5 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow-xs"
          >
            Start 20-Q Practice
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Weak Areas & Flashcards */}
        <div className="bg-white border border-slate-200 hover:border-slate-300 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <RotateCcw className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                Targeted Mastery
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Drill Weak Questions</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {stats.incorrectQuestionIds.length > 0 
                  ? `Focus specifically on the ${stats.incorrectQuestionIds.length} questions previously missed until you master them.`
                  : 'No missed questions recorded yet! Excellent work.'}
              </p>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <button
              onClick={onStartWeakPractice}
              disabled={stats.incorrectQuestionIds.length === 0}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-40 text-white text-xs font-bold transition-colors shadow-xs"
            >
              Drill Missed ({stats.incorrectQuestionIds.length})
            </button>
            <button
              onClick={onOpenFlashcards}
              className="p-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold"
              title="Study flashcards"
            >
              <Layers className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Topic-by-Topic Subject Drill Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Curriculum Topic Modules</h2>
            <p className="text-xs text-slate-500">Practice questions filtered specifically by textbook chapter and subject.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {TOPICS.map((topic) => {
            const count = questionsByTopic[topic.id] || 0;
            return (
              <div
                key={topic.id}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-4 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                    <span className="font-medium truncate max-w-[150px]">{topic.chapter.split(':')[1] || topic.chapter}</span>
                    <span className="font-bold text-slate-700">{count} Qs</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {topic.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onStartPractice(count, topic.id)}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                  >
                    Practice
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => onStartExam(count, topic.id)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Quiz
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges & Achievements Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Student Badges & Achievements</h2>
            <p className="text-xs text-slate-500">Earn recognition for streaks, high scores, and persistent studying.</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
            {stats.unlockedBadges.length} / {BADGES.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {BADGES.map((b) => {
            const isUnlocked = stats.unlockedBadges.includes(b.id);
            return (
              <div
                key={b.id}
                className={`rounded-2xl p-3.5 text-center border transition-all ${
                  isUnlocked
                    ? 'bg-amber-50/40 border-amber-200 shadow-xs'
                    : 'bg-slate-50 border-slate-200 opacity-50 grayscale'
                }`}
                title={b.requirement}
              >
                <div className="text-2xl mb-1">{b.icon}</div>
                <div className="text-xs font-bold text-slate-900 truncate">{b.title}</div>
                <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-2 leading-tight">
                  {b.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Exam History */}
      {stats.attempts.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900">Recent Exam Attempts</h2>
          <div className="divide-y divide-slate-100">
            {stats.attempts.slice(0, 5).map((att) => (
              <div key={att.id} className="py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                    att.scorePercentage >= 80 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : att.scorePercentage >= 60 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'bg-amber-50 text-amber-700'
                  }`}>
                    {att.scorePercentage}%
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {att.mode === 'exam' ? '100-Q Mock Exam' : 'Practice Quiz'}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {new Date(att.date).toLocaleDateString()} · {att.correctAnswers}/{att.totalQuestions} correct · {formatTime(att.timeSpentSec)}
                    </div>
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-500">
                  +{att.correctAnswers * 25} XP
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
