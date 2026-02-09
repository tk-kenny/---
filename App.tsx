import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TimelinePage from './pages/TimelinePage';
import BlogPage from './pages/BlogPage';
import BooksPage from './pages/BooksPage';
import AIChatWidget from './components/AIChatWidget';

const App: React.FC = () => {
  return (
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
  );
};

export default App;
