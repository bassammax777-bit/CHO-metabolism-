import React, { useState, useEffect } from 'react';
import { 
  Check, 
  X as CloseIcon, 
  Bookmark, 
  Flag, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Zap, 
  ChevronRight,
  Send,
  HelpCircle
} from 'lucide-react';
import { Question, AnswerRecord, QuizMode } from '../types/quiz';
import { ConceptExplainer } from './ConceptExplainer';
import { formatTime, calculateXpForAnswer } from '../utils/rules';
import { playSuccessSound, playErrorSound } from '../utils/sound';
import { fireCorrectAnswerConfetti } from '../utils/confetti';

interface QuizViewProps {
  questions: Question[];
  mode: QuizMode;
  soundEnabled: boolean;
  savedQuestionIds: number[];
  onToggleSave: (id: number) => void;
  onRecordSingleAnswer?: (isCorrect: boolean, questionId: number, currentStreak: number) => void;
  onCompleteQuiz: (records: AnswerRecord[], totalTimeSec: number) => void;
  onCancel: () => void;
  userStreak: number;
}

export const QuizView: React.FC<QuizViewProps> = ({
  questions,
  mode,
  soundEnabled,
  savedQuestionIds,
  onToggleSave,
  onRecordSingleAnswer,
  onCompleteQuiz,
  onCancel,
  userStreak,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { selected: number; isCorrect: boolean; time: number }>>({});
  const [flaggedIds, setFlaggedIds] = useState<Set<number>>(new Set());
  const [showQuestionGrid, setShowQuestionGrid] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [rewardToast, setRewardToast] = useState<{ xp: number; streak: number } | null>(null);

  const currentQ = questions[currentIndex];
  const isAnswered = answers[currentQ?.id] !== undefined;
  const currentAnswer = answers[currentQ?.id];
  const isSaved = savedQuestionIds.includes(currentQ?.id);
  const isFlagged = flaggedIds.has(currentQ?.id);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Reset question timer on index change
  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentIndex]);

  const handleSelectOption = (optionIndex: number) => {
    // In practice mode, once answered, don't allow re-answering
    if (mode === 'practice' && isAnswered) return;

    const timeSpent = Math.max(1, Math.round((Date.now() - questionStartTime) / 1000));
    const isCorrect = optionIndex === currentQ.correctAnswer;

    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        selected: optionIndex,
        isCorrect,
        time: timeSpent,
      },
    }));

    if (mode === 'practice') {
      if (isCorrect) {
        playSuccessSound(soundEnabled);
        fireCorrectAnswerConfetti();
        const earnedXp = calculateXpForAnswer(true, userStreak);
        setRewardToast({ xp: earnedXp, streak: userStreak + 1 });
        setTimeout(() => setRewardToast(null), 3500);
      } else {
        playErrorSound(soundEnabled);
      }

      if (onRecordSingleAnswer) {
        onRecordSingleAnswer(isCorrect, currentQ.id, userStreak);
      }
    }
  };

  const handleToggleFlag = () => {
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) next.delete(currentQ.id);
      else next.add(currentQ.id);
      return next;
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      if (mode === 'practice') {
        handleSubmitFinal();
      } else {
        setShowConfirmSubmit(true);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmitFinal = () => {
    const records: AnswerRecord[] = questions.map((q) => {
      const ans = answers[q.id];
      return {
        questionId: q.id,
        selectedAnswer: ans ? ans.selected : -1,
        isCorrect: ans ? ans.isCorrect : false,
        timeSpentSec: ans ? ans.time : 0,
        flagged: flaggedIds.has(q.id),
      };
    });

    onCompleteQuiz(records, secondsElapsed);
  };

  const answeredCount = Object.keys(answers).length;
  const progressPct = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Top Status & Controls Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        {/* Left: Mode & Progress text */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <span className="uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              {mode === 'exam' ? 'Mock Exam' : mode === 'practice' ? 'Practice Mode' : 'Subject Drill'}
            </span>
            <span>·</span>
            <span>Question {currentIndex + 1} of {questions.length}</span>
          </div>
        </div>

        {/* Center: Timer */}
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
          <Clock className="h-4 w-4 text-slate-500" />
          <span>{formatTime(secondsElapsed)}</span>
        </div>

        {/* Right: Quick Controls */}
        <div className="flex items-center gap-2">
          {/* Flag button */}
          <button
            onClick={handleToggleFlag}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              isFlagged 
                ? 'bg-amber-50 border-amber-300 text-amber-800' 
                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
            title="Flag question for later review"
          >
            <Flag className={`h-3.5 w-3.5 ${isFlagged ? 'fill-amber-500 text-amber-600' : ''}`} />
            <span className="hidden sm:inline">Flag</span>
          </button>

          {/* Bookmark button */}
          <button
            onClick={() => onToggleSave(currentQ.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              isSaved
                ? 'bg-blue-50 border-blue-300 text-blue-700'
                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
            title="Save to bookmarks"
          >
            <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-blue-500 text-blue-600' : ''}`} />
            <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          {/* Grid toggle */}
          <button
            onClick={() => setShowQuestionGrid(!showQuestionGrid)}
            className="px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Overview ({answeredCount}/{questions.length})
          </button>

          {/* Quit button */}
          <button
            onClick={onCancel}
            className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors rounded-lg"
            title="Exit quiz"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Reward Toast Animation (On Correct Answer) */}
      {rewardToast && (
        <div className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Zap className="h-4 w-4 text-amber-300 fill-amber-300" />
            <span>Correct Answer! +{rewardToast.xp} XP</span>
          </div>
          {rewardToast.streak > 1 && (
            <span className="text-xs bg-emerald-700/80 px-2 py-1 rounded font-semibold">
              Streak: {rewardToast.streak} 🔥
            </span>
          )}
        </div>
      )}

      {/* Collapsible Question Grid Drawer */}
      {showQuestionGrid && (
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
            <span>Jump to Question:</span>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Answered
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" /> Flagged
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" /> Unanswered
              </span>
            </div>
          </div>
          <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-1.5 max-h-48 overflow-y-auto p-1">
            {questions.map((q, idx) => {
              const ans = answers[q.id];
              const flagged = flaggedIds.has(q.id);
              const isCurrent = idx === currentIndex;

              let bg = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
              if (ans !== undefined) {
                bg = 'bg-emerald-600 text-white hover:bg-emerald-700 font-semibold';
              }
              if (flagged) {
                bg = 'bg-amber-100 text-amber-900 border border-amber-400 font-semibold';
              }
              if (isCurrent) {
                bg += ' ring-2 ring-slate-900 ring-offset-1';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowQuestionGrid(false);
                  }}
                  className={`h-8 rounded-lg text-xs flex items-center justify-center transition-all ${bg}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        {/* Question Category and Meta */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">{currentQ.topicName}</span>
            <span>·</span>
            <span>Difficulty: <strong className="font-semibold text-slate-700">{currentQ.difficulty}</strong></span>
          </div>
          {currentQ.sourcePage && (
            <span className="text-[11px] text-slate-400">Reference: Page {currentQ.sourcePage}</span>
          )}
        </div>

        {/* Question Text */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
          {currentQ.text}
        </h3>

        {/* 4 Options Grid / Stack */}
        <div className="space-y-3 pt-2">
          {currentQ.options.map((option, optIdx) => {
            const letter = ['A', 'B', 'C', 'D'][optIdx];
            const isSelected = currentAnswer?.selected === optIdx;
            const isCorrectOption = currentQ.correctAnswer === optIdx;

            let cardStyle = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800';
            let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

            if (mode === 'practice' && isAnswered) {
              if (isCorrectOption) {
                cardStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 shadow-xs font-semibold';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !isCorrectOption) {
                cardStyle = 'border-rose-400 bg-rose-50/70 text-rose-950';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
              } else {
                cardStyle = 'border-slate-200 opacity-60 text-slate-600';
              }
            } else if (mode === 'exam' && isSelected) {
              cardStyle = 'border-slate-900 bg-slate-900 text-white shadow-xs';
              badgeStyle = 'bg-white/20 text-white border-transparent';
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(optIdx)}
                disabled={mode === 'practice' && isAnswered}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 group cursor-pointer disabled:cursor-default ${cardStyle}`}
              >
                <span className={`flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold border transition-colors ${badgeStyle}`}>
                  {letter}
                </span>
                <span className="flex-1 text-sm sm:text-base leading-relaxed pt-0.5">
                  {option}
                </span>
                {mode === 'practice' && isAnswered && isCorrectOption && (
                  <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                )}
                {mode === 'practice' && isAnswered && isSelected && !isCorrectOption && (
                  <CloseIcon className="h-5 w-5 text-rose-600 flex-shrink-0 mt-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate Explanation in Practice Mode */}
        {mode === 'practice' && isAnswered && (
          <div className="pt-4 animate-in fade-in duration-300">
            <ConceptExplainer
              explanation={currentQ.explanation}
              keyConcepts={currentQ.keyConcepts}
              sourcePage={currentQ.sourcePage}
            />
          </div>
        )}

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>

          {mode === 'exam' && (
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors"
            >
              <Send className="h-4 w-4" />
              Finish Exam
            </button>
          )}

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
          >
            {currentIndex === questions.length - 1 ? (
              mode === 'practice' ? 'View Results' : 'Review & Submit'
            ) : (
              <>
                Next
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Confirmation Modal for Exam Submission */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">Submit Exam for Grading?</h4>
                <p className="text-xs text-slate-500">Instant correction and detailed analytics will be generated.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Total Questions:</span>
                <strong className="text-slate-900">{questions.length}</strong>
              </div>
              <div className="flex justify-between">
                <span>Answered:</span>
                <strong className="text-emerald-700">{answeredCount}</strong>
              </div>
              <div className="flex justify-between">
                <span>Unanswered:</span>
                <strong className="text-slate-700">{questions.length - answeredCount}</strong>
              </div>
              <div className="flex justify-between">
                <span>Flagged for Review:</span>
                <strong className="text-amber-700">{flaggedIds.size}</strong>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Keep Reviewing
              </button>
              <button
                onClick={handleSubmitFinal}
                className="px-5 py-2 text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-xs"
              >
                Yes, Grade Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
