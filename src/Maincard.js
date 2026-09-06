import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

const profiles = {
  software: {
    label: 'Software & AI/ML profile',
    role: 'Software engineering · applied AI/ML',
    intro: 'Building thoughtful software and intelligent systems at the intersection of practical engineering, data, and automation.',
    aside: 'Software-minded.\nCurious by design.',
  },
  core: {
    label: 'Core ECE profile',
    role: 'Embedded systems · electronics engineering',
    intro: 'Designing connected hardware through microcontrollers, sensors, firmware, simulation, and disciplined experimentation.',
    aside: 'Hardware-minded.\nCurious by design.',
  },
};

export default function MainApp({ profile, onProfileChange }) {
  const current = profiles[profile];

  return (
    <Container fluid className="main-hero-container">
      <Row className="hero-grid g-0">
        <Col lg={7} className="hero-copy">
          <p className="hero-kicker">Raga Vinay Dewarasetty · Bengaluru</p>
          <div className="profile-switcher" role="tablist" aria-label="Portfolio profile">
            {Object.entries(profiles).map(([key, value]) => (
              <button key={key} type="button" role="tab" aria-selected={profile === key} className={profile === key ? 'active' : ''} onClick={() => onProfileChange(key)}>{value.label}</button>
            ))}
          </div>
          <h1 className="main-name">Raga Vinay<br /><em>Dewarasetty</em></h1>
          <p className="role-text">{current.role}</p>
          <p className="hero-intro">{current.intro}</p>
          <div className="hero-actions"><a href="#projects" className="hero-primary">View selected work <span>↗</span></a><a href="/pdfs/resume.pdf" download className="resume-btn">Download resume <span>↓</span></a></div>
          <div className="hero-meta"><span>01 / Profile</span><span>B.Tech ECE · Minor in AI/ML</span></div>
        </Col>
        <Col lg={5} className="hero-aside">
          <div className="hero-aside-top"><span>Portfolio / 2026</span><span>RVDS</span></div>
          <div className="monogram">RV<span>.</span></div>
          <p className="hero-aside-copy">{current.aside.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</p>
          <div className="hero-aside-bottom"><span>Profile / {profile === 'software' ? '02' : '01'}</span><span>Open to opportunities</span></div>
        </Col>
      </Row>
    </Container>
  );
}
