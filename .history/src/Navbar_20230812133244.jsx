import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">Video Search</span>
      </div>
      <button className="nav-toggle" onClick={toggleNav}>
        {isNavOpen ? 'Close' : 'Open'}
      </button>
      <ul className={`navbar-nav ${isNavOpen ? 'open' : ''}`}>
        < className="nav-item">
          <Link href="/" className="nav-link">Home</Link>
              </<li className="nav-item">
          <Link href="/" className="nav-link">Home</Link>
        </li>li>
              
      </ul>
    </nav>
  );
};

export default Navbar;

