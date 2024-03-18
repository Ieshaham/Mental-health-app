import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resources from './components/Resources'; 
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main >
        <Home />
        <Resources />
      <Footer />
      </main>
    </div>
  );
}

export default App;
