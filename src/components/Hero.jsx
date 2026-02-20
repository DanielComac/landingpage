import React from 'react';
import './Hero.css';
import pianoImage from '../assets/piano.jpeg'; 
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${pianoImage})` }}></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Clases de Música La Corchea
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          La música como instrumento para tocar el alma
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hero-cta"
        >
          {/* Optional: Add a call to action button if appropriate, or just keep existing content */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
