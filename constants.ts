import { Article, Book, Category, TimelineEvent } from './types';

export const HERO_IMAGE = "https://picsum.photos/800/600";
export const AVATAR_IMAGE = "https://picsum.photos/200/200";

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: '1',
    year: '2024',
    title: '全栈独立开发者',
    description: '正式开启个人品牌建设，上线“陶小开”个人博客，专注于AI应用开发与知识分享。',
  },
  {
    id: '2',
    year: '2023',
    title: '出版第二本书籍',
    description: '发布《AI时代的个人成长》，深入探讨人工智能如何赋能个体。',
  },
  {
    id: '3',
    year: '2021',
    title: '深耕技术领域',
    description: '在知名互联网大厂担任高级工程师，主导多个核心业务系统的重构。',
  },
  {
    id: '4',
    year: '2018',
    title: '初涉职场',
    description: '大学毕业，怀揣梦想进入科技行业，开始积累编程与产品经验。',
  },
];

export const BOOKS: Book[] = [
  {
    id: 'b1',
    title: 'AI时代的个人成长',
    subtitle: '如何利用工具放大你的价值',
    description: '本书探讨了在人工智能飞速发展的今天，普通人如何利用AI工具提升效率，构建核心竞争力，而不是被时代淘汰。',
    coverUrl: 'https://picsum.photos/300/450?random=1',
    publishDate: '2023-05',
  },
  {
    id: 'b2',
    title: '代码之外',
    subtitle: '程序员的认知突围',
    description: '技术不仅仅是代码。本书分享了从技术思维到产品思维、商业思维的转变过程，适合所有渴望突破职业瓶颈的技术人。',
    coverUrl: 'https://picsum.photos/300/450?random=2',
    publishDate: '2020-11',
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Gemini API 实战指南：打造你的第一个AI应用',
    excerpt: 'Google Gemini API 提供了强大的多模态能力。本文将手把手教你如何接入并构建一个智能助手。',
    category: Category.AI_TECH,
    date: '2024-05-20',
    readTime: '8 min',
    imageUrl: 'https://picsum.photos/600/300?random=10'
  },
  {
    id: 'a2',
    title: '早起的奇迹：我如何坚持了1000天',
    excerpt: '自律给我自由。分享我坚持早起的心路历程，以及它如何改变了我的生活状态和工作效率。',
    category: Category.PERSONAL_GROWTH,
    date: '2024-04-15',
    readTime: '5 min',
    imageUrl: 'https://picsum.photos/600/300?random=11'
  },
  {
    id: 'a3',
    title: '摄影入门：用镜头记录生活的美好',
    excerpt: '摄影不仅是技术，更是一门观察的艺术。作为我的核心爱好之一，我想分享一些构图心得。',
    category: Category.HOBBIES,
    date: '2024-03-10',
    readTime: '6 min',
    imageUrl: 'https://picsum.photos/600/300?random=12'
  },
  {
    id: 'a4',
    title: '深度学习中的Transformer架构解析',
    excerpt: 'Transformer已经成为NLP领域的基石。让我们深入浅出地理解它的Attention机制。',
    category: Category.AI_TECH,
    date: '2024-02-28',
    readTime: '12 min',
    imageUrl: 'https://picsum.photos/600/300?random=13'
  },
   {
    id: 'a5',
    title: '阅读清单：2023年对我影响最大的5本书',
    excerpt: '阅读是最低成本的投资。这5本书涵盖了心理学、经济学和历史，强烈推荐。',
    category: Category.PERSONAL_GROWTH,
    date: '2024-01-05',
    readTime: '7 min',
    imageUrl: 'https://picsum.photos/600/300?random=14'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Tao Xiaokai (陶小开), living on his personal website.
Your goal is to answer visitor questions about Tao, his books, his timeline, and his articles based on the following context.
Be polite, professional, yet friendly and engaging. 
If asked about something not in the context, you can politely say you don't know but can help with information about his blog or books.
Respond in the language the user asks (mostly Chinese).

Context:
Name: Tao Xiaokai (陶小开)
Role: Full-stack Developer, Author, Tech Blogger.
Books: 
1. "AI时代的个人成长" (Personal Growth in the AI Era) - published 2023.
2. "代码之外" (Beyond Code) - published 2020.
Timeline:
- 2024: Became independent developer, launched blog.
- 2023: Published second book.
- 2021: Senior Engineer at major tech firm.
- 2018: Graduated and started career.
Interests: AI Technology, Personal Growth, Photography, Reading.
`;
