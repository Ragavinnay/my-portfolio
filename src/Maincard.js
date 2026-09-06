import React, { useEffect, useRef } from 'react';
import imgFluid from './imgg.png';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function MainApp() {
  const leftRef = useRef();
  const middleRef = useRef();
  const rightRef = useRef();
  const refs = [leftRef, middleRef, rightRef];
  useEffect(() => {
    const timer = setTimeout(() => {
      leftRef.current?.classList.add('visible');
      middleRef.current?.classList.add('visible');
      rightRef.current?.classList.add('visible');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container fluid className="main-hero-container">
      <Row className="h-100 g-0">
        <Col md={5} className="hero-copy fade-in" ref={refs[0]}>
          <div className="hero-kicker"><span /> Available for meaningful projects</div>
          <p className="greeting-text">Hello, I am</p>
          <h1 className="main-name">Raga <em>Vinay</em></h1>
          <p className="role-text">IoT &amp; Firmware Developer</p>
          <p className="hero-intro">I build dependable connected systems where hardware, firmware, and intelligent software meet.</p>
          <div className="tech-stack"><span>Embedded systems</span><span>IoT</span><span>Python</span><span>C++</span></div>
          <div className="hero-actions">
            <a href="#projects" className="hero-primary">Explore my work <span>↗</span></a>
            <a href="/pdfs/resume.pdf" download className="resume-btn">Download resume <span>↓</span></a>
          </div>
        </Col>
        <Col md={3} className="profile-image-col fade-in" ref={refs[1]}>
          <div className="profile-image-wrapper"><img src={imgFluid} alt="Portrait of Raga Vinay" className="profile-pic" /></div>
          <span className="image-caption">ECE / builder / curious mind</span>
        </Col>
        <Col md={4} className="about-section fade-in" ref={refs[2]}>
          <div className="about-content"><p className="section-eyebrow">01 — About</p><h2 className="about-title">Turning signals<br /><span>into solutions.</span></h2><p className="about-text">I&apos;m <strong>Raga Vinay Dewarsetty</strong>, an Electronics and Communication Engineering student focused on embedded systems, IoT, and intelligent automation.</p><p className="about-text">From real-time firmware to machine learning interfaces, I enjoy translating complex ideas into useful, reliable products.</p><div className="about-stats"><div><strong>06+</strong><span>core disciplines</span></div><div><strong>02</strong><span>featured builds</span></div></div></div>
        </Col>
      </Row>
    </Container>
  );
}
