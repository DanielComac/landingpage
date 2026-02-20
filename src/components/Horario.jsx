import React from 'react';
import './Horario.css';
import { motion } from 'framer-motion';

const Horario = () => {
  return (
    <section id="horario" className="horario">
      <motion.div 
        className="horario-content"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="title">Horario</h2>
        <p className="description">
          Manejamos los siguientes horarios:
          <br />
          Para más información sobre los horarios y la inscripción <a href="#contact" className="contact-link">Contáctanos</a>
        </p>
      </motion.div>
      
      <motion.div 
        className="calendar-wrapper"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="calendar">
          <div className="calendar-header">
            <div className="calendar-day">Lunes</div>
            <div className="calendar-day">Martes</div>
            <div className="calendar-day">Miércoles</div>
            <div className="calendar-day">Jueves</div>
            <div className="calendar-day">Viernes</div>
            <div className="calendar-day">Sábado</div>
          </div>
          <div className="calendar-body">
            <div className="calendar-time">
              <div>2:00pm - 3:00pm</div>
              <div>2:00pm - 3:00pm</div>
              <div>2:00pm - 3:00pm</div>
              <div>2:00pm - 3:00pm</div>
              <div></div>
              <div>12:00pm - 2:00pm</div>
            </div>
          </div>
          <div className="calendar-body">
            <div className="calendar-time">
              <div>5:00pm - 7:00pm</div>
              <div>5:00pm - 7:00pm</div>
              <div>5:00pm - 7:00pm</div>
              <div>5:00pm - 7:00pm</div>
              <div>5:00pm - 7:00pm</div>
              <div></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Horario;
