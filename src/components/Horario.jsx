import React from 'react';
import './Horario.css';

const Horario = () => {
  return (
    <section id="horario" className="horario">
      <div className="horario-content">
        <h2 className="title">Horario</h2>
        <p className="description">
          Manejamos los siguientes horarios:
          <br />
          Para más información sobre los horarios y la inscripción <a href="#contact" className="contact-link">Contáctanos</a>
        </p>
      </div>
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
            <div></div>
          </div>
        </div>
        <div className="calendar-body">
          <div className="calendar-time">
            <div>5:00pm - 7:00pm</div>
            <div>5:00pm - 7:00pm</div>
            <div>5:00pm - 7:00pm</div>
            <div>5:00pm - 7:00pm</div>
            <div>5:00pm - 7:00pm</div>
            <div>12:00pm - 2:00pm</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horario;
