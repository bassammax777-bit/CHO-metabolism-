import React from 'react';

interface ConceptExplainerProps {
  explanation: string;
  keyConcepts: string[];
  sourcePage?: number;
}

export const ConceptExplainer: React.FC<ConceptExplainerProps> = ({
  explanation,
  keyConcepts,
  sourcePage,
}) => {
  // Highlight occurrences of key concepts or their main terms in the explanation text
  const renderHighlightedExplanation = () => {
    if (!keyConcepts || keyConcepts.length === 0) {
      return explanation;
    }

    // Sort key concepts by length descending so longer phrases match first
    const terms = keyConcepts
      .flatMap((c) => {
        // extract pure phrase and words without parenthesis
        const clean = c.replace(/[()]/g, '').trim();
        return [clean, ...clean.split(' ').filter((w) => w.length > 4)];
      })
      .filter((t, idx, arr) => arr.indexOf(t) === idx && t.length >= 3)
      .sort((a, b) => b.length - a.length);

    if (terms.length === 0) return explanation;

    // Create safe regex pattern
    const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const regex = new RegExp(`(${escaped})`, 'gi');

    const parts = explanation.split(regex);

    return parts.map((part, i) => {
      const isMatch = terms.some((t) => t.toLowerCase() === part.toLowerCase());
      if (isMatch) {
        return (
          <mark
            key={i}
            className="bg-amber-100/80 text-amber-950 font-semibold px-1 py-0.5 rounded transition-colors"
          >
            {part}
          </mark>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <h4 className="text-sm font-bold text-slate-800 tracking-tight">Clinical & Biochemical Rationale</h4>
        </div>
        {sourcePage && (
          <span className="text-xs font-medium text-slate-500">
            Oraby Review · Page {sourcePage}
          </span>
        )}
      </div>

      <div className="text-sm text-slate-700 leading-relaxed space-y-3">
        <p>{renderHighlightedExplanation()}</p>
      </div>

      {keyConcepts && keyConcepts.length > 0 && (
        <div className="mt-4 pt-3 border-t border-slate-100">
          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Core High-Yield Concepts
          </span>
          <div className="flex flex-wrap gap-1.5">
            {keyConcepts.map((concept, index) => (
              <span
                key={index}
                className="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-md transition-colors"
              >
                <span className="text-emerald-600 mr-1.5 font-bold">#</span>
                {concept}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
