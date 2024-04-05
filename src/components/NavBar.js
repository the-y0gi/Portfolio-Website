import React, { useState } from 'react';
import '../App.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Desktop navigation */}
      <nav id="desktop-nav">
        <div className="logo">
        the_y0gi

        </div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div> 
        
      </nav>

      {/* Hamburger navigation */}
      <nav id="hamburger-nav">
        <div className="logo">the_y0gi</div>
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <ul>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        </div>
        {/* Overlay to close menu when clicked outside */}
        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </nav>
    </>
  );
};

export default NavBar;
