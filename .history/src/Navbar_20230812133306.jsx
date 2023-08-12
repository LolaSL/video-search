import React, { useState } from 'react';


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
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;

