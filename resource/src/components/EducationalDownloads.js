import React from 'react';
import '../css/EducationalDownloads.css';

function EducationalDownloads() {
  return (
    <div className="resource-card">
      <img 
        src="\R.jpeg" 
        alt="Educational Downloads" 
        className="resource-image" 
      />
      <h2>Educational Downloads</h2>
      <p>Download PDF guides and infographics for students and teachers.</p>
      <a href="https://www.nasa.gov/stem-content/exoplanet-resource-guide/" className="resource-link">
        View Downloads
      </a>
    </div>
  );
}

export default EducationalDownloads;
