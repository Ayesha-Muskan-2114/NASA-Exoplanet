// src/App.js
import React from 'react';
import DrawingBoard from './components/DrawingBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Draw Your Exoplanet</h1>
      <DrawingBoard />
    </div>
  );
}

export default App;
