import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resources from './components/Resources';
import Footer from './components/Footer'; 

// import Media from './components/Media';
import Mission from './components/Mission';
import Gemini from './components/Gemini';
import Userauth from './components/Userauth'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/userauth" element={<Userauth />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/resources" element={<Resources />} />
        {/* <Route path="/media" element={<Media />} />  */}
        <Route path="/gemini" element={<Gemini />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
