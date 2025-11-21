import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseList } from './components/CourseList';
import { AIAdvisor } from './components/AIAdvisor';
import { Footer } from './components/Footer';
import { CourseDetail } from './components/CourseDetail';
import { Course, PageView, Category } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [filterCategory, setFilterCategory] = useState<Category | 'All'>('All');

  const navigateToCourse = (course: Course) => {
    setSelectedCourse(course);
    setCurrentView('course-detail');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setFilterCategory('All');
    window.scrollTo(0, 0);
  };

  const navigateToAI = () => {
    setCurrentView('ai-advisor');
    window.scrollTo(0, 0);
  };

  const handleCategorySelect = (category: Category | 'All') => {
    setFilterCategory(category);
    setCurrentView('home');
    // Scroll to courses section if on home
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-slate-200">
      <Header 
        onLogoClick={navigateToHome} 
        onAIClick={navigateToAI}
        currentView={currentView}
      />

      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero 
              onStartLearning={() => handleCategorySelect('All')} 
              onTryAI={navigateToAI}
            />
            <CourseList 
              onCourseSelect={navigateToCourse} 
              selectedCategory={filterCategory}
              onCategoryChange={handleCategorySelect}
            />
          </>
        )}

        {currentView === 'course-detail' && selectedCourse && (
          <CourseDetail 
            course={selectedCourse} 
            onBack={navigateToHome}
          />
        )}

        {currentView === 'ai-advisor' && (
          <AIAdvisor onBack={navigateToHome} />
        )}
      </main>

      <Footer />
    </div>
  );
}