import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CustomNavbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import MainApp from './Maincard';

function App() {
  return (
    <div className="app-container">
      <CustomNavbar />

      <section id="MainApp" className="main-section">
        <MainApp/>
      </section>

      <section id="projects" className="projects-section">
        <Projects />
      </section>

      <section id="skills" className="skills-section">
        <Skills />
      </section>

      <section id="certifications" className="certifications-section">
        <Certifications />
      </section>

      <section id="contact" className="contact-section">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
