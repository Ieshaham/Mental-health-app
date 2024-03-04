import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'; // Assuming Navbar component is in the "components" directory

function App() {
  return (
    <div style={{ backgroundColor: "#E7E5D9", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
