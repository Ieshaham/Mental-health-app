import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

