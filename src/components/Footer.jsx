import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Clases de Música La Corchea. Todos los derechos reservados.</p>
        <div className="footer-line"></div>
        <p className="footer-small">Diseñado con ❤️ para la música</p>
      </div>
    </footer>
  );
};

export default Footer;
