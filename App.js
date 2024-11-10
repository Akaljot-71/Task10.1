//App.js
import React from 'react';
import Header from './Header';
import Banner from './Banner';
import FeaturedArticles from './FeaturedArticles';
import FeaturedTutorials from './FeaturedTutorials';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <FeaturedArticles />
      <FeaturedTutorials />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;
