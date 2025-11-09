import React from 'react';
import image from './github-pic.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

export default function CustomNavbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#MainApp" onClick={(e) => { e.preventDefault(); scrollToSection('MainApp'); }} className="navbar-brand-custom">
          <span className="brand-text">RV</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              href="#MainApp" 
              onClick={(e) => { e.preventDefault(); scrollToSection('MainApp'); }}
              className="nav-link-custom"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className="nav-link-custom"
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#skills" 
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              className="nav-link-custom"
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              href="#certifications" 
              onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}
              className="nav-link-custom"
            >
              Certifications
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="nav-link-custom"
            >
              Contact
            </Nav.Link>
            <a
              href="/pdfs/resume.pdf"
              download
              className="nav-link-custom resume-download-btn"
              title="Download Resume"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
            <div className="social-links ms-3">
              <a
                href="https://github.com/Ragavinnay"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github-link"
                title="GitHub"
              >
                <img src={image} alt="GitHub" className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/ragavinay-dewarasetty-460532200"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin-link"
                title="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
