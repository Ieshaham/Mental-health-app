import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <div style={{ backgroundColor: "#fffff", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
