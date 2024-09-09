import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Horario from './components/Horario';
import Beneficios from './components/Beneficios';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Beneficios />
      <Horario />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
