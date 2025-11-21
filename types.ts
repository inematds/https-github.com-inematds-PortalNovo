export type Category = 'Infraestrutura' | 'Produtividade' | 'Gestão' | 'Desenvolvimento';

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  category: Category;
  thumbnail: string;
  rating: number;
  students: number;
  modules: CourseModule[];
}

export interface CourseModule {
  title: string;
  lessons: string[];
}

export type PageView = 'home' | 'course-detail' | 'ai-advisor';