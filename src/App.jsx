import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Academics from './components/Academics';
import ParentsReviews from './components/ParentsReviews';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Welcome />
      <Academics />
      <ParentsReviews />
      <News />
      <Footer />
    </div>
  );
}

export default App;