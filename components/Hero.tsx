import React from 'react';
import { ArrowRight, Play, Zap } from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
  onTryAI: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartLearning, onTryAI }) => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
      {/* Dark Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none mix-blend-overlay"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-medium text-brand-300 mb-8 backdrop-blur-md animate-fade-in-up shadow-[0_0_15px_rgba(139,92,246,0.2)]">
          <Zap className="h-3 w-3 text-brand-400 fill-brand-400" />
          <span>Excelência em Treinamento Corporativo</span>
        </div>
        
        <h1 className="mx-auto max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl mb-8 leading-tight">
          Tecnologia, Nuvem <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-cyan-400 animate-gradient-x">
            & Gestão Estratégica.
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          O <strong>INEMA.PRO</strong> é o seu hub de qualificação profissional. Domine ferramentas essenciais como <strong>Power BI, Windows Server e ITIL</strong> com metodologia focada no mercado.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onStartLearning}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
          >
            Ver Cursos
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button 
            onClick={onTryAI}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-white/5 px-8 py-4 text-base font-semibold text-white border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-brand-500/50"
          >
            <Play className="h-4 w-4 text-brand-400 fill-brand-400" />
            Consultor de Carreira
          </button>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-white/5 pt-12">
          {[
            { label: 'Profissionais Certificados', value: '25k+' },
            { label: 'Cursos Oficiais', value: '80+' },
            { label: 'Instrutores Seniores', value: '30' },
            { label: 'Empresas Atendidas', value: '1.5k' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <dt className="text-xs uppercase tracking-widest text-slate-500 mb-2">{stat.label}</dt>
              <dd className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};