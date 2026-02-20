import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contáctanos
      </motion.h2>
      
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="contact-item black-bg" variants={itemVariants} whileHover={{ y: -5 }}>
          <FaMapMarkerAlt size={35} className="icon-main"/>
          <p className='title-card white'>Ubicación</p>
          <p className='texto'>Coronado 406, Zona Centro C.P 34000 Durango, Dgo.</p>
          <p className='texto-mapa'>
            <a 
              href="https://www.google.com/maps?q=Coronado+406,+Zona+Centro,+C.P+34000+Durango,+Dgo." 
              target="_blank" 
              rel="noopener noreferrer" 
              className='contact-link light'
            >
              Ver en mapa
            </a>
          </p>
        </motion.div>

        <motion.div className="contact-item white-bg" variants={itemVariants} whileHover={{ y: -5 }}>
          <FaPhone size={35} className="icon-main"/>
          <p className='title-card dark'>Teléfonos</p>
          <div className="phone-list">
            <p className='texto-tel'>+52 618-369-0847</p>
            <p className='texto-tel'>+52 618-297-1773</p>
            <p className='texto-tel'>+52 618-191-3414</p>
          </div>
        </motion.div>

        <motion.div className="contact-item black-bg" variants={itemVariants} whileHover={{ y: -5 }}>
          <FaWhatsapp size={35} className="icon-main"/>
          <p className='title-card white'>Whatsapp</p>
          <p className='texto'>+52 618-369-0847</p>
          <p className='texto'>
            <a href="https://wa.me/526183690847" target="_blank" rel="noopener noreferrer" className='contact-link light'>
              Mandar mensaje
            </a>
          </p>
        </motion.div>

        <motion.div className="contact-item white-bg" variants={itemVariants} whileHover={{ y: -5 }}>
          <p className='title-card dark'>Redes sociales</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100063769373683" target="_blank" rel="noopener noreferrer" className='facebook-icon'>
              <FaFacebook size={35} />
            </a>
            <a href="https://www.instagram.com/clases_lacorchea_dgo?igsh=MXBpdmoyN2Y4bXdkNQ==" target="_blank" rel="noopener noreferrer" className='instagram-icon'>
              <FaInstagram size={35} />
            </a>
            <a href="https://wa.me/526183690847" target="_blank" rel="noopener noreferrer" className='whatsapp-icon'>
              <FaWhatsapp size={35} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
