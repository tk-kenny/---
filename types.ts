export type Language = 'zh' | 'en';

export enum Category {
  AI_TECH = 'AI_TECH',
  PERSONAL_GROWTH = 'PERSONAL_GROWTH',
  HOBBIES = 'HOBBIES',
  ALL = 'ALL'
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  imageUrl: string;
  content?: string; 
}

export interface Video {
  id: string;
  title: string;
  category: Category;
  date: string;
  imageUrl: string;
  videoUrl: string;
  stats: {
    likes: string;
    comments: string;
    shares: string;
  };
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  coverUrl: string;
  publishDate: string;
  purchaseLink?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}