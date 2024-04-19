import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resources from './components/Resources';
import Footer from './components/Footer';
import MoodSelector from './components/MoodSelector';
import MoodPrompt from './components/MoodPrompt'; 
import Chatbot from './components/Chatbot';
import Media from './components/Media';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/mood" element={<MoodSelector />} />
        <Route path="/prompt" element={<MoodPrompt />} /> 
        <Route path="/media" element={<Media />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
