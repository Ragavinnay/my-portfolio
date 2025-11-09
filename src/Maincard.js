import React, { useEffect, useRef } from 'react';
import imgFluid from './imgg.png';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function MainApp() {
  const leftRef = useRef();
  const midRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      leftRef.current?.classList.add('visible');
      midRef.current?.classList.add('visible');
      rightRef.current?.classList.add('visible');
    }, 100);
  }, []);

  return (
    <Container fluid className="main-hero-container">
      <Row className="h-100 g-0">
        {/* Left: Background Image with Text */}
        <Col md={4} className="bg-section fade-in" ref={leftRef}>
          <div className="bg-overlay-content">
            <p className="greeting-text mb-3">Hello, I am</p>
            <h1 className="main-name display-3 fw-bold mb-3">
              <span className="name-gradient">Raga Vinay</span>
            </h1>
            <h2 className="role-text fs-4 mb-4">
              <span className="role-badge">IoT & Firmware Developer</span>
            </h2>
            <div className="tech-stack mt-4">
              <span className="tech-tag">Embedded Systems</span>
              <span className="tech-tag">IoT</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">C++</span>
            </div>
            <div className="hero-actions mt-4">
              <a
                href="/pdfs/resume.pdf"
                download
                className="resume-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
          <div className="bg-overlay"></div>
        </Col>
        
        {/* Middle: Profile Image */}
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center profile-image-col fade-in"
          ref={midRef}
        >
          <div className="profile-image-wrapper">
            <div className="profile-image-glow"></div>
            <img src={imgFluid} alt="Raga Vinay" className="profile-pic" />
          </div>
        </Col>
        
        {/* Right: About Section */}
        <Col
          md={4}
          className="d-flex flex-column justify-content-center about-section fade-in"
          ref={rightRef}
        >
          <div className="about-content">
            <h2 className="about-title mb-4">
              <span className="title-icon">👋</span> About Me
            </h2>
            <p className="about-text">
              I'm <strong>Raga Vinay Dewarsetty</strong>, an Electronics and Communication Engineering student with a passion for Embedded Systems, IoT, and intelligent automation. 
            </p>
            <p className="about-text">
              I specialize in firmware development, real-time systems, and integrating hardware with software to create efficient, scalable solutions. With experience in Python, C++, and machine learning, I enjoy solving real-world problems through innovative system design.
            </p>
            <p className="about-text">
              I'm driven by curiosity and always eager to learn and build impactful technology.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
