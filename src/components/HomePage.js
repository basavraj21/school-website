import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/images/logo.png';
import sportsDay from '../assets/images/sports_day.jpg';
import scienceExhibition from '../assets/images/science_exhibition.jpg';
import culturalFest from '../assets/images/cultural_fest.jpg';

function HomePage() {
  return (
    <div className="home">
      <header className="header">
        <img src={logo} alt="School Logo" className="logo" />
        <h1 className="school-name">Welcome to Springdale Public School</h1>
      </header>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={sportsDay} alt="Sports Day" />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={scienceExhibition} alt="Science Exhibition" />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={culturalFest} alt="Cultural Fest" />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <nav>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/faculty">Faculty</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
