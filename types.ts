export enum Category {
  AI_TECH = 'AI科技',
  PERSONAL_GROWTH = '个人成长',
  HOBBIES = '兴趣爱好',
  ALL = '全部'
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  imageUrl: string;
  content?: string; // Full content for detail view (mocked)
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