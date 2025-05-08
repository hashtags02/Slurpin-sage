import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <h1 className="logo">SLURPIN'SAGE</h1>
      </div>

      <div className="nav-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Contact</li>
        <span className="cart-icon">🛒</span>
      </ul>

      <button className="order-button">Order Now</button>
    </nav>
  );
}

export default Navbar;
