import React from 'react';
import { Course, Category } from '../types';
import { COURSES } from '../constants';
import { Clock, Star, Users, ChevronRight } from 'lucide-react';

interface CourseListProps {
  onCourseSelect: (course: Course) => void;
  selectedCategory: Category | 'All';
  onCategoryChange: (cat: Category | 'All') => void;
}

export const CourseList: React.FC<CourseListProps> = ({ onCourseSelect, selectedCategory, onCategoryChange }) => {
  
  const filteredCourses = selectedCategory === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === selectedCategory);

  const categories: (Category | 'All')[] = ['All', 'Infraestrutura', 'Produtividade', 'Gestão', 'Desenvolvimento'];

  return (
    <section id="courses-section" className="py-24 bg-dark-950 relative">
        {/* Divider line visual */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-900 to-transparent opacity-50"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Catálogo de Treinamentos</h2>
            <p className="mt-2 text-slate-400 max-w-lg">Formação oficial e prática para impulsionar sua carreira em TI e Negócios.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-full border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat === 'All' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              onClick={() => onCourseSelect(course)}
              className="group relative cursor-pointer flex flex-col overflow-hidden rounded-2xl bg-dark-900 border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-2"
            >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative h-52 overflow-hidden">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 rounded bg-black/60 backdrop-blur border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                  {course.category}
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-brand-400 transition-colors">{course.title}</h3>
                <p className="text-sm text-slate-400 mb-6 line-clamp-2 flex-grow leading-relaxed">{course.description}</p>
                
                <div className="mt-auto flex items-center justify-between text-xs font-medium text-slate-500 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-brand-500" />
                    <span className="text-slate-300">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-slate-300">{course.rating}</span>
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};