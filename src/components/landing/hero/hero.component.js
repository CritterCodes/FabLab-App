import React from 'react';
import './hero.component.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>FAB LAB FORT SMITH IS A HACKERSPACE</h1>
        <p>
          UNITING HACKERS, MAKERS, INVENTORS, AND ARTISTS <br />
          BUILDING BETTER COMMUNITIES FROM THE BOTTOM UP.
        </p>
        <a href="#about" className="hero-cta-button">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
