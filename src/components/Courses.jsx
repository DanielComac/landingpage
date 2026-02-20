import React from 'react';
import './Courses.css';
import { FaGuitar, FaMicrophone } from 'react-icons/fa'; 
import { MdOutlinePiano } from "react-icons/md";
import { GiFlute } from "react-icons/gi";
import { MdOutlineQueueMusic } from "react-icons/md";
import { motion } from 'framer-motion';

const Courses = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const coursesList = [
    { icon: <FaGuitar size={35} />, label: "Guitarra", subLabel: "acústica" },
    { icon: <MdOutlinePiano size={35} />, label: "Piano", subLabel: "" },
    { icon: <FaMicrophone size={35} />, label: "Vocalización", subLabel: "" },
    { icon: <MdOutlineQueueMusic size={35} />, label: "Solfeo", subLabel: "" },
    { icon: <GiFlute size={35} />, label: "Pequeños", subLabel: "instrumentos" }
  ];

  return (
    <section id="courses" className="courses">
      <div className="courses-container">
        <div className="courses-text">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nuestros cursos
          </motion.h2>
          <motion.p 
            className='texto-cursos'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ofrecemos clases personalizadas en una amplia variedad de disciplinas musicales, nuestros cursos están diseñados para adaptarse a todos los niveles, desde principiantes hasta avanzados.
          </motion.p>
          
          <motion.div 
            className="courses-icons"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {coursesList.map((course, index) => (
              <motion.div 
                className="icon-item" 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="icon-circle">
                  {course.icon}
                </div>
                <p className="course-title">{course.label}</p>
                {course.subLabel && <p className="course-subtitle">{course.subLabel}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
