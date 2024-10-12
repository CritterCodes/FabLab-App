import React from 'react';
import Hero from '../../components/landing/hero/hero.component';
import About from '../../components/landing/about/about.component';
import Services from '../../components/landing/services/services.component';
import Contact from '../../components/landing/contact/contact.component';
import Cards from '../../components/landing/cards/cards.component';
import './landing.page.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <Cards />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default LandingPage;
