import React from 'react';
import './Courses.css';
import { FaGuitar, FaMicrophone } from 'react-icons/fa'; 
import { MdOutlinePiano } from "react-icons/md";
import { GiFlute } from "react-icons/gi";
import { MdOutlineQueueMusic } from "react-icons/md";


const Courses = () => {
  return (
    <section id="courses" className="courses">
      <div className="courses-container">
        <div className="courses-text">
          <h2>Nuestros instrumentos</h2>
          <p className='texto-cursos'>Ofrecemos clases personalizadas en una amplia variedad de disciplinas musicales, nuestros cursos están diseñados para adaptarse a todos los niveles, desde principiantes hasta avanzados.</p>
          <div className="courses-icons">
            <div className="icon-item">
              <div className="icon-circle">
                <FaGuitar size={30} />
              </div>
              <p>Guitarra</p>
              <p>acústica</p>
            </div>
            <div className="icon-item">
              <div className="icon-circle">
                <MdOutlinePiano size={30} />
              </div>
              <p>Piano</p>
            </div>
            <div className="icon-item">
              <div className="icon-circle">
                <FaMicrophone size={30} />
              </div>
              <p>Vocalización</p>
            </div>
            <div className="icon-item">
              <div className="icon-circle">
                <MdOutlineQueueMusic size={30} />
              </div>
              <p>Solfeo</p>

            </div>
          </div><br></br>
          <div className="icon-item">
              <div className="icon-circle">
                <GiFlute size={30} />
              </div>
              <p>Pequeños</p>
              <p>instrumentos musicales</p>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
