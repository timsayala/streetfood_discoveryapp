import React from 'react';
import './Navbar.css';
import logo from '../images/Logo.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
      <div className="banner-content">
        <div className="banner-image">
        <img src={logo} className="logo" alt="LOGO IMAGE"/>

        </div>
        <button type="button" className="btn btn-danger">Sign in</button>
        <button type="button" className="btn btn-outline-danger">Sign up</button>
      </div>
        </nav>
    )
}
export default Navbar;