import React from 'react';
import './Gallery.css';

import imagen1 from '../assets/imagen1.jpg';
import imagen3 from '../assets/imagen3.jpg';
import imagen2 from '../assets/imagen2.jpg';

const images = [
  imagen1, 
  imagen2, 
  'https://via.placeholder.com/400x300', 
  'https://via.placeholder.com/600x300', 
  imagen3,
  'https://via.placeholder.com/700x400', 
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Galería</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
