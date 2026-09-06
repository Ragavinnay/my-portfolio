import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './Projects.css';

const projectsByProfile = {
  core: [
    { number: '01', title: 'Smart Solar EV Charging', subtitle: 'Dual battery switching & solar tracking · ESP32', period: 'FEB — MAY 2026', description: 'An automated dual-battery switching system with threshold-based logic and real-time performance monitoring. An IoT dashboard tracks voltage, charge state, and system status over JSON/HTTP.', technologies: ['ESP32', 'IoT dashboard', 'JSON / HTTP', 'Solar tracking'] },
    { number: '02', title: 'Wireless Charging for EVs', subtitle: 'WPT-based power transfer prototype', period: 'AUG — NOV 2025', description: 'A MATLAB/Simulink study of wireless power transfer efficiency and coil alignment, paired with a transmitter–receiver hardware prototype and Arduino-controlled relay switching.', technologies: ['MATLAB / Simulink', 'Arduino', 'IR sensing', 'Power transfer'] },
  ],
  software: [
    { number: '01', title: 'Smart Home Security System', subtitle: 'Computer vision · embedded automation · Python', period: 'FEB — APR 2025', description: 'A modular real-time security system combining WiFi image streaming, face detection, servo control, ultrasonic triggering, and automated Telegram alerts.', technologies: ['Python', 'OpenCV', 'ESP32-CAM', 'Telegram bot'] },
    { number: '02', title: 'Intelligent Connected Systems', subtitle: 'Software, sensors & real-time monitoring', period: 'SELECTED WORK', description: 'A software-forward body of work spanning data exchange, device automation, remote monitoring, and applied AI/ML thinking across connected engineering projects.', technologies: ['Python', 'AI / ML', 'JSON / HTTP', 'Automation'] },
  ],
};

export default function Projects({ profile }) {
  const [selectedPdf, setSelectedPdf] = useState('');
  const projects = projectsByProfile[profile];
  return <Container className="projects-container"><div className="section-heading"><p className="section-eyebrow">02 — Selected work / {profile === 'software' ? 'Software & AI/ML' : 'Core ECE'}</p><h2 className="projects-title">Projects with a<br /><em>clear point of view.</em></h2><p className="projects-subtitle">Switch profiles above to explore the work most relevant to the opportunity in front of you.</p></div><Row className="g-4">{projects.map((project) => <Col key={project.number} lg={6}><Card className="project-card h-100"><Card.Body className="d-flex flex-column"><div className="project-topline"><span>{project.number}</span><span>{project.period}</span></div><Card.Title className="project-card-title">{project.title}</Card.Title><Card.Subtitle className="project-card-subtitle">{project.subtitle}</Card.Subtitle><Card.Text className="project-description flex-grow-1">{project.description}</Card.Text><div className="tech-tags">{project.technologies.map((tech) => <span key={tech} className="tech-badge">{tech}</span>)}</div><Button className="project-btn" onClick={() => setSelectedPdf('/pdfs/resume.pdf')}>Read project <span>↗</span></Button></Card.Body></Card></Col>)}</Row><Modal show={Boolean(selectedPdf)} onHide={() => setSelectedPdf('')} size="lg" centered className="project-modal"><Modal.Header closeButton><Modal.Title>Project documentation</Modal.Title></Modal.Header><Modal.Body className="modal-body-custom">{selectedPdf && <iframe src={selectedPdf} title="Project documentation" width="100%" height="100%" style={{ border: 'none', minHeight: '70vh' }} />}</Modal.Body></Modal></Container>;
}
