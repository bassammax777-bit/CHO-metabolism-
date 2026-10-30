import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { QuizView } from './components/QuizView';
import { ResultsView } from './components/ResultsView';
import { StudyView } from './components/StudyView';
import { 
  Question, 
  AnswerRecord, 
  QuizMode, 
  TopicId, 
  UserStats, 
  Badge 
} from './types/quiz';
import { 
  ALL_QUESTIONS, 
  getRandomQuestions, 
  getQuestionsByTopic, 
  getQuestionsByIds 
} from './data/questions';
import { 
  loadUserStats, 
  recordSingleAnswer, 
  recordQuizAttempt, 
  toggleSaveQuestion 
} from './utils/storage';
import { BADGES } from './utils/rules';
import { Sparkles, Trophy } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'dashboard' | 'practice' | 'exam' | 'study' | 'bank' | 'results'>('dashboard');
  const [stats, setStats] = useState<UserStats>(() => loadUserStats());
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Active quiz session state
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<Question[]>([]);
  const [activeQuizMode, setActiveQuizMode] = useState<QuizMode>('practice');
  const [quizResults, setQuizResults] = useState<{
    questions: Question[];
    answers: AnswerRecord[];
    timeSpentSec: number;
    mode: QuizMode;
  } | null>(null);

  // Badge unlock celebration toast
  const [newBadgeUnlocked, setNewBadgeUnlocked] = useState<Badge | null>(null);

  // Check URL query parameters (e.g. ?autostart=1 or ?mode=exam)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        startExam(10); // Start 10-question quick quiz for automated checking
      }
    }
  }, []);

  const handleToggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const handleToggleSave = (questionId: number) => {
    toggleSaveQuestion(questionId);
    setStats(loadUserStats());
  };

  const handleRecordSingleAnswer = (isCorrect: boolean, questionId: number, currentStreak: number) => {
    const { newStats } = recordSingleAnswer(isCorrect, questionId, currentStreak);
    setStats(newStats);
  };

  const startExam = (count: number = 100, topicId?: TopicId) => {
    let qList: Question[] = [];
    if (count === 100 && !topicId) {
      qList = [...ALL_QUESTIONS]; // preserve standard ordered board exam
    } else {
      qList = getRandomQuestions(count, topicId);
    }
    setActiveQuizQuestions(qList);
    setActiveQuizMode('exam');
    setCurrentTab('exam');
  };

  const startPractice = (count: number = 20, topicId?: TopicId) => {
    const qList = getRandomQuestions(count, topicId);
    setActiveQuizQuestions(qList);
    setActiveQuizMode('practice');
    setCurrentTab('practice');
  };

  const startWeakPractice = () => {
    if (stats.incorrectQuestionIds.length === 0) return;
    const qList = getQuestionsByIds(stats.incorrectQuestionIds);
    setActiveQuizQuestions(qList);
    setActiveQuizMode('mistakes');
    setCurrentTab('practice');
  };

  const startCustomStudyQuiz = (questions: Question[]) => {
    setActiveQuizQuestions(questions);
    setActiveQuizMode('practice');
    setCurrentTab('practice');
  };

  const handleCompleteQuiz = (records: AnswerRecord[], totalTimeSec: number) => {
    const correctCount = records.filter((r) => r.isCorrect).length;
    const scorePct = Math.round((correctCount / records.length) * 100);

    const attempt = {
      id: `attempt-${Date.now()}`,
      date: new Date().toISOString(),
      mode: activeQuizMode,
      totalQuestions: records.length,
      correctAnswers: correctCount,
      scorePercentage: scorePct,
      timeSpentSec: totalTimeSec,
      answers: records,
    };

    const { updatedStats, newlyUnlocked } = recordQuizAttempt(attempt);
    setStats(updatedStats);

    if (newlyUnlocked.length > 0) {
      const badgeObj = BADGES.find((b) => b.id === newlyUnlocked[0]);
      if (badgeObj) {
        setNewBadgeUnlocked(badgeObj);
        setTimeout(() => setNewBadgeUnlocked(null), 5000);
      }
    }

    setQuizResults({
      questions: activeQuizQuestions,
      answers: records,
      timeSpentSec: totalTimeSec,
      mode: activeQuizMode,
    });
    setCurrentTab('results');
  };

  const handleRetakeIncorrect = (incorrectIds: number[]) => {
    const qList = getQuestionsByIds(incorrectIds);
    setActiveQuizQuestions(qList);
    setActiveQuizMode('mistakes');
    setCurrentTab('practice');
  };

  const handleRetakeAll = () => {
    setActiveQuizQuestions([...activeQuizQuestions]);
    setCurrentTab(activeQuizMode === 'exam' ? 'exam' : 'practice');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab === 'results' ? 'dashboard' : currentTab}
        onSelectTab={(tab) => {
          if (tab === 'exam') {
            startExam(100);
          } else if (tab === 'practice') {
            startPractice(20);
          } else {
            setCurrentTab(tab);
          }
        }}
        stats={stats}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-16">
        {/* Badge celebration notification */}
        {newBadgeUnlocked && (
          <div className="max-w-md mx-auto my-4 px-4">
            <div className="bg-amber-400 text-slate-950 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-amber-300 animate-in slide-in-from-top-4 duration-300">
              <span className="text-3xl">{newBadgeUnlocked.icon}</span>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-900">
                  <Trophy className="h-3.5 w-3.5 inline" />
                  <span>Achievement Unlocked!</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{newBadgeUnlocked.title}</h4>
                <p className="text-xs text-amber-950 font-medium">{newBadgeUnlocked.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Views */}
        {currentTab === 'dashboard' && (
          <DashboardView
            stats={stats}
            onStartExam={(count, topicId) => startExam(count, topicId)}
            onStartPractice={(count, topicId) => startPractice(count, topicId)}
            onStartWeakPractice={startWeakPractice}
            onOpenFlashcards={() => setCurrentTab('study')}
          />
        )}

        {(currentTab === 'practice' || currentTab === 'exam') && activeQuizQuestions.length > 0 && (
          <QuizView
            questions={activeQuizQuestions}
            mode={activeQuizMode}
            soundEnabled={soundEnabled}
            savedQuestionIds={stats.savedQuestionIds}
            onToggleSave={handleToggleSave}
            onRecordSingleAnswer={handleRecordSingleAnswer}
            onCompleteQuiz={handleCompleteQuiz}
            onCancel={() => setCurrentTab('dashboard')}
            userStreak={stats.currentStreak}
          />
        )}

        {currentTab === 'results' && quizResults && (
          <ResultsView
            questions={quizResults.questions}
            answers={quizResults.answers}
            timeSpentSec={quizResults.timeSpentSec}
            mode={quizResults.mode}
            soundEnabled={soundEnabled}
            savedQuestionIds={stats.savedQuestionIds}
            onToggleSave={handleToggleSave}
            onRetakeAll={handleRetakeAll}
            onRetakeIncorrect={handleRetakeIncorrect}
            onBackToDashboard={() => setCurrentTab('dashboard')}
          />
        )}

        {currentTab === 'study' && (
          <StudyView
            initialMode="flashcard"
            savedQuestionIds={stats.savedQuestionIds}
            onToggleSave={handleToggleSave}
            onStartQuizWithFiltered={startCustomStudyQuiz}
          />
        )}

        {currentTab === 'bank' && (
          <StudyView
            initialMode="bank"
            savedQuestionIds={stats.savedQuestionIds}
            onToggleSave={handleToggleSave}
            onStartQuizWithFiltered={startCustomStudyQuiz}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Based on <strong>Oraby’s Illustrated Review of Biochemistry</strong> (Bioenergetics & Carbohydrate Metabolism)
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>100 Board-Style Questions</span>
            <span>·</span>
            <span>Instant Grading & Feedback</span>
            <span>·</span>
            <span>Mobile Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
