import './Menu.css';
import React, { useState } from 'react';
import taho from '../images/taho.png';
import siomai from '../images/siomai.png';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flip' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={taho} className="img" alt=""/>
          <h2>Taho</h2>
        </div>
        <div className="flip-card-back">
          <h2>Back of Taho Card</h2>
        </div>
        <div className="flip-card-front1">
          <img src={siomai} className="img1" alt=""/>
          <h2>Siomai</h2>
        </div>
        <div className="flip-card-back1">
          <h2 className='text'>Back of Siomai Card</h2>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;