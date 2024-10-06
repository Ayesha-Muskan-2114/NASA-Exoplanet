import React from 'react';
import '../css/FurtherLearning.css';

function FurtherLearning() {
  return (
    <div className="resource-card">
      <img 
        src="\R.jpeg"  
        alt="Further Learning" 
        className="resource-image" 
      />
      <h2>Further Learning</h2>
      <p>Suggested books, videos, and activities on space exploration.</p>
      <a href="https://exoplanetarchive.ipac.caltech.edu/" className="resource-link">
        Learn More
      </a>
    </div>
  );
}

export default FurtherLearning;
