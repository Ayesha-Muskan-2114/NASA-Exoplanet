import React from 'react';
import './App.css';
import './css/EducationalDownloads.css';
import './css/FurtherLearning.css';
import './css/NasaResources.css';


import NasaResources from './components/NasaResources.js';
import EducationalDownloads from './components/EducationalDownloads.js';
import FurtherLearning from './components/FurtherLearning.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Resource Center</h1>
      </header>

      <section className="content">
        <NasaResources />
        <EducationalDownloads />
        <FurtherLearning />
      </section>

      <footer className="App-footer">
        <p>© 2024 NASA Resource Center</p>
      </footer>
    </div>
  );
}

export default App;
