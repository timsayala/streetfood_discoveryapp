import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';

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
        <h1> STREET FOOD DISCOVERY </h1>
        <p className="text">Discover all the delicious local streetfood</p>
       </div>
       </div>
        </nav>
    )
}
export default Navbar;