import React from 'react';
import { BOOKS } from '../constants';
import { Star, ShoppingBag, BookOpen } from 'lucide-react';

const BooksPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">我的书籍</h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          写作是我整理思维、沉淀认知的方式。这里展示了我已出版的作品，希望能给你的成长带来一些启发。
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {BOOKS.map((book) => (
          <div key={book.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-8 hover:shadow-xl transition-shadow duration-300">
            {/* Book Cover */}
            <div className="flex-shrink-0 w-full sm:w-48 mx-auto sm:mx-0 relative group">
                <div className="absolute inset-0 bg-slate-900/10 rounded-lg transform rotate-3 translate-x-2 translate-y-2 group-hover:rotate-6 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                <img 
                    src={book.coverUrl} 
                    alt={book.title} 
                    className="relative w-full h-auto rounded-lg shadow-lg object-cover aspect-[2/3]" 
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3">
                    已出版 · {book.publishDate}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">{book.title}</h2>
                <h3 className="text-lg font-medium text-slate-500 mb-4">{book.subtitle}</h3>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                {book.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                    <ShoppingBag className="h-4 w-4" />
                    购买实体书
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                    <BookOpen className="h-4 w-4" />
                    试读样章
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 p-8 opacity-10">
            <Star className="w-32 h-32 text-white" />
        </div>
        <blockquote className="relative z-10 max-w-3xl mx-auto space-y-6">
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
            "一本书就是一个世界。通过写作，我将那个时刻的认知封存，期待在未来的某个时刻与读者在思想上相遇。"
            </p>
            <footer className="text-slate-400 font-medium">—— 陶小开</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default BooksPage;
