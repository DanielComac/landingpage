import React, { useState } from 'react';
import './About.css';
import modalImage from '../assets/instrumentos.jpg';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Acerca de nosotros</h2>
          <p>
            Somos una escuela de música con más de 15 años de experiencia en la formación de alumnos. En nuestra institución, nos dedicamos a ofrecer una educación musical de calidad, adaptada a las necesidades y objetivos de cada estudiante. Creemos que la música es una gran herramienta para el desarrollo personal, y nos comprometemos a cultivar el talento y la creatividad de nuestros alumnos.
          </p>
          <button onClick={openModal}>Saber más</button>
        </div>
        <div className="about-image">
          <img src={modalImage} alt="About Us" />
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✖</button>
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
        </div>
      )}
    </section>
  );
};

export default About;
