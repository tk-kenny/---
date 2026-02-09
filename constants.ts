import { Article, Book, Category, TimelineEvent, Language, Video } from './types';

export const HERO_IMAGE = "https://picsum.photos/800/600";
// 使用 UI Avatars 生成名字首字母头像，确保图片始终能加载
export const AVATAR_IMAGE = "https://ui-avatars.com/api/?name=Tao+Xiaokai&background=2563eb&color=fff&size=256";

export const CONTACT_INFO = {
  social: {
    x: 'https://twitter.com',
    youtube: 'https://youtube.com',
    douyin: 'https://www.douyin.com',
  },
  qrCodes: {
    // 替换为您真实的二维码图片地址
    wechat: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TaoXiaokai_WeChat&bgcolor=ffffff&color=000000',
    whatsapp: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TaoXiaokai_WhatsApp&bgcolor=ffffff&color=000000',
  }
};

export const UI_TEXT = {
  zh: {
    nav: {
      home: '首页',
      contact: '联系我',
      ai_cognition: 'AI 认知',
      model_record: '记录模型 1.0',
      books: '我的书籍'
    },
    footer: {
      rights: '保留所有权利',
    },
    home: {
      badge: '欢迎来到我的数字花园',
      greeting_prefix: '你好，我是',
      greeting_name: '陶小开',
      intro: '一位 33 岁的 AI 实战创业者与高尔夫玩家，坚持用第一性原理思考，真实记录一个普通人在数字化浪潮与户外旷野中的进化足迹。',
      btn_blog: '阅读文章',
      btn_timeline: '我的经历',
      latest_videos: '最新视频',
      view_all: '查看全部',
      features: {
        tech: { title: 'AI 科技探索', desc: '深耕大模型应用开发，分享从 Prompt Engineering 到 Agent 构建的实战经验。' },
        writing: { title: '写作与出版', desc: '著有《流量掘金》等书籍，并正在筹备AI运营领域的全新著作。用文字记录思考，用输出倒逼输入。' },
        life: { title: '生活与爱好', desc: '热爱摄影、阅读和旅行。相信工作是为了更好地生活，追求Work-Life Balance。' }
      }
    },
    timeline: {
      title: '时间线',
      subtitle: '记录重要时刻，见证每一次蜕变',
      continued: '未完待续...',
      connect_title: '保持连接',
      scan_to_chat: '扫码沟通'
    },
    blog: {
      title: '文章 & 思考',
      subtitle: '分享关于技术、成长与生活的深度观察。',
      search_placeholder: '搜索文章...',
      no_results: '没有找到相关文章',
      no_results_desc: '尝试更换关键词或分类看看',
      read_full: '阅读全文'
    },
    books: {
      title: '我的书籍',
      subtitle: '写作是我督促成长、整理思维、沉淀认知的方式。',
      published: '已出版',
      upcoming: '敬请期待',
      buy_btn: '购买实体书',
      preview_btn: '试读样章',
      subscribe_btn: '订阅动态',
      not_available_btn: '暂未发售',
      quote: '"一本书就是一个世界。通过写作，我将那个时刻的认知封存，期待在未来的某个时刻与读者在思想上相遇。"'
    },
    chat: {
      init: '你好！我是陶小开的AI助手。你想了解关于陶小开的什么信息？比如他的书籍、经历或者最新文章。',
      placeholder: '问我关于陶小开的事情...',
      thinking: '思考中...'
    }
  },
  en: {
    nav: {
      home: 'Home',
      contact: 'Contact',
      ai_cognition: 'AI Cognition',
      model_record: 'Model Record 1.0',
      books: 'My Books'
    },
    footer: {
      rights: 'All Rights Reserved.',
    },
    home: {
      badge: 'Welcome to my Digital Garden',
      greeting_prefix: 'Hi, I am',
      greeting_name: 'Tao Xiaokai',
      intro: 'A 33-year-old AI entrepreneur and golf enthusiast, committed to first-principles thinking, authentically documenting the evolutionary journey of an ordinary individual amidst the digital wave and the outdoor wilderness.',
      btn_blog: 'Read Articles',
      btn_timeline: 'My Journey',
      latest_videos: 'Latest Videos',
      view_all: 'View All',
      features: {
        tech: { title: 'AI Tech Exploration', desc: 'Deep diving into LLM application development, sharing practical experience from Prompt Engineering to Agent building.' },
        writing: { title: 'Writing & Publishing', desc: 'Author of "Traffic Gold Mining" and currently working on a new book about AI Operations. Writing to think, outputting to learn.' },
        life: { title: 'Life & Hobbies', desc: 'Passionate about photography, reading, and travel. Believing that we work to live better, pursuing Work-Life Balance.' }
      }
    },
    timeline: {
      title: 'Timeline',
      subtitle: 'Recording key moments, witnessing every transformation.',
      continued: 'To be continued...',
      connect_title: 'Stay Connected',
      scan_to_chat: 'Scan to Chat'
    },
    blog: {
      title: 'Articles & Thoughts',
      subtitle: 'Sharing deep observations on technology, growth, and life.',
      search_placeholder: 'Search articles...',
      no_results: 'No articles found',
      no_results_desc: 'Try different keywords or categories.',
      read_full: 'Read More'
    },
    books: {
      title: 'My Books',
      subtitle: 'Writing is my way of driving growth, organizing thoughts, and crystallizing cognition.',
      published: 'Published',
      upcoming: 'Coming Soon',
      buy_btn: 'Buy Book',
      preview_btn: 'Read Sample',
      subscribe_btn: 'Get Updates',
      not_available_btn: 'Not Available',
      quote: '"A book is a world. Through writing, I seal the cognition of that moment, hoping to meet readers intellectually at some future point."'
    },
    chat: {
      init: 'Hello! I am Tao Xiaokai\'s AI Assistant. What would you like to know about Tao? Ask me about his books, journey, or latest articles.',
      placeholder: 'Ask me anything about Tao...',
      thinking: 'Thinking...'
    }
  }
};

export const CATEGORY_LABELS = {
  zh: {
    [Category.AI_TECH]: 'AI科技',
    [Category.PERSONAL_GROWTH]: '个人成长',
    [Category.HOBBIES]: '兴趣爱好',
    [Category.ALL]: '全部'
  },
  en: {
    [Category.AI_TECH]: 'AI Tech',
    [Category.PERSONAL_GROWTH]: 'Growth',
    [Category.HOBBIES]: 'Hobbies',
    [Category.ALL]: 'All'
  }
};

export const VIDEOS: Record<Language, Video[]> = {
  zh: [
    {
      id: 'v1',
      title: '从0构建你的私有知识库：RAG实战解析',
      category: Category.AI_TECH,
      date: '2024-05-25',
      imageUrl: 'https://picsum.photos/400/300?random=20',
      videoUrl: 'https://www.youtube.com',
      stats: { likes: '2.4k', comments: '142', shares: '580' }
    },
    {
      id: 'v2',
      title: '我的一天：作为AI创业者如何平衡工作与生活',
      category: Category.PERSONAL_GROWTH,
      date: '2024-05-18',
      imageUrl: 'https://picsum.photos/400/300?random=21',
      videoUrl: 'https://www.youtube.com',
      stats: { likes: '1.8k', comments: '320', shares: '120' }
    },
    {
      id: 'v3',
      title: '深度评测：GPT-4o vs Gemini 1.5 Pro',
      category: Category.AI_TECH,
      date: '2024-05-10',
      imageUrl: 'https://picsum.photos/400/300?random=22',
      videoUrl: 'https://www.youtube.com',
      stats: { likes: '5.6k', comments: '890', shares: '2.1k' }
    },
    {
      id: 'v4',
      title: '高尔夫挥杆进阶：如何打出完美一击',
      category: Category.HOBBIES,
      date: '2024-04-28',
      imageUrl: 'https://picsum.photos/400/300?random=23',
      videoUrl: 'https://www.youtube.com',
      stats: { likes: '950', comments: '68', shares: '45' }
    }
  ],
  en: [
    {
      id: 'v1',
      title: 'Building Your Private Knowledge Base: RAG Tutorial',
      category: Category.AI_TECH,
      date: 'May 25, 2024',
      imageUrl: 'https://picsum.photos/400/300?random=20',
      videoUrl: 'https://www.youtube.com',
      stats: { likes: '2.4k', comments: '142', shares: '580' }
    },
    {
      id: 'v2',
      title: 'Day in the Life: Balancing Work & Life as an AI Founder',
      category: Category.PERSONAL_GROWTH,
      date: 'May 18, 2024',
      imageUrl: 'https://picsum.photos/400/300?random=21',
      videoUrl: 'https://www.youtube.com',
      stats: { likes: '1.8k', comments: '320', shares: '120' }
    },
    {
      id: 'v3',
      title: 'Deep Dive: GPT-4o vs Gemini 1.5 Pro',
      category: Category.AI_TECH,
      date: 'May 10, 2024',
      imageUrl: 'https://picsum.photos/400/300?random=22',
      videoUrl: 'https://www.youtube.com',
      stats: { likes: '5.6k', comments: '890', shares: '2.1k' }
    },
    {
      id: 'v4',
      title: 'Golf Swing Mastery: Hitting the Perfect Shot',
      category: Category.HOBBIES,
      date: 'Apr 28, 2024',
      imageUrl: 'https://picsum.photos/400/300?random=23',
      videoUrl: 'https://www.youtube.com',
      stats: { likes: '950', comments: '68', shares: '45' }
    }
  ]
};

export const TIMELINE_EVENTS: Record<Language, TimelineEvent[]> = {
  zh: [
    {
      id: '1',
      year: '2025.10',
      title: '进军AI领域',
      description: '正式进入AI行业，深耕AI客服行业和AI量化交易两个核心板块，探索人工智能的商业落地。',
    },
    {
      id: '2',
      year: '2022',
      title: '福布斯精英',
      description: '凭借在数字营销与私域增长领域的杰出贡献，荣登福布斯中国 30 Under 30 榜单。',
    },
    {
      id: '3',
      year: '2022',
      title: '出版著作',
      description: '出版书籍《流量掘金：裂变增长私域新视角》，系统总结了私域流量运营的方法论。',
    },
    {
      id: '4',
      year: '2015.10',
      title: '微信生态创业',
      description: '投身微信生态创业浪潮，相继参与社群管家、社群直播、社群裂变工具、个人号SCRM及企业微信SCRM系统的研发与运营。',
    },
    {
      id: '5',
      year: '2014.06',
      title: '行业峰会发起人',
      description: '发起并举办“中国首届O2O产业峰会”，汇聚行业领袖，探讨线上线下融合的新机遇。',
    },
    {
      id: '6',
      year: '2012.07',
      title: '北漂启程',
      description: '带着梦想与懵懂开启北漂生涯，进入媒体行业成为一名记者，观察并记录商业世界的变迁。',
    },
  ],
  en: [
    {
      id: '1',
      year: 'Oct 2025',
      title: 'Entering the AI Era',
      description: 'Officially entered the AI industry, focusing on two core sectors: AI Customer Service and AI Quantitative Trading, exploring commercial applications of artificial intelligence.',
    },
    {
      id: '2',
      year: 'Late 2022',
      title: 'Forbes 30 Under 30',
      description: 'Honored on the Forbes China 30 Under 30 list for outstanding contributions in digital marketing and private domain growth.',
    },
    {
      id: '3',
      year: '2022',
      title: 'Published Author',
      description: 'Published "Traffic Gold Mining: A New Perspective on Fission Growth in Private Domain", systematically summarizing methodologies for private domain traffic operations.',
    },
    {
      id: '4',
      year: 'Oct 2015',
      title: 'WeChat Ecosystem Startup',
      description: 'Dived into the WeChat ecosystem startup wave. Successively participated in projects like Community Manager, Community Live Streaming, Fission Tools, Personal WeChat SCRM, and Enterprise WeChat SCRM systems.',
    },
    {
      id: '5',
      year: 'Jun 2014',
      title: 'Industry Summit Initiator',
      description: 'Initiated and hosted the "First China O2O Industry Summit", gathering industry leaders to discuss new opportunities in Online-to-Offline integration.',
    },
    {
      id: '6',
      year: 'Jul 2012',
      title: 'Journey to Beijing',
      description: 'Started the journey in Beijing ("Bei Piao") with dreams and curiosity. Entered the media industry as a reporter, observing and recording changes in the business world.',
    },
  ]
};

export const BOOKS: Record<Language, Book[]> = {
  zh: [
    {
      id: 'b1',
      title: '流量掘金',
      subtitle: '裂变增长私域新视角',
      description: '本书系统性地拆解了私域流量的运营逻辑，从引流、裂变到转化，提供了丰富的实战案例和方法论，帮助企业和个人构建私域增长引擎。',
      // 替换为本地图片，请将您的书籍封面重命名为 book_cover_traffic_gold.png 并放置在项目的 public 目录或根目录下
      coverUrl: './book_cover_traffic_gold.png',
      publishDate: '2022年',
    },
    {
      id: 'b2',
      title: 'AI 客服运营指南',
      subtitle: '智能时代的客户服务变革',
      description: '（筹备中）本书将深入探讨人工智能如何重塑客户服务体系。从大模型选型、知识库构建到人机协作模式，为企业提供全方位的AI客服落地指南。',
      coverUrl: 'https://picsum.photos/300/450?random=2',
      publishDate: '2026年 (预计)',
    }
  ],
  en: [
    {
      id: 'b1',
      title: 'Traffic Gold Mining',
      subtitle: 'New Perspective on Fission Growth',
      description: 'Systematically deconstructs the operation logic of private domain traffic, offering rich practical cases and methodologies to help build growth engines.',
      // 替换为本地图片，请将您的书籍封面重命名为 book_cover_traffic_gold.png 并放置在项目的 public 目录或根目录下
      coverUrl: './book_cover_traffic_gold.png',
      publishDate: '2022',
    },
    {
      id: 'b2',
      title: 'AI Customer Service Guide',
      subtitle: 'Customer Service in the Intelligent Era',
      description: '(In Preparation) Explores how AI reshapes customer service systems. From LLM selection to knowledge base construction and human-AI collaboration.',
      coverUrl: 'https://picsum.photos/300/450?random=2',
      publishDate: '2026 (Expected)',
    }
  ]
};

export const ARTICLES: Record<Language, Article[]> = {
  zh: [
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
  ],
  en: [
    {
      id: 'a1',
      title: 'Gemini API Guide: Build Your First AI App',
      excerpt: 'Google Gemini API offers powerful multimodal capabilities. This guide will show you how to integrate it and build a smart assistant.',
      category: Category.AI_TECH,
      date: 'May 20, 2024',
      readTime: '8 min',
      imageUrl: 'https://picsum.photos/600/300?random=10'
    },
    {
      id: 'a2',
      title: 'The Miracle of Waking Up Early: 1000 Days Journey',
      excerpt: 'Discipline brings freedom. Sharing my journey of waking up early and how it changed my life and efficiency.',
      category: Category.PERSONAL_GROWTH,
      date: 'Apr 15, 2024',
      readTime: '5 min',
      imageUrl: 'https://picsum.photos/600/300?random=11'
    },
    {
      id: 'a3',
      title: 'Photography 101: Capturing Life\'s Beauty',
      excerpt: 'Photography is not just technique, but the art of observation. Sharing some composition tips as one of my core hobbies.',
      category: Category.HOBBIES,
      date: 'Mar 10, 2024',
      readTime: '6 min',
      imageUrl: 'https://picsum.photos/600/300?random=12'
    },
    {
      id: 'a4',
      title: 'Understanding Transformer Architecture in Deep Learning',
      excerpt: 'Transformer has become the cornerstone of NLP. Let\'s dive into its Attention mechanism in simple terms.',
      category: Category.AI_TECH,
      date: 'Feb 28, 2024',
      readTime: '12 min',
      imageUrl: 'https://picsum.photos/600/300?random=13'
    },
    {
      id: 'a5',
      title: 'Reading List: 5 Books That Shaped My 2023',
      excerpt: 'Reading is the lowest cost investment. These 5 books cover psychology, economics, and history.',
      category: Category.PERSONAL_GROWTH,
      date: 'Jan 05, 2024',
      readTime: '7 min',
      imageUrl: 'https://picsum.photos/600/300?random=14'
    }
  ]
};

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Tao Xiaokai (陶小开), living on his personal website.
Your goal is to answer visitor questions about Tao, his books, his timeline, and his articles based on the following context.
Be polite, professional, yet friendly and engaging. 
Respond in the language the user asks (Chinese or English).

Context:
Name: Tao Xiaokai (陶小开)
Role: Entrepreneur, Author, AI Practitioner.
Key Achievements:
- Forbes China 30 Under 30 (2022).
- Initiator of "China's First O2O Industry Summit" (2014).
- Serial entrepreneur in WeChat ecosystem (SCRM, Community tools) since 2015.
Current Focus (since 2025): AI Customer Service & AI Quantitative Trading.

Books: 
1. "流量掘金：裂变增长私域新视角" (Traffic Gold Mining) - Published 2022.
2. "AI 客服运营指南" (AI Customer Service Operations Guide) - Expected publication 2026.

Timeline Highlights:
- 2025.10: Entered AI industry (Customer Service & Quant Trading).
- 2022: Forbes 30U30 & Published "Traffic Gold Mining".
- 2015.10: WeChat ecosystem startups.
- 2014.06: O2O Industry Summit.
- 2012.07: Started career in Beijing as a reporter.
`;