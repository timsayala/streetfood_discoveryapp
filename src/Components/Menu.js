import './Menu.css';
import FlipCard from './FlipCard';
import './Menu.css';
import React, { useState } from 'react';
import taho from '../images/taho.png';
import siomai from '../images/siomai.png';

const FlipCard = ({ frontContent, backContent, imageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flip' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-back">
          {backContent}
        </div>
        <div className="flip-card-front">
          <img src={imageUrl} className="img" alt=""/>
          {frontContent}
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <div className="flip-card-container">
        <FlipCard
          frontContent={<h2>Taho</h2>}
          backContent={<h2>Back of Taho Card</h2>}
          imageUrl={taho}
        />
        <FlipCard
          frontContent={<h2>Siomai</h2>}
          backContent={<h2>Back of Siomai Card</h2>}
          imageUrl={siomai}
        />
      </div>
    </div>
  );
};

export default Menu;