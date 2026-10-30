import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  RotateCcw, 
  ArrowLeft, 
  Bookmark, 
  Filter, 
  Sparkles,
  Share2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Question, AnswerRecord, QuizMode } from '../types/quiz';
import { ConceptExplainer } from './ConceptExplainer';
import { formatTime, getGradeInfo } from '../utils/rules';
import { fireGrandCelebration } from '../utils/confetti';
import { playMilestoneSound } from '../utils/sound';

interface ResultsViewProps {
  questions: Question[];
  answers: AnswerRecord[];
  timeSpentSec: number;
  mode: QuizMode;
  soundEnabled: boolean;
  savedQuestionIds: number[];
  onToggleSave: (id: number) => void;
  onRetakeAll: () => void;
  onRetakeIncorrect: (incorrectIds: number[]) => void;
  onBackToDashboard: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  questions,
  answers,
  timeSpentSec,
  mode,
  soundEnabled,
  savedQuestionIds,
  onToggleSave,
  onRetakeAll,
  onRetakeIncorrect,
  onBackToDashboard,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'correct' | 'flagged'>('all');
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  // Compute metrics
  const total = questions.length;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const incorrectCount = total - correctCount;
  const scorePercentage = Math.round((correctCount / total) * 100);
  const gradeInfo = getGradeInfo(scorePercentage);
  const avgTimePerQuestion = total > 0 ? Math.round(timeSpentSec / total) : 0;

  const answerMap = new Map<number, AnswerRecord>();
  answers.forEach((a) => answerMap.set(a.questionId, a));

  const incorrectQuestionIds = answers.filter((a) => !a.isCorrect).map((a) => a.questionId);

  // Trigger celebration on high score
  useEffect(() => {
    if (scorePercentage >= 70) {
      fireGrandCelebration();
      playMilestoneSound(soundEnabled);
    }
  }, [scorePercentage, soundEnabled]);

  // Topic performance breakdown
  const topicBreakdown = questions.reduce((acc, q) => {
    const ans = answerMap.get(q.id);
    if (!acc[q.topicName]) {
      acc[q.topicName] = { total: 0, correct: 0 };
    }
    acc[q.topicName].total++;
    if (ans?.isCorrect) {
      acc[q.topicName].correct++;
    }
    return acc;
  }, {} as Record<string, { total: number; correct: number }>);

  // Filtered questions
  const filteredQuestions = questions.filter((q) => {
    const ans = answerMap.get(q.id);
    if (filterMode === 'incorrect') return !ans?.isCorrect;
    if (filterMode === 'correct') return ans?.isCorrect;
    if (filterMode === 'flagged') return ans?.flagged;
    return true;
  });

  const toggleExpand = (qId: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(questions.map((q) => q.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Top Banner Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs text-center space-y-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-emerald-400 mx-auto shadow-md">
          <Trophy className="h-8 w-8" />
        </div>

        <div>
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            <span>Assessment Complete</span>
            <span>·</span>
            <span>{mode === 'exam' ? '100-Question Exam' : 'Practice Drill'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {scorePercentage}%
          </h2>
          <p className={`text-base font-bold mt-1 ${gradeInfo.color}`}>
            Grade {gradeInfo.grade} — {gradeInfo.text}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-left">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <span className="block text-xs font-semibold text-slate-500">Correct</span>
            <div className="flex items-center gap-2 mt-1">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <span className="text-xl font-bold text-slate-900">{correctCount}</span>
              <span className="text-xs text-slate-400 font-medium">/ {total}</span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <span className="block text-xs font-semibold text-slate-500">Incorrect</span>
            <div className="flex items-center gap-2 mt-1">
              <XCircle className="h-5 w-5 text-rose-600" />
              <span className="text-xl font-bold text-slate-900">{incorrectCount}</span>
              <span className="text-xs text-slate-400 font-medium">/ {total}</span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <span className="block text-xs font-semibold text-slate-500">Time Taken</span>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">{formatTime(timeSpentSec)}</span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <span className="block text-xs font-semibold text-slate-500">Pace / Question</span>
            <div className="flex items-center gap-2 mt-1">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span className="text-xl font-bold text-slate-900">{avgTimePerQuestion}s</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {incorrectCount > 0 && (
            <button
              onClick={() => onRetakeIncorrect(incorrectQuestionIds)}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors shadow-xs"
            >
              <RotateCcw className="h-4 w-4" />
              Drill {incorrectCount} Missed Questions
            </button>
          )}

          <button
            onClick={onRetakeAll}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Retake Full Quiz
          </button>

          <button
            onClick={onBackToDashboard}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Dashboard
          </button>
        </div>
      </div>

      {/* Topic Mastery Summary */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900">Performance by Topic Breakdown</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(topicBreakdown).map(([topic, data]) => {
            const pct = Math.round((data.correct / data.total) * 100);
            return (
              <div key={topic} className="bg-slate-50 border border-slate-100 rounded-xl p-3 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="truncate max-w-[200px]">{topic}</span>
                  <span className={pct >= 70 ? 'text-emerald-700' : 'text-amber-700'}>
                    {data.correct}/{data.total} ({pct}%)
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${pct >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Question Review Header & Filters */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Detailed Answer Review</h3>
            <p className="text-xs text-slate-500">Examine rationales and highlighted biochemical concepts for each item.</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-2 py-1"
            >
              Expand All
            </button>
            <span className="text-slate-300">·</span>
            <button
              onClick={collapseAll}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-2 py-1"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Filter Segmented Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              filterMode === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Questions ({total})
          </button>
          <button
            onClick={() => setFilterMode('incorrect')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              filterMode === 'incorrect'
                ? 'bg-white text-rose-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Incorrect Only ({incorrectCount})
          </button>
          <button
            onClick={() => setFilterMode('correct')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              filterMode === 'correct'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Correct Only ({correctCount})
          </button>
          <button
            onClick={() => setFilterMode('flagged')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              filterMode === 'flagged'
                ? 'bg-white text-amber-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Flagged ({answers.filter((a) => a.flagged).length})
          </button>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const ans = answerMap.get(q.id);
            const isCorrect = ans?.isCorrect ?? false;
            const isExpanded = expandedIds.has(q.id);
            const isSaved = savedQuestionIds.includes(q.id);

            return (
              <div
                key={q.id}
                className={`bg-white border rounded-2xl overflow-hidden shadow-xs transition-all ${
                  isCorrect ? 'border-slate-200' : 'border-rose-200 bg-rose-50/20'
                }`}
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(q.id)}
                  className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-rose-600" />
                      )}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                        <span className="font-bold text-slate-900">Question {q.id}</span>
                        <span>·</span>
                        <span>{q.topicName}</span>
                        {ans?.flagged && (
                          <>
                            <span>·</span>
                            <span className="text-amber-600 font-semibold">Flagged</span>
                          </>
                        )}
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                        {q.text}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(q.id);
                      }}
                      className={`p-1.5 rounded-lg border text-xs transition-colors ${
                        isSaved ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-slate-200 text-slate-400 hover:text-slate-600'
                      }`}
                      title="Bookmark question"
                    >
                      <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-blue-500' : ''}`} />
                    </button>
                    <button className="text-slate-400 p-1">
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details: Options + Concept Explainer */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 bg-slate-50/40">
                    {/* Options list */}
                    <div className="space-y-2 pt-2">
                      {q.options.map((opt, optIdx) => {
                        const letter = ['A', 'B', 'C', 'D'][optIdx];
                        const isStudentChoice = ans?.selectedAnswer === optIdx;
                        const isTheCorrectChoice = q.correctAnswer === optIdx;

                        let style = 'bg-white border-slate-200 text-slate-700';
                        if (isTheCorrectChoice) {
                          style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold';
                        } else if (isStudentChoice && !isTheCorrectChoice) {
                          style = 'bg-rose-50 border-rose-300 text-rose-950 font-medium';
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-3 ${style}`}
                          >
                            <span className="font-bold flex-shrink-0">{letter}.</span>
                            <span className="flex-1">{opt}</span>
                            {isTheCorrectChoice && (
                              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider flex-shrink-0">
                                Correct Answer
                              </span>
                            )}
                            {isStudentChoice && !isTheCorrectChoice && (
                              <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider flex-shrink-0">
                                Your Choice
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explainer with Highlights */}
                    <ConceptExplainer
                      explanation={q.explanation}
                      keyConcepts={q.keyConcepts}
                      sourcePage={q.sourcePage}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
