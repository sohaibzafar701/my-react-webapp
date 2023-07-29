import React from 'react';
import './Navbar.css'; // Import the CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav>
      {/* Home button outside the ul element */}
      <div className="home-button">
        <a href="#">Home</a>
      </div>
      {/* Dropdown for other buttons */}
      <ul className="desktop-menu">
        <li><a href="#">Skills</a></li>
        <li><a href="#">Services I Offer</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact me</a></li>
        {/* Add more buttons here */}
      </ul>
      {/* Mobile dropdown */}
      <div className="mobile-dropdown">
        <button className="dropbtn">&#9776;</button>
        <div className="dropdown-content">
          <a href="#">Skills</a>
          <a href="#">Services I Offer</a>
          <a href="#">Projects</a>
          <a href="#">Contact me</a>
          {/* Add more buttons here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
