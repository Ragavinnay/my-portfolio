import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './Projects.css';

const projects = [
  { number: '01', title: 'Smart Solar EV Charging', subtitle: 'Dual battery switching & solar tracking · ESP32', period: 'FEB — MAY 2026', description: 'An automated dual-battery switching system with threshold-based logic and real-time performance monitoring. An IoT dashboard tracks voltage, charge state, and system status over JSON/HTTP for remote troubleshooting.', technologies: ['ESP32', 'IoT dashboard', 'JSON / HTTP', 'Solar tracking'], pdfLink: '/pdfs/resume.pdf' },
  { number: '02', title: 'Wireless Charging for EVs', subtitle: 'WPT-based power transfer prototype', period: 'AUG — NOV 2025', description: 'A MATLAB/Simulink study of wireless power transfer efficiency and coil alignment, paired with a hardware prototype using transmitter–receiver coils, IR detection, and Arduino-controlled relay switching.', technologies: ['MATLAB / Simulink', 'Arduino', 'IR sensing', 'Power transfer'], pdfLink: '/pdfs/resume.pdf' },
  { number: '03', title: 'Smart Home Security System', subtitle: 'ESP32-CAM · Arduino · Python / OpenCV', period: 'FEB — APR 2025', description: 'A modular real-time security system with ISR-based ultrasonic triggering, WiFi image streaming, servo control through PWM, face detection, and automated Telegram alerts.', technologies: ['ESP32-CAM', 'Embedded C', 'OpenCV', 'Telegram bot'], pdfLink: '/pdfs/Security camera pdf.pdf' },
];

export default function Projects() {
  const [selectedPdf, setSelectedPdf] = useState('');
  return (
    <Container className="projects-container">
      <div className="section-heading"><p className="section-eyebrow">02 — Selected work</p><h2 className="projects-title">Projects with a<br /><em>physical point of view.</em></h2><p className="projects-subtitle">Hands-on systems built at the intersection of electronics, firmware, and intelligent software.</p></div>
      <Row className="g-4">
        {projects.map((project) => <Col key={project.number} lg={4}><Card className="project-card h-100"><Card.Body className="d-flex flex-column"><div className="project-topline"><span>{project.number}</span><span>{project.period}</span></div><Card.Title className="project-card-title">{project.title}</Card.Title><Card.Subtitle className="project-card-subtitle">{project.subtitle}</Card.Subtitle><Card.Text className="project-description flex-grow-1">{project.description}</Card.Text><div className="tech-tags">{project.technologies.map((tech) => <span key={tech} className="tech-badge">{tech}</span>)}</div><Button className="project-btn" onClick={() => setSelectedPdf(project.pdfLink)}>Read project <span>↗</span></Button></Card.Body></Card></Col>)}
      </Row>
      <Modal show={Boolean(selectedPdf)} onHide={() => setSelectedPdf('')} size="lg" centered className="project-modal"><Modal.Header closeButton><Modal.Title>Project documentation</Modal.Title></Modal.Header><Modal.Body className="modal-body-custom">{selectedPdf && <iframe src={selectedPdf} title="Project documentation" width="100%" height="100%" style={{ border: 'none', minHeight: '70vh' }} />}</Modal.Body></Modal>
    </Container>
  );
}
