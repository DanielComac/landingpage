import React, { useState } from 'react';
import './About.css';
import modalImage from '../assets/instrumentos.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="about" className="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-text">
          <motion.h2 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Acerca de nosotros
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Somos una escuela de música con más de 15 años de experiencia en la formación de alumnos. En nuestra institución, nos dedicamos a ofrecer una educación musical de calidad, adaptada a las necesidades y objetivos de cada estudiante. Creemos que la música es una gran herramienta para el desarrollo personal, y nos comprometemos a cultivar el talento y la creatividad de nuestros alumnos.
          </motion.p>
          <motion.button 
            onClick={openModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Saber más
          </motion.button>
        </div>
        
        <motion.div 
          className="about-image"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="image-wrapper">
             <img src={modalImage} alt="About Us" />
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="modal-overlay" 
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button className="modal-close" onClick={closeModal}>✖</button>
              <div className="modal-scroll-area">
                <div className="modal-text">
                  <h3>¿Que ofrecemos?</h3>
                  <p>
                  Nuestros cursos están diseñados para todos los niveles, desde principiantes hasta avanzados, y cubren una amplia gama de géneros musicales. Además, proporcionamos oportunidades para presentaciones en vivo y examenes regulares, permitiendo a nuestros estudiantes demostrar sus habilidades y ganar experiencia frente al público.
                  </p>
                </div>
                <div className="modal-text">
                  <h3>Nuestro enfoque</h3>
                  <p>
                  Creemos en un enfoque educativo centrado en el estudiante, donde cada lección se adapta a los intereses y metas individuales. Nos esforzamos por crear un ambiente de aprendizaje positivo, donde nuestros alumnos se sientan inspirados a explorar su creatividad y alcanzar su máximo potencial.
                  </p>
                </div>
                <div className="modal-text">
                  <h3>Únete a nosotros</h3>
                  <p>
                  Ya sea que estés buscando aprender un nuevo instrumento, perfeccionar tus habilidades o simplemente disfrutar de la música, en nuestra escuela encontrarás el apoyo y los recursos que necesitas para lograrlo.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
