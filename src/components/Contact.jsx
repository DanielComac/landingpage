import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contáctanos</h2>
      <div className="contact-container">
        <div className="contact-item black-bg">
          <FaMapMarkerAlt size={30} />
          <p className='negro'>Ubicación</p>
          <p className='texto'>Coronado 406, Zona Centro C.P 34000 Durango, Dgo.</p>
          <p className='texto-mapa'>
            <a 
              href="https://www.google.com/maps?q=Coronado+406,+Zona+Centro,+C.P+34000+Durango,+Dgo." 
              target="_blank" 
              rel="noopener noreferrer" 
              className='contact-link'
            >
              Ver en mapa
            </a>
          </p>
        </div>
        <div className="contact-item white-bg">
          <FaPhone size={30} />
          <p className='blanco'>Teléfonos de contacto</p>
          <p className='texto-tel'>+52 618-369-0847</p>
          <p className='texto-tel'>+52 618-297-1773</p>
          <p className='texto-tel'>+52 618-191-3414</p>
        </div>
        <div className="contact-item black-bg">
          <FaWhatsapp size={30} />
          <p className='negro'>Whatsapp</p>
          <p className='texto'>+52 618-369-0847</p>
          <p className='texto'>
            <a href="https://wa.me/526183690847" target="_blank" rel="noopener noreferrer" className='contact-link'>
              Mandar mensaje
            </a>
          </p>
        </div>
        <div className="contact-item white-bg">
          <p className='blanco'>Redes sociales</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100063769373683" target="_blank" rel="noopener noreferrer" className='facebook-icon'>
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com/clases_lacorchea_dgo?igsh=MXBpdmoyN2Y4bXdkNQ==" target="_blank" rel="noopener noreferrer" className='instagram-icon'>
              <FaInstagram size={30} />
            </a>
            <a href="https://wa.me/526183690847" target="_blank" rel="noopener noreferrer" className='whatsapp-icon'>
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
