import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Twitter, Linkedin, Search, Share2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { UI_TEXT } from '../constants';
import { Category } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = UI_TEXT[language];

  // Mapping new nav items to existing routes with queries
  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.contact, path: '/timeline' }, // Changed to Timeline page
    { name: t.nav.ai_cognition, path: `/blog?category=${Category.AI_TECH}` }, // Mapped to AI Tech
    { name: t.nav.model_record, path: `/blog?category=${Category.PERSONAL_GROWTH}` }, // Mapped to Personal Growth
    { name: t.nav.books, path: '/books' },
  ];

  const isActive = (linkPath: string) => {
    const currentPath = location.pathname;
    const currentSearch = location.search;

    if (linkPath === '/') return currentPath === '/' && (!currentSearch || currentSearch === '');
    if (linkPath.startsWith('#')) return false;

    const [pathBase, queryString] = linkPath.split('?');

    // Check base path match
    if (currentPath !== pathBase) return false;

    // If the link has query params, check if they match the current URL params
    if (queryString) {
      const linkParams = new URLSearchParams(queryString);
      const currentParams = new URLSearchParams(currentSearch);
      
      let match = true;
      linkParams.forEach((value, key) => {
        if (currentParams.get(key) !== value) {
          match = false;
        }
      });
      return match;
    }

    // If link has no query params, it matches the base path
    return true;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-zinc-100 font-sans selection:bg-white selection:text-black">
      {/* Header Container */}
      <header className="sticky top-0 z-40 w-full bg-[#050505]/95 backdrop-blur-md">
        
        {/* Top Row: Logo | Title | Actions */}
        <div className="border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    
                    {/* Left: Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm transition-transform hover:scale-110">
                            <span className="font-serif font-bold text-lg">T</span>
                        </Link>
                    </div>

                    {/* Center: Brand Name */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                        <Link to="/" className="text-xl font-bold text-white tracking-[0.2em] font-serif uppercase hover:text-zinc-300 transition-colors">
                            {language === 'zh' ? '陶小开' : 'Tao Xiaokai'}
                        </Link>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-6">
                        <button className="text-zinc-400 hover:text-white transition-colors">
                             <Search className="w-5 h-5" />
                        </button>
                        <button className="hidden md:block text-zinc-400 hover:text-white transition-colors">
                             <Share2 className="w-5 h-5" />
                        </button>
                        <div className="w-px h-4 bg-zinc-800 hidden md:block"></div>
                        <button
                            onClick={toggleLanguage}
                            className="text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors"
                        >
                            {language === 'zh' ? 'EN' : '中文'}
                        </button>
                        
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden inline-flex items-center justify-center p-2 -mr-2 rounded-md text-zinc-400 hover:text-white focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Row: Navigation Categories (Desktop) */}
        <div className="hidden md:block border-b border-white/10">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex justify-center items-center h-16 gap-12">
                     {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative py-2 ${
                            isActive(link.path)
                              ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
                              : 'text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                 </div>
             </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-4 text-base font-bold uppercase tracking-widest ${
                    isActive(link.path)
                      ? 'text-white border-l-2 border-white pl-4'
                      : 'text-zinc-500 hover:text-zinc-300 pl-4'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/5 mt-auto" id="contact">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
               <span className="font-serif text-lg text-white">Future / Proof</span>
               <p className="text-xs text-zinc-600 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} {language === 'zh' ? '陶小开' : 'Tao Xiaokai'}. {t.footer.rights}
              </p>
            </div>
            
            <div className="flex space-x-8">
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;