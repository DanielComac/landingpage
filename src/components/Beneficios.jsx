import React from 'react';
import './Beneficios.css';

import imagen1 from '../assets/presentaciones.jpg';
import ubicacion from '../assets/ubicacion.jpg';
import maestros from '../assets/maestros.png';
import { motion } from 'framer-motion';

const Beneficios = () => {

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="beneficios" className="beneficios">
      <div className="beneficios-container">
        <div className='beneficios-text'>
          <motion.h2
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
          >
            Beneficios de estudiar con nosotros
          </motion.h2>
        </div>

        <motion.div 
          className="beneficios-grid"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div className="beneficio-card" variants={cardVariants}>
            <div className="card-image-wrapper">
              <img src="https://via.placeholder.com/150" alt="Clases personalizadas" className="beneficio-image" />
            </div>
            <h3>Clases personalizadas</h3>
            <p>Cada persona aprende de manera diferente. Ya sea que tengas un nivel avanzado o recién comiences, siempre nos enfocaremos en desarrollar tus habilidades a tu propio ritmo.</p>
          </motion.div>

          <motion.div className="beneficio-card" variants={cardVariants}>
            <div className="card-image-wrapper">
              <img src={maestros} alt="Maestros capacitados" className='beneficio-image' />
            </div>
            <h3>Maestros capacitados</h3>
            <p>Maestros con una amplia experiencia y formación profesional de más de 15 años.</p>
          </motion.div>

          <motion.div className="beneficio-card" variants={cardVariants}>
             <div className="card-image-wrapper">
                <img src={ubicacion} alt="Excelente ubicación" className='beneficio-image' />
             </div>
            <h3>Excelente ubicación</h3>
            <p>Estamos ubicados en una excelente ubicación céntrica y accesible. Lo que facilita a nuestros estudiantes llegar cómodamente desde cualquier parte de la ciudad.</p>
          </motion.div>

          <motion.div className="beneficio-card" variants={cardVariants}>
             <div className="card-image-wrapper">
               <img src={imagen1} alt="Presentaciones regulares" className='beneficio-image' />
             </div>
            <h3>Presentaciones regulares</h3>
            <p>Ofrecemos a los alumnos la oportunidad de participar en presentaciones regulares frente a público, brindándoles un espacio para mostrar sus avances y así reforzar la confianza y el manejo escénico.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Beneficios;
