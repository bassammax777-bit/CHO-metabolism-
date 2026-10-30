import React, { useState } from 'react';
import { 
  Dna, 
  Flame, 
  Volume2, 
  VolumeX, 
  LayoutDashboard, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Menu, 
  X,
  Award
} from 'lucide-react';
import { UserStats } from '../types/quiz';
import { getLevelFromXp } from '../utils/rules';

interface NavbarProps {
  currentTab: 'dashboard' | 'practice' | 'exam' | 'study' | 'bank';
  onSelectTab: (tab: 'dashboard' | 'practice' | 'exam' | 'study' | 'bank') => void;
  stats: UserStats;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  stats,
  soundEnabled,
  onToggleSound,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const levelInfo = getLevelFromXp(stats.xp);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'practice', label: 'Practice Quiz', icon: CheckCircle2 },
    { id: 'exam', label: '100-Q Mock Exam', icon: Award },
    { id: 'study', label: 'Flashcards', icon: Layers },
    { id: 'bank', label: 'Question Bank', icon: BookOpen },
  ] as const;

  const handleNavClick = (tabId: typeof currentTab) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div 
          onClick={() => handleNavClick('dashboard')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-emerald-400 group-hover:scale-105 transition-transform shadow-xs">
            <Dna className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-tight text-slate-900">BioMaster</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                Oraby Review
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
              Bioenergetics & Carbohydrate Metabolism
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & Badges */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Streak indicator */}
          <div 
            title={`Current streak: ${stats.currentStreak} correct in a row`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-50 border border-amber-200/80 rounded-lg text-amber-800 text-xs font-bold"
          >
            <Flame className="h-4 w-4 text-amber-500 fill-amber-500 animate-bounce" />
            <span>{stats.currentStreak}</span>
            <span className="text-[10px] font-normal text-amber-700 hidden lg:inline">streak</span>
          </div>

          {/* Level / XP Mini Pill */}
          <div 
            onClick={() => handleNavClick('dashboard')}
            className="hidden sm:flex flex-col items-end cursor-pointer group"
            title={`${stats.xp} XP total. Level ${levelInfo.level}: ${levelInfo.title}`}
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <span className="text-emerald-600">Lvl {levelInfo.level}</span>
              <span className="text-slate-300">·</span>
              <span className="text-[11px] text-slate-500 font-medium truncate max-w-[110px]">
                {levelInfo.title}
              </span>
            </div>
            <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden mt-0.5">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${levelInfo.progress}%` }}
              />
            </div>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            title={soundEnabled ? 'Sound is ON' : 'Sound is OFF'}
          >
            {soundEnabled ? (
              <Volume2 className="h-4 w-4 text-emerald-600" />
            ) : (
              <VolumeX className="h-4 w-4 text-slate-400" />
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <div className="flex items-center justify-between py-2 border-b border-slate-100 mb-2">
            <span className="text-xs font-semibold text-slate-500">Student Profile</span>
            <span className="text-xs font-bold text-emerald-600">
              Level {levelInfo.level} ({stats.xp} XP)
            </span>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
