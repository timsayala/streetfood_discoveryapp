import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar">
      <div className="banner-content">
        <div className="banner-image">
        <img src="./images/Logo.jpg" className="Logo" alt="LOGO IMAGE"/>

        </div>
        <button type="button" className="btn btn-danger">Sign in</button>
        <button type="button" className="btn btn-outline-danger">Sign up</button>
      </div>
        </nav>
    )
}
export default Navbar;