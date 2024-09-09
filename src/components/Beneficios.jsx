import React from 'react';
import './Beneficios.css';

import imagen1 from '../assets/presentaciones.jpg';
import ubicacion from '../assets/ubicacion.jpg';
import maestros from '../assets/maestros.png';


const Beneficios = () => {

  const images = [
    imagen1, 
    ubicacion,
  ];
  
  return (
    <section id="beneficios" className="beneficios">
      <div className="beneficios-container">
        <div className='beneficios-text'>
          <h2>Beneficios de estudiar con nosotros</h2>
        </div>

        <div className="beneficios-grid">
          <div className="beneficio-card">
            <img src="https://via.placeholder.com/150" alt="Clases personalizadas" className="beneficio-image" />
            <h3>Clases personalizadas</h3>
            <p>Cada persona aprende de manera diferente. Ya sea que tengas un nivel avanzado o recién comiences, siempre nos enfocaremos en desarrollar tus habilidades a tu propio ritmo.</p>
          </div>

          <div className="beneficio-card">
            < img src={maestros} alt="About Us" className='beneficio-image' />
            <h3>Maestros capacitados</h3>
            <p>Maestros con una amplia experiencia y formación profesional de más de 15 años.</p>
          </div>

          <div className="beneficio-card">
          < img src={ubicacion} alt="About Us" className='beneficio-image' />
          <h3>Excelente ubicación</h3>
            <p>Estamos ubicados en una excelente ubicación céntrica y accesible. Lo que facilita a nuestros estudiantes llegar cómodamente desde cualquier parte de la ciudad.</p>
          </div>

          <div className="beneficio-card">
            <img src={imagen1} alt="About Us" className='beneficio-image' />
            <h3>Presentaciones regulares</h3>
            <p>Ofrecemos a los alumnos la oportunidad de participar en presentaciones regulares frente a público, brindándoles un espacio para mostrar sus avances y así reforzar la confianza y el manejo escénico.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
