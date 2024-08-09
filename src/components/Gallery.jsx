import React from 'react';
import './Gallery.css';

const images = [
  '/src/assets/imagen1.jpg', 
  '/src/assets/imagen3.jpg', 
  'https://via.placeholder.com/400x300', 
  'https://via.placeholder.com/600x300', 
  '/src/assets/imagen2.jpg',
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
