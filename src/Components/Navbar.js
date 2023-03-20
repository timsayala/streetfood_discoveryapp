import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="header">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <ul className="navbar-links">
          <li>About Us</li>
          <li>Contact</li>
          <div className="navbar-buttons">
            <button type="button" className="btn btn-outline-warning">
              Sign up
            </button>
            <button type="button" className="btn btn-outline-warning">
              Sign in
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
