import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

export default function CustomNavbar() {
  const scrollToSection = (sectionId) => { document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  return <Navbar variant="light" expand="lg" fixed="top" className="custom-navbar"><Container><Navbar.Brand href="#MainApp" onClick={(e) => { e.preventDefault(); scrollToSection('MainApp'); }} className="navbar-brand-custom"><span className="brand-text">RV<span>.</span></span></Navbar.Brand><Navbar.Toggle aria-controls="navbarScroll" /><Navbar.Collapse id="navbarScroll"><Nav className="ms-auto align-items-center"><Nav.Link href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="nav-link-custom">Work</Nav.Link><Nav.Link href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="nav-link-custom">Toolkit</Nav.Link><Nav.Link href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }} className="nav-link-custom">Learning</Nav.Link><Nav.Link href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-link-custom">Contact</Nav.Link><a href="/pdfs/resume.pdf" download className="resume-download-btn">Resume ↓</a></Nav></Navbar.Collapse></Container></Navbar>;
}
