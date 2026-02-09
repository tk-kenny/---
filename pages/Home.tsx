import React, { useState } from 'react';
import { ArrowRight, Mail, ExternalLink, Search, Heart, MessageCircle, Share2, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AVATAR_IMAGE, ARTICLES, BOOKS, UI_TEXT, CATEGORY_LABELS, VIDEOS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TEXT[language];
  const [activeTab, setActiveTab] = useState('Latest');
  
  // Get latest book for Hero section
  const latestBook = BOOKS[language][0];
  
  // Get videos for "Latest Videos" section
  const videos = VIDEOS[language];
  
  // Get articles for the feed list (use all for now)
  const feedArticles = ARTICLES[language];

  return (
    <div className="space-y-20 pb-12">
      {/* 1. Hero Section - The Big Card */}
      <section className="relative w-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-sm overflow-hidden border border-white/10 min-h-[500px] flex items-center">
        {/* Ambient background noise/gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
        
        <div className="w-full grid md:grid-cols-2 gap-12 p-8 md:p-16 relative z-10 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 md:pr-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tight">
                {language === 'zh' ? '用第一性原理，\n重塑你的认知体系' : 'Purpose & Profit – \nA Guide To Discovering Your Life\'s Work'}
              </h1>
              <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
                {language === 'zh' 
                  ? '一本关于在人工智能时代，如何通过写作与思考，构建个人护城河的指南。' 
                  : 'The full guide to building your personal moat through writing and thinking in the age of AI.'}
              </p>
            </div>
            
            <Link 
              to="/books" 
              className="group inline-flex items-center gap-3 text-white border border-white/20 bg-white/5 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowRight className="w-3 h-3" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase">{t.home.view_all}</span>
            </Link>
          </div>

          {/* Right: Visual (Book Cover Style) */}
          <div className="flex justify-center md:justify-end items-center relative">
             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
             
             {/* Book/Content Card */}
             <div className="relative w-64 aspect-[3/4] bg-[#0f0f0f] shadow-2xl shadow-black/50 border border-white/10 flex flex-col items-center justify-center p-6 text-center transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full border border-white/5 flex flex-col justify-between p-4">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">Vol. 1</span>
                    <div className="space-y-2">
                        <div className="w-12 h-12 mx-auto rounded-full overflow-hidden mb-4 border border-white/20">
                            <img src={AVATAR_IMAGE} alt="Avatar" className="w-full h-full object-cover grayscale" />
                        </div>
                        <h3 className="font-serif text-xl text-white italic">{latestBook.title}</h3>
                        <p className="text-[10px] text-zinc-400 uppercase tracking-widest">{t.home.greeting_name}</p>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">{new Date().getFullYear()}</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Latest Videos Section (Modified from Most Popular) */}
      <section className="space-y-8">
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold text-white tracking-wide">{t.home.latest_videos}</h2>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 hover:text-white uppercase transition-colors">
                {t.home.view_all}
            </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video) => (
                <a key={video.id} href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-3 h-full">
                     {/* Video Info & Thumbnail */}
                     <div className="flex gap-4 items-start flex-1">
                        <div className="flex-1 space-y-2">
                            <h3 className="text-sm font-bold text-white leading-snug group-hover:text-accent transition-colors line-clamp-3">
                                {video.title}
                            </h3>
                            <div className="flex flex-col gap-1">
                                 <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{video.date}</span>
                                 <span className="text-[10px] text-zinc-600 uppercase tracking-wider">{CATEGORY_LABELS[language][video.category]}</span>
                            </div>
                        </div>
                        <div className="relative w-24 aspect-video flex-shrink-0 bg-zinc-900 overflow-hidden rounded-sm border border-white/10 group-hover:border-white/30 transition-colors">
                            <img 
                                src={video.imageUrl} 
                                alt={video.title} 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300" 
                            />
                            {/* Play Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="w-6 h-6 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-red-600/90 transition-colors">
                                     <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                                 </div>
                            </div>
                        </div>
                     </div>
                     
                     {/* Stats Row */}
                     <div className="flex items-center gap-5 border-t border-white/5 pt-3 mt-auto">
                        <div className="flex items-center gap-1.5 text-zinc-500 group-hover:text-red-400 transition-colors">
                            <Heart className="w-3 h-3" />
                            <span className="text-[10px] font-medium font-mono">{video.stats.likes}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-500 group-hover:text-blue-400 transition-colors">
                            <MessageCircle className="w-3 h-3" />
                            <span className="text-[10px] font-medium font-mono">{video.stats.comments}</span>
                        </div>
                         <div className="flex items-center gap-1.5 text-zinc-500 group-hover:text-green-400 transition-colors">
                            <Share2 className="w-3 h-3" />
                            <span className="text-[10px] font-medium font-mono">{video.stats.shares}</span>
                        </div>
                     </div>
                </a>
            ))}
        </div>
      </section>

      {/* 3. Feed & Sidebar Section (Split Layout) */}
      <section className="grid lg:grid-cols-12 gap-12 pt-12 border-t border-white/5">
         
         {/* Left Column: Article Feed (8 cols) */}
         <div className="lg:col-span-8 space-y-8">
            {/* Tabs Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
               <div className="flex gap-2">
                  {['Latest', 'Top', 'Discussions'].map((tab) => (
                     <button
                       key={tab}
                       onClick={() => setActiveTab(tab)}
                       className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${
                         activeTab === tab 
                           ? 'bg-zinc-800 text-white' 
                           : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'
                       }`}
                     >
                       {tab === 'Latest' && language === 'zh' ? '最新' : 
                        tab === 'Top' && language === 'zh' ? '热门' : 
                        tab === 'Discussions' && language === 'zh' ? '讨论' : tab}
                     </button>
                  ))}
               </div>
               <div className="relative group">
                  <Search className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors cursor-pointer" />
               </div>
            </div>
            
            {/* Article List */}
            <div className="space-y-8">
               {feedArticles.map((article) => (
                 <Link to="/blog" key={article.id} className="group grid grid-cols-12 gap-6 items-start">
                    <div className="col-span-8 space-y-3">
                       <h3 className="text-xl md:text-2xl font-serif font-medium text-white group-hover:text-zinc-300 transition-colors leading-snug">
                         {article.title}
                       </h3>
                       <p className="text-zinc-400 text-sm font-light leading-relaxed line-clamp-2">
                         {article.excerpt}
                       </p>
                       <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-600 mt-2">
                          <span>{article.date}</span>
                          <span className="w-px h-2 bg-zinc-800"></span>
                          <span>{language === 'zh' ? '陶小开' : 'Tao Xiaokai'}</span>
                       </div>
                    </div>
                    <div className="col-span-4">
                       <div className="aspect-[16/10] overflow-hidden rounded-sm bg-zinc-900 border border-white/10 relative">
                          <img 
                            src={article.imageUrl} 
                            alt={article.title} 
                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                          />
                       </div>
                    </div>
                 </Link>
               ))}
            </div>
         </div>

         {/* Right Column: Sidebar (4 cols) */}
         <div className="lg:col-span-4 space-y-12 pl-0 lg:pl-8">
            
            {/* Profile & Newsletter Widget */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden grayscale border border-white/10">
                        <img src={AVATAR_IMAGE} alt="Tao" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-base">Tao / Proof</h4>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                           {language === 'zh' ? '保持深度思考' : 'stay relevant'}
                        </p>
                    </div>
                </div>
                
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                   <input 
                      type="email"
                      placeholder={language === 'zh' ? "输入邮箱..." : "Type your email..."}
                      className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-3 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors rounded-sm"
                   />
                   <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors">
                      {language === 'zh' ? "订阅更新" : "Subscribe"}
                   </button>
                </form>
            </div>

            {/* Recommendations Widget */}
            <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                      {language === 'zh' ? '推荐阅读' : 'Recommendations'}
                    </h4>
                    <Link to="/books" className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest hover:text-zinc-400">View All 6</Link>
                </div>
                
                <div className="space-y-5">
                    {[
                      { title: 'More To That', author: 'Lawrence Yeo', iconBg: 'bg-blue-500' },
                      { title: 'Dan Go', author: 'Dan Go', iconBg: 'bg-emerald-800' },
                      { title: 'Unsubscribe', author: 'Jack Butcher', iconBg: 'bg-white text-black' },
                      { title: 'Signull vs Noise', author: 'Signull', iconBg: 'bg-zinc-800' },
                      { title: 'Modern Freedom', author: 'Tim Denning', iconBg: 'bg-orange-600' }
                    ].map((item, i) => (
                       <a key={i} href="#" className="flex items-center gap-4 group">
                          <div className={`w-10 h-10 rounded-md ${item.iconBg} flex items-center justify-center text-sm font-bold shadow-lg border border-white/5`}>
                              {item.title === 'Unsubscribe' ? 'U' : item.title[0]}
                          </div>
                          <div className="flex-1">
                              <h5 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">{item.title}</h5>
                              <p className="text-[10px] text-zinc-600 uppercase tracking-wider">{item.author}</p>
                          </div>
                          <ArrowRight className="w-3 h-3 text-zinc-700 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                       </a>
                    ))}
                </div>
            </div>

         </div>
      </section>
    </div>
  );
};

export default Home;