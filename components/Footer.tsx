import React from 'react';
import { PlayCircle, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
                <PlayCircle className="h-5 w-5 text-white fill-white/20" />
              </div>
              <span className="ml-3 text-xl font-bold tracking-tighter text-white">
                INEMA<span className="text-brand-500">.PRO</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Plataforma de ensino de elite para quem busca liderar o mercado. Tecnologia, comportamento e estratégia em um só lugar.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Explorar</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Todos os Cursos</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Mentor AI</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Conecte-se</h3>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-brand-600 transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-cyan-500 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600 text-center md:text-left">
            © 2024 INEMA.PRO Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
            <span>DESIGNED FOR THE FUTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};