import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

export default function MainApp() {
  return (
    <Container fluid className="main-hero-container">
      <Row className="hero-grid g-0">
        <Col lg={7} className="hero-copy">
          <p className="hero-kicker">Electronics &amp; Communication Engineering · Bengaluru</p>
          <h1 className="main-name">Raga Vinay<br /><em>Dewarasetty</em></h1>
          <p className="role-text">Embedded systems &amp; intelligent automation</p>
          <p className="hero-intro">Engineering student building practical connected systems with microcontrollers, sensors, firmware, and applied AI.</p>
          <div className="hero-actions">
            <a href="#projects" className="hero-primary">View selected work <span>↗</span></a>
            <a href="/pdfs/resume.pdf" download className="resume-btn">Download resume <span>↓</span></a>
          </div>
          <div className="hero-meta"><span>01 / Profile</span><span>Available for opportunities</span></div>
        </Col>
        <Col lg={5} className="hero-aside">
          <div className="hero-aside-top"><span>Portfolio / 2026</span><span>RVDS</span></div>
          <div className="monogram">RV<span>.</span></div>
          <p className="hero-aside-copy">Hardware-minded.<br />Curious by design.</p>
          <div className="hero-aside-bottom"><span>B.Tech ECE</span><span>Minor · AI/ML</span></div>
        </Col>
      </Row>
    </Container>
  );
}
