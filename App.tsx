import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TimelinePage from './pages/TimelinePage';
import BlogPage from './pages/BlogPage';
import BooksPage from './pages/BooksPage';
import AIChatWidget from './components/AIChatWidget';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/books" element={<BooksPage />} />
          </Routes>
        </Layout>
        <AIChatWidget />
      </Router>
    </LanguageProvider>
  );
};

export default App;
