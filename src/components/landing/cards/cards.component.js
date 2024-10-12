import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './cards.component.css';

function Cards() {
  const [flipped, setFlipped] = useState({
    hacker: false,
    maker: false,
    inventor: false,
    artist: false
  });

  const handleMouseEnter = (cardKey) => {
    setFlipped((prevFlipped) => ({
      ...prevFlipped,
      [cardKey]: true
    }));
  };

  const handleMouseLeave = (cardKey) => {
    setFlipped((prevFlipped) => ({
      ...prevFlipped,
      [cardKey]: false
    }));
  };

  const cards = [
    {
      key: 'hacker',
      title: 'HACKER',
      icon: 'fa-solid fa-laptop-code',
      description: 'A hacker is someone who explores and manipulates systems to understand, improve, or exploit their functionality.'
    },
    {
      key: 'maker',
      title: 'MAKER',
      icon: 'fa-solid fa-hammer',
      description: 'A maker is someone who creates and builds objects using various tools, combining craftsmanship with technology.'
    },
    {
      key: 'inventor',
      title: 'INVENTOR',
      icon: 'fa-solid fa-lightbulb',
      description: 'An inventor creates new devices or processes through creativity, knowledge, and experimentation.'
    },
    {
      key: 'artist',
      title: 'ARTIST',
      icon: 'fa-solid fa-paint-brush',
      description: 'An artist expresses ideas and emotions through various mediums, creating visual, auditory, or performance-based works.'
    }
  ];

  return (
    <div className="card-section">
      {cards.map((card) => (
        <ReactCardFlip
          key={card.key}
          isFlipped={flipped[card.key]}
          flipDirection="horizontal"
        >
          <div
            className="card"
            onMouseEnter={() => handleMouseEnter(card.key)}
            onMouseLeave={() => handleMouseLeave(card.key)}
          >
            <i className={card.icon}></i>
            <h3>{card.title}</h3>
          </div>

          <div
            className="card-back"
            onMouseEnter={() => handleMouseEnter(card.key)}
            onMouseLeave={() => handleMouseLeave(card.key)}
          >
            <p>{card.description}</p>
          </div>
        </ReactCardFlip>
      ))}
    </div>
  );
}

export default Cards;
