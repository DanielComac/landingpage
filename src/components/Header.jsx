import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/lacorchea.png';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Usamos un umbral basado en el alto de la ventana (viewport height)
      // Hero es aprox 90vh. En desktop 0.8 es buen punto, en móvil cambiamos antes (0.5)
      const isMobile = window.innerWidth < 768;
      const threshold = window.innerHeight * (isMobile ? 0.5 : 0.8); 
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount in case user loads page scrolled down
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <img src={logo} alt="Music School Logo" />
      </div>
      
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <nav className={menuOpen ? 'active' : ''}>
        <ul>
          {['Acerca de nosotros', 'Cursos', 'Galería', 'Contact'].map((item, index) => {
             // Extract href from item text mapping or keep simple logic if original code used specific hrefs
             const hrefMap = {
               'Acerca de nosotros': '#about',
               'Cursos': '#courses',
               'Galería': '#gallery',
               'Contact': '#contact', // Original was "Contáctanos" but href was #contact
               'Contáctanos': '#contact'
             };
             const linkText = item === 'Contact' ? 'Contáctanos' : item;
             
             return (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <a href={hrefMap[linkText]} onClick={() => setMenuOpen(false)}>
                  {linkText}
                </a>
              </motion.li>
             );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
