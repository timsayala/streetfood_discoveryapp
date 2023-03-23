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
    <div className='container'>
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
     <div className="card-front">
  <div className="image-wrapper" style={{ height: "100%" }}>
    <Image src={process.env.PUBLIC_URL + props.imageSrc} alt={props.imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
  </div>
</div>

      <div className="card-back">
        <Description text={props.description} className="card-description" />
      </div>
    </div>
    </div>
  );
}

export default Card;
