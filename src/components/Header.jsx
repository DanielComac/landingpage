import React from 'react';
import './Header.css';
import logo from '../assets/lacorchea.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Music School Logo" />
      </div>
      <nav>
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
