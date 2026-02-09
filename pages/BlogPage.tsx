import React, { useState } from 'react';
import { ARTICLES, UI_TEXT, CATEGORY_LABELS } from '../constants';
import { Category, Article } from '../types';
import { Search, ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useSearchParams } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TEXT[language];
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Derive selected category from URL, default to ALL if not present or invalid
  const paramCategory = searchParams.get('category');
  const selectedCategory: Category = 
    (paramCategory && Object.values(Category).includes(paramCategory as Category)) 
      ? (paramCategory as Category) 
      : Category.ALL;

  const [searchQuery, setSearchQuery] = useState('');

  const categories = Object.values(Category);
  const allArticles = ARTICLES[language];

  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory = selectedCategory === Category.ALL || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Function to update URL when filter is clicked
  const handleCategoryChange = (cat: Category) => {
    if (cat === Category.ALL) {
        setSearchParams({});
    } else {
        setSearchParams({ category: cat });
    }
  };

  // Extract the first article as "Featured" and the rest as "Grid"
  const featuredArticle = filteredArticles.length > 0 ? filteredArticles[0] : null;
  const gridArticles = filteredArticles.length > 0 ? filteredArticles.slice(1) : [];

  return (
    <div className="space-y-20 pb-20">
      {/* Header & Newsletter Section */}
      <section className="text-center space-y-8 py-12 md:py-20 border-b border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-white/10"></div>
        
        <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tighter leading-none">
          {t.blog.title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
          {t.blog.subtitle}
        </p>
        
        {/* Minimalist Newsletter Form */}
        <div className="max-w-md mx-auto mt-12">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-1">
                    <Mail className="absolute left-4 top-3.5 h-4 w-4 text-zinc-500" />
                    <input 
                      type="email" 
                      placeholder={language === 'zh' ? "输入您的邮箱..." : "Enter your email..."}
                      className="w-full bg-[#0a0a0a] border border-white/10 px-10 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors rounded-sm"
                    />
                </div>
                <button className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors rounded-sm whitespace-nowrap">
                    {language === 'zh' ? "订阅" : "Subscribe"}
                </button>
            </form>
            <p className="text-[10px] text-zinc-600 mt-4 uppercase tracking-[0.2em]">
                {language === 'zh' ? "加入 5,000+ 读者" : "Join 5,000+ Readers"}
            </p>
        </div>
      </section>

      {/* Filters & Search - Floating Bar */}
      <div className="sticky top-20 z-30 bg-[#050505]/95 backdrop-blur border-b border-white/5 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-8 w-full md:w-auto no-scrollbar justify-center md:justify-start">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all whitespace-nowrap relative py-1 ${
                    selectedCategory === cat
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
                >
                {CATEGORY_LABELS[language][cat]}
                </button>
            ))}
            </div>
            <div className="relative w-full md:w-56 group">
                <input
                    type="text"
                    placeholder={t.blog.search_placeholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 py-1 pl-0 pr-8 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors text-right"
                />
                <Search className="absolute right-0 top-1.5 h-4 w-4 text-zinc-700 group-focus-within:text-white transition-colors" />
            </div>
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="space-y-24">
            {/* Featured Article Layout */}
            {featuredArticle && (
                <Link to="#" className="group relative block">
                   <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                       {/* Image */}
                       <div className="md:col-span-7 order-2 md:order-1 relative">
                          <div className="aspect-[16/10] overflow-hidden rounded-sm bg-zinc-900 relative">
                             {/* Decorative Frame */}
                             <div className="absolute inset-0 border border-white/5 z-10"></div>
                             <img 
                                src={featuredArticle.imageUrl} 
                                alt={featuredArticle.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" 
                             />
                          </div>
                       </div>
                       
                       {/* Content */}
                       <div className="md:col-span-5 order-1 md:order-2 space-y-6">
                           <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-zinc-500">
                              <span className="text-white border-b border-white/20 pb-0.5">{CATEGORY_LABELS[language][featuredArticle.category]}</span>
                              <span>—</span>
                              <span>{featuredArticle.date}</span>
                           </div>
                           <h2 className="text-4xl md:text-5xl font-serif text-white leading-[1.1] group-hover:text-zinc-300 transition-colors">
                              {featuredArticle.title}
                           </h2>
                           <p className="text-zinc-400 text-base leading-relaxed line-clamp-4 font-light">
                              {featuredArticle.excerpt}
                           </p>
                           <div className="pt-4 flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform">
                              {t.blog.read_full} <ArrowRight className="ml-2 h-3 w-3" />
                           </div>
                       </div>
                   </div>
                </Link>
            )}

            {/* Remaining Articles Grid */}
            {gridArticles.length > 0 && (
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <span className="text-xs font-serif italic text-zinc-500">More Articles</span>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
                        {gridArticles.map((article) => (
                            <Link key={article.id} to="#" className="group block space-y-5">
                                <div className="aspect-[3/2] overflow-hidden rounded-sm bg-zinc-900 relative">
                                    <img 
                                        src={article.imageUrl} 
                                        alt={article.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" 
                                    />
                                    <div className="absolute top-3 left-3 bg-black/50 backdrop-blur px-2 py-1 text-[9px] tracking-widest uppercase text-white border border-white/10">
                                        {article.readTime}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="text-[9px] tracking-[0.2em] uppercase text-zinc-500">
                                        {article.date}
                                    </div>
                                    <h3 className="text-2xl font-serif text-white leading-tight group-hover:text-zinc-300 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm font-light leading-relaxed line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 border border-dashed border-white/10 rounded-sm">
          <Search className="h-8 w-8 text-zinc-700 mb-4" />
          <h3 className="text-xl font-serif text-white mb-2">{t.blog.no_results}</h3>
          <p className="text-zinc-500 text-sm font-light">{t.blog.no_results_desc}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;