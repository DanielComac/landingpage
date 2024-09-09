import React from 'react';
import './Hero.css';
import pianoImage from '../assets/piano.jpeg'; 

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${pianoImage})` }}>
      <h1>Clases de Música La Corchea</h1>
      <p>La música como instrumento para tocar el alma</p>
    </section>
  );
};

export default Hero;
