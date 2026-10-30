import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  RotateCw, 
  Bookmark, 
  CheckCircle2, 
  Layers, 
  List, 
  ChevronRight, 
  ChevronLeft,
  BookOpen
} from 'lucide-react';
import { Question, TopicId } from '../types/quiz';
import { ALL_QUESTIONS } from '../data/questions';
import { TOPICS } from '../data/topics';
import { ConceptExplainer } from './ConceptExplainer';

interface StudyViewProps {
  initialMode?: 'flashcard' | 'bank';
  savedQuestionIds: number[];
  onToggleSave: (id: number) => void;
  onStartQuizWithFiltered: (questions: Question[]) => void;
}

export const StudyView: React.FC<StudyViewProps> = ({
  initialMode = 'flashcard',
  savedQuestionIds,
  onToggleSave,
  onStartQuizWithFiltered,
}) => {
  const [viewMode, setViewMode] = useState<'flashcard' | 'bank'>(initialMode);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<TopicId | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [onlySaved, setOnlySaved] = useState(false);

  // Flashcard state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter questions
  const filtered = ALL_QUESTIONS.filter((q) => {
    if (selectedTopic !== 'all' && q.topicId !== selectedTopic) return false;
    if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
    if (onlySaved && !savedQuestionIds.includes(q.id)) return false;
    if (searchQuery.trim()) {
      const qText = `${q.text} ${q.explanation} ${q.keyConcepts.join(' ')} ${q.options.join(' ')}`.toLowerCase();
      return qText.includes(searchQuery.toLowerCase());
    }
    return true;
  });

  const currentFlashcard = filtered[currentCardIndex] || filtered[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % (filtered.length || 1));
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6 animate-in fade-in duration-300">
      {/* Title & View Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Curriculum Question Bank & Study Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse, search, and master all 100 biochemistry questions from Prof. Said Oraby’s review.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setViewMode('flashcard')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              viewMode === 'flashcard'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="h-3.5 w-3.5 text-emerald-600" />
            Flashcard Mode
          </button>
          <button
            onClick={() => setViewMode('bank')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              viewMode === 'bank'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <List className="h-3.5 w-3.5 text-slate-600" />
            Full Bank ({filtered.length})
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentCardIndex(0);
              }}
              placeholder="Search concepts, enzymes, diseases (e.g. Von Gierke, cyanide, SGLT-1, Pasteur)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 transition-all"
            />
          </div>

          {/* Topic Select */}
          <select
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value as TopicId | 'all');
              setCurrentCardIndex(0);
            }}
            className="text-xs sm:text-sm py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden text-slate-700"
          >
            <option value="all">All Topics (16 Modules)</option>
            {TOPICS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>

          {/* Difficulty Select */}
          <select
            value={selectedDifficulty}
            onChange={(e) => {
              setSelectedDifficulty(e.target.value);
              setCurrentCardIndex(0);
            }}
            className="text-xs sm:text-sm py-2 px-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden text-slate-700"
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Saved Only Toggle */}
          <button
            onClick={() => {
              setOnlySaved(!onlySaved);
              setCurrentCardIndex(0);
            }}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition-colors ${
              onlySaved
                ? 'bg-blue-50 border-blue-300 text-blue-700'
                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${onlySaved ? 'fill-blue-500' : ''}`} />
            Bookmarks ({savedQuestionIds.length})
          </button>
        </div>

        {/* Results summary & drill button */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>
            Showing <strong className="text-slate-800">{filtered.length}</strong> matching questions
          </span>
          {filtered.length > 0 && (
            <button
              onClick={() => onStartQuizWithFiltered(filtered)}
              className="font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
            >
              Start Practice with these {filtered.length} Qs
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* FLASHCARD MODE */}
      {viewMode === 'flashcard' && (
        <div className="space-y-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-8 space-y-3">
              <BookOpen className="h-10 w-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No matching questions found</h3>
              <p className="text-xs text-slate-500">Try adjusting your topic filter or search keyword.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Card Meta & Navigation */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">Card {currentCardIndex + 1} of {filtered.length}</span>
                  <span>·</span>
                  <span>{currentFlashcard.topicName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToggleSave(currentFlashcard.id)}
                    className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600"
                    title="Bookmark card"
                  >
                    <Bookmark className={`h-4 w-4 ${savedQuestionIds.includes(currentFlashcard.id) ? 'fill-blue-500 text-blue-600' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Interactive Flashcard */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="bg-white border-2 border-slate-200 hover:border-slate-300 rounded-3xl p-6 sm:p-10 min-h-[360px] shadow-sm flex flex-col justify-between cursor-pointer transition-all duration-300"
              >
                {!isFlipped ? (
                  /* FRONT: Question & Options Preview */
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Question #{currentFlashcard.id}
                      </span>
                      <span>Difficulty: {currentFlashcard.difficulty}</span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                      {currentFlashcard.text}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {currentFlashcard.options.map((opt, i) => (
                        <div
                          key={i}
                          className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-600 flex items-start gap-2"
                        >
                          <span className="font-bold text-slate-400">{['A', 'B', 'C', 'D'][i]}.</span>
                          <span>{opt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center pt-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                        <RotateCw className="h-3.5 w-3.5" />
                        Click to flip and reveal correct answer & explanation
                      </span>
                    </div>
                  </div>
                ) : (
                  /* BACK: Answer, Rationale & Highlights */
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Correct Answer: {['A', 'B', 'C', 'D'][currentFlashcard.correctAnswer]}
                      </span>
                      <span className="text-slate-400">Click anywhere to flip back</span>
                    </div>

                    <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-sm font-bold text-emerald-950 flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{currentFlashcard.options[currentFlashcard.correctAnswer]}</span>
                    </div>

                    <ConceptExplainer
                      explanation={currentFlashcard.explanation}
                      keyConcepts={currentFlashcard.keyConcepts}
                      sourcePage={currentFlashcard.sourcePage}
                    />
                  </div>
                )}
              </div>

              {/* Flashcard Bottom Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrevCard}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous Card
                </button>

                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  {isFlipped ? 'Show Question' : 'Reveal Answer'}
                </button>

                <button
                  onClick={handleNextCard}
                  className="flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-bold rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
                >
                  Next Card
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* FULL BANK LIST MODE */}
      {viewMode === 'bank' && (
        <div className="space-y-4">
          {filtered.map((q) => {
            const isSaved = savedQuestionIds.includes(q.id);
            return (
              <div
                key={q.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="font-bold text-slate-800">Q#{q.id}</span>
                      <span>·</span>
                      <span>{q.topicName}</span>
                      <span>·</span>
                      <span>{q.difficulty}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {q.text}
                    </h3>
                  </div>

                  <button
                    onClick={() => onToggleSave(q.id)}
                    className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-500"
                    title="Bookmark question"
                  >
                    <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-blue-500 text-blue-600' : ''}`} />
                  </button>
                </div>

                {/* Options grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {q.options.map((opt, i) => {
                    const isCorrect = q.correctAnswer === i;
                    return (
                      <div
                        key={i}
                        className={`p-2.5 rounded-xl border ${
                          isCorrect
                            ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold'
                            : 'bg-slate-50 border-slate-100 text-slate-600'
                        }`}
                      >
                        <span className="font-bold mr-1.5">{['A', 'B', 'C', 'D'][i]}.</span>
                        {opt}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <ConceptExplainer
                  explanation={q.explanation}
                  keyConcepts={q.keyConcepts}
                  sourcePage={q.sourcePage}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
