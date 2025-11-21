import React from 'react';
import { Sparkles, PlayCircle, Menu, X } from 'lucide-react';
import { PageView } from '../types';

interface HeaderProps {
  onLogoClick: () => void;
  onAIClick: () => void;
  currentView: PageView;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick, onAIClick, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-dark-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={onLogoClick}>
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-brand-600 shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all group-hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-cyan-500 opacity-80"></div>
              <PlayCircle className="relative h-6 w-6 text-white fill-white/20" />
            </div>
            <span className="ml-3 text-2xl font-extrabold tracking-tighter text-white">
              INEMA<span className="text-brand-500">.PRO</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={onLogoClick}
              className={`text-sm font-medium transition-all hover:text-white ${currentView === 'home' ? 'text-white' : 'text-slate-400'}`}
            >
              Catálogo
            </button>
            <button className="text-sm font-medium text-slate-400 transition-all hover:text-white">
              Bootcamps
            </button>
            <button className="text-sm font-medium text-slate-400 transition-all hover:text-white">
              Para Empresas
            </button>
            <div className="h-4 w-px bg-white/10"></div>
            <button 
              onClick={onAIClick}
              className={`group flex items-center gap-2 rounded-full border border-transparent px-4 py-1.5 text-sm font-medium transition-all ${
                currentView === 'ai-advisor' 
                ? 'bg-brand-500/10 text-brand-400 border-brand-500/20' 
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Sparkles className={`h-4 w-4 ${currentView === 'ai-advisor' ? 'text-brand-400' : 'text-slate-500 group-hover:text-brand-400'}`} />
              Mentor AI
            </button>
            <button className="rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-dark-950 px-4 py-4">
          <div className="flex flex-col space-y-4">
            <button onClick={() => { onLogoClick(); setIsMenuOpen(false); }} className="text-left text-base font-medium text-slate-300 hover:text-white">Catálogo</button>
            <button onClick={() => { onAIClick(); setIsMenuOpen(false); }} className="flex items-center gap-2 text-left text-base font-medium text-brand-400">
              <Sparkles className="h-4 w-4" /> Mentor AI
            </button>
            <div className="h-px bg-white/10 my-2"></div>
            <button className="w-full rounded-lg bg-white px-4 py-3 text-center text-sm font-bold text-black">
              Acessar Plataforma
            </button>
          </div>
        </div>
      )}
    </header>
  );
};