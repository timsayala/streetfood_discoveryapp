import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';
import Hero from '../images/Hero.png';

const Navbar = () => {
    return (
        <nav className="header">
      <div className="banner-content">
        <div className="banner-image">
        <img src={logo} className="logo" alt=""/>
        <button type="button" className="btn btn-outline-warning">Sign up</button>
        <button type="button" className="btn btn-outline-warning">Sign in</button>
        </div>
       <div className="banner">
       <img src={Hero} className="hero" alt=""/>
        <p className="text">Discover all the delicious local streetfood</p>
       </div>
       </div>
        </nav>
    )
}
export default Navbar;