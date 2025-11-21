import React, { useState } from 'react';
import { getLearningPathSuggestion } from '../services/geminiService';
import { Sparkles, Send, Loader2, ArrowLeft, Terminal } from 'lucide-react';

interface AIAdvisorProps {
  onBack: () => void;
}

export const AIAdvisor: React.FC<AIAdvisorProps> = ({ onBack }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse(null);
    
    const result = await getLearningPathSuggestion(prompt);
    
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-dark-950 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-dark-950 to-dark-950 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-500 hover:text-white mb-8 transition-colors text-sm font-medium uppercase tracking-wider"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </button>

        <div className="text-center mb-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-600 shadow-[0_0_40px_rgba(124,58,237,0.4)] mb-8">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6 tracking-tight">
            Mentor <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">INEMA</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Inteligência Artificial calibrada para arquitetar sua carreira. Descreva sua ambição e receba um protocolo de estudos.
          </p>
        </div>

        {/* Input Area */}
        <div className="bg-dark-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
          <div className="p-2">
            <form onSubmit={handleSubmit} className="relative bg-black/40 rounded-2xl overflow-hidden border border-white/5 focus-within:border-brand-500/50 focus-within:ring-1 focus-within:ring-brand-500/50 transition-all">
              <div className="relative">
                <textarea
                  id="ai-prompt"
                  rows={3}
                  className="block w-full bg-transparent py-6 pl-6 pr-20 text-white placeholder:text-slate-600 sm:text-lg focus:ring-0 border-none resize-none"
                  placeholder="Ex: Quero me tornar um especialista em Data Science..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isLoading}
                />
                <div className="absolute bottom-4 right-4">
                    <button
                    type="submit"
                    disabled={isLoading || !prompt.trim()}
                    className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
                    >
                    {isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : <Send className="h-5 w-5" />}
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Response Area */}
        {response && (
          <div className="mt-8 border border-brand-500/30 bg-black/40 backdrop-blur rounded-2xl p-8 animate-fade-in shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-cyan-500 to-brand-500"></div>
            
            <div className="flex items-center gap-3 mb-6">
                <Terminal className="h-5 w-5 text-brand-400" />
                <h3 className="text-sm font-bold text-brand-400 uppercase tracking-widest">
                    Protocolo Gerado
                </h3>
            </div>
            
            <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-brand-300">
              <div className="whitespace-pre-wrap">{response}</div>
            </div>
          </div>
        )}
        
        <p className="mt-8 text-center text-xs text-slate-600 font-mono uppercase tracking-widest">
          Powered by Gemini AI v2.5 • Inema.Pro Systems
        </p>
      </div>
    </div>
  );
};