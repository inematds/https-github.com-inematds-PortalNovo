import React from 'react';
import { Course } from '../types';
import { ArrowLeft, Clock, Star, Users, PlayCircle, CheckCircle2, Lock, Award } from 'lucide-react';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack }) => {
  return (
    <div className="bg-dark-950 min-h-screen pb-20">
      {/* Header/Hero for Course */}
      <div className="bg-dark-900 border-b border-white/5 py-12 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-900/30 via-transparent to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm uppercase tracking-wider font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </button>
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center rounded bg-brand-500/10 border border-brand-500/20 px-3 py-1 text-xs font-bold text-brand-300 uppercase tracking-wider mb-6">
                {course.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">{course.title}</h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">{course.description}</p>
              
              <div className="flex flex-wrap gap-8 text-sm font-medium text-slate-300 mb-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                     <Clock className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Duração</p>
                    <p className="text-white">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Avaliação</p>
                    <p className="text-white">{course.rating} / 5.0</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <Users className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Comunidade</p>
                    <p className="text-white">{course.students.toLocaleString()} alunos</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 max-w-md">
                <img 
                    src={`https://ui-avatars.com/api/?name=${course.instructor}&background=random&color=fff`} 
                    alt={course.instructor}
                    className="h-12 w-12 rounded-full border-2 border-dark-900" 
                />
                <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Instrutor(a)</p>
                    <p className="font-bold text-white">{course.instructor}</p>
                </div>
              </div>
            </div>

            {/* Sticky Card (Desktop) */}
            <div className="w-full lg:w-[420px] flex-shrink-0">
                <div className="bg-dark-800 rounded-3xl p-3 border border-white/10 shadow-2xl shadow-black/50">
                    <div className="relative rounded-2xl overflow-hidden aspect-video mb-4 group cursor-pointer">
                        <img src={course.thumbnail} alt="Preview" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-all">
                            <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                                <PlayCircle className="h-8 w-8 text-white fill-white" />
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <button className="w-full rounded-xl bg-brand-600 px-4 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-500 transition-all hover:scale-[1.02] mb-4">
                            Iniciar Agora (Grátis)
                        </button>
                        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
                            <Award className="h-4 w-4" />
                            <span>Certificado INEMA.PRO incluso</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
            {/* Modules */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <span className="h-8 w-1 bg-brand-500 rounded-full"></span>
                    Estrutura do Curso
                </h2>
                <div className="space-y-6">
                    {course.modules.map((module, idx) => (
                        <div key={idx} className="border border-white/5 bg-dark-900 rounded-2xl overflow-hidden">
                            <div className="bg-white/5 px-6 py-5 border-b border-white/5 flex justify-between items-center">
                                <h3 className="font-bold text-slate-200">Módulo 0{idx + 1}: {module.title}</h3>
                                <span className="text-xs text-slate-500 font-mono border border-white/10 px-2 py-1 rounded">{module.lessons.length} aulas</span>
                            </div>
                            <div className="divide-y divide-white/5">
                                {module.lessons.map((lesson, lIdx) => (
                                    <div key={lIdx} className="px-6 py-4 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
                                        {idx === 0 && lIdx === 0 ? (
                                            <div className="h-8 w-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                                                <PlayCircle className="h-4 w-4 text-brand-400 fill-brand-400/20" />
                                            </div>
                                        ) : (
                                            <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                                                <Lock className="h-4 w-4 text-slate-600" />
                                            </div>
                                        )}
                                        <span className={`text-sm font-medium ${idx === 0 && lIdx === 0 ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                                            {lesson}
                                        </span>
                                        {idx === 0 && lIdx === 0 && (
                                            <span className="ml-auto text-[10px] font-bold text-brand-400 uppercase tracking-wider px-2 py-1 bg-brand-500/10 rounded border border-brand-500/20">Disponível</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Requirements */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="h-8 w-1 bg-cyan-500 rounded-full"></span>
                    O que você vai dominar
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[1,2,3,4].map((i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-dark-900 border border-white/5 hover:border-brand-500/30 transition-colors">
                            <CheckCircle2 className="h-6 w-6 text-brand-500 flex-shrink-0" />
                            <span className="text-sm text-slate-400 leading-relaxed">Aprenda metodologias avançadas utilizadas pelas maiores empresas de tecnologia do mundo.</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};