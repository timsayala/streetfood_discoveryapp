import React from 'react';
import Hero from '../images/Hero.png';
import'./Navbar.css';

const Banner = () => {
    return (
        <div className="banner">
            <img src={Hero} className="hero" alt=""/>
            <p className="text">Discover all the delicious local streetfood</p>
        </div>
    )
}

export default Banner;
