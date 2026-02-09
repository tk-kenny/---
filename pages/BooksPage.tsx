import React from 'react';
import { BOOKS, UI_TEXT } from '../constants';
import { Star, ShoppingBag, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BooksPage: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TEXT[language];
  const books = BOOKS[language];

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="text-center mb-24 space-y-6">
        <h1 className="text-6xl font-serif text-white tracking-tight">{t.books.title}</h1>
        <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          {t.books.subtitle}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {books.map((book, index) => {
          const isUpcoming = book.publishDate.includes('预计') || book.publishDate.includes('Expected') || book.publishDate.includes('2026');
          
          return (
            <div key={book.id} className="group flex flex-col gap-10">
              {/* CSS Editorial Book Cover */}
              <div className="relative w-full max-w-sm mx-auto aspect-[2/3] bg-[#0a0a0a] rounded-sm shadow-2xl border border-white/10 transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-white/5">
                  
                  {/* Spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/10 to-transparent z-20"></div>
                  
                  {/* Cover Design */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between overflow-hidden">
                      {/* Abstract Bg */}
                      <div className={`absolute inset-0 opacity-20 ${index === 0 ? 'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-700 via-yellow-900 to-black' : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-[#0a0a0a] to-black'}`}></div>
                      
                      {/* Top text */}
                      <div className="relative z-10 text-center">
                          <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 block mb-2">
                             {language === 'zh' ? '陶小开 著' : 'A Book By Tao Xiaokai'}
                          </span>
                          <div className="w-8 h-px bg-white/20 mx-auto"></div>
                      </div>

                      {/* Main Title */}
                      <div className="relative z-10 text-center space-y-2">
                          <h2 className={`font-serif text-4xl leading-tight text-transparent bg-clip-text bg-gradient-to-b ${index === 0 ? 'from-amber-100 to-amber-600' : 'from-blue-100 to-blue-600'}`}>
                            {book.title}
                          </h2>
                          <p className="text-xs text-zinc-400 font-sans tracking-wide uppercase px-4">
                              {book.subtitle}
                          </p>
                      </div>

                      {/* Bottom branding */}
                      <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-4">
                          <span className="text-[10px] font-mono text-zinc-600">{book.publishDate}</span>
                          <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center">
                             <span className="text-[8px] text-white">TK</span>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col items-center text-center space-y-6">
                <div>
                   <span className={`inline-block px-2 py-1 text-[10px] font-bold tracking-widest uppercase mb-4 border ${
                    isUpcoming ? 'text-amber-500 border-amber-500/30' : 'text-green-500 border-green-500/30'
                  }`}>
                      {isUpcoming ? t.books.upcoming : t.books.published}
                  </span>
                  <p className="text-zinc-400 leading-relaxed font-light text-sm max-w-md mx-auto">
                    {book.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  {isUpcoming ? (
                     <button className="w-full sm:w-48 flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-zinc-500 cursor-not-allowed text-xs font-bold tracking-widest uppercase">
                        {t.books.not_available_btn}
                    </button>
                  ) : (
                    <button className="w-full sm:w-48 flex items-center justify-center gap-2 px-6 py-3 bg-white text-black hover:bg-zinc-200 transition-colors text-xs font-bold tracking-widest uppercase">
                        <ShoppingBag className="h-3 w-3" />
                        {t.books.buy_btn}
                    </button>
                  )}
                  
                  <button className="w-full sm:w-48 flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-colors text-xs font-bold tracking-widest uppercase">
                      <BookOpen className="h-3 w-3" />
                      {isUpcoming ? t.books.subscribe_btn : t.books.preview_btn}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote Section */}
      <div className="mt-32 border-t border-white/5 pt-20 text-center relative">
        <Star className="w-6 h-6 text-white mx-auto mb-8 animate-pulse" />
        <blockquote className="max-w-3xl mx-auto space-y-8">
            <p className="text-3xl md:text-4xl font-serif italic leading-normal text-zinc-300">
            {t.books.quote}
            </p>
            <footer className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">—— {language === 'zh' ? '陶小开' : 'Tao Xiaokai'}</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default BooksPage;