// Card.js

import React, { useState } from 'react';
import Image from './Image';
import Description from './Description';
import './Card.css';

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <div className="card-front">
        <Image src={process.env.PUBLIC_URL + props.imageSrc} alt={props.imageAlt} style={{ innerWidth: "50px", maxHeight: "100%" }} />
      </div>
      <div className="card-back">
        <Description text={props.description} className="card-description" />
      </div>
    </div>
  );
}

export default Card;
