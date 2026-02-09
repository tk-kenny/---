import React from 'react';
import { ArrowRight, ChevronRight, Terminal, PenTool, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_IMAGE, AVATAR_IMAGE, ARTICLES } from '../constants';

const Home: React.FC = () => {
  const latestArticles = ARTICLES.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-100">
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
          <div className="space-y-6 z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              欢迎来到我的数字花园
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              你好，我是 <span className="text-primary">陶小开</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              探索AI科技的边界，记录个人成长的足迹。我是一名全栈开发者、写作者，也是终身学习的践行者。
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/blog" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-primary hover:bg-blue-700 transition-colors">
                阅读文章
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/timeline" className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                我的经历
              </Link>
            </div>
          </div>
          <div className="relative z-10 flex justify-center md:justify-end">
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img 
                    src={AVATAR_IMAGE} 
                    alt="陶小开" 
                    className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl"
                />
            </div>
          </div>
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-6">
            <Terminal className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">AI 科技探索</h3>
          <p className="text-slate-600">
            深耕大模型应用开发，分享从 Prompt Engineering 到 Agent 构建的实战经验。
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
            <PenTool className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">写作与出版</h3>
          <p className="text-slate-600">
            已出版多本技术与认知类书籍，用文字记录思考，用输出倒逼输入。
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
            <Coffee className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">生活与爱好</h3>
          <p className="text-slate-600">
            热爱摄影、阅读和旅行。相信工作是为了更好地生活，追求Work-Life Balance。
          </p>
        </div>
      </section>

      {/* Latest Articles */}
      <section>
        <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-slate-900">最新更新</h2>
            <Link to="/blog" className="text-primary font-medium hover:text-blue-700 inline-flex items-center">
                查看全部 <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
            {latestArticles.map(article => (
                <Link key={article.id} to={`/blog`} className="group">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-semibold text-slate-700 rounded-full shadow-sm">
                                    {article.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="text-xs text-slate-500 mb-2">{article.date} · {article.readTime} 阅读</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                                {article.excerpt}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
