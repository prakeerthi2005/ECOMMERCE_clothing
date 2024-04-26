// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Include the CSS file

function Navbar() {
  

  return (
    <nav className="navbar">
      <div className="brand">
        <span className="brand-text">Gleam</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        
        <li><Link to="/signin">Sign In</Link></li>
        
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/clothing">Clothing</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        
        <li><Link to="/FetchRegistration">Registration</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
