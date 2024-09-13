import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/lacorchea.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Music School Logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={menuOpen ? 'active' : ''}>
        <ul>
          <li><a href="#about">Acerca de nosotros</a></li>
          <li><a href="#courses">Cursos</a></li>
          <li><a href="#gallery">Galería</a></li>
          <li><a href="#contact">Contáctanos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
