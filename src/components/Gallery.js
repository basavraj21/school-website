import React from 'react';
import sportsDay from '../assets/images/sports_day.jpg';
import scienceExhibition from '../assets/images/science_exhibition.jpg';
import culturalFest from '../assets/images/cultural_fest.jpg';
import classroom from '../assets/images/classroom.jpg';
import library from '../assets/images/library.jpg';
import schoolTour from '../assets/videos/school_tour.mp4';
import annualFunction from '../assets/videos/annual_function.mp4';

function Gallery() {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {/* Image Gallery */}
        <div className="gallery-item">
          <img src={sportsDay} alt="Sports Day" />
          <p>Annual Sports Day</p>
        </div>
        <div className="gallery-item">
          <img src={scienceExhibition} alt="Science Exhibition" />
          <p>Science Exhibition</p>
        </div>
        <div className="gallery-item">
          <img src={culturalFest} alt="Cultural Fest" />
          <p>Cultural Fest</p>
        </div>
        <div className="gallery-item">
          <img src={classroom} alt="Classroom Setup" />
          <p>Classroom Setup</p>
        </div>
        <div className="gallery-item">
          <img src={library} alt="Library" />
          <p>Library</p>
        </div>

        {/* Video Gallery */}
        <div className="gallery-item">
          <video controls>
            <source src={schoolTour} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>School Tour</p>
        </div>
        <div className="gallery-item">
          <video controls>
            <source src={annualFunction} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Annual Function</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
