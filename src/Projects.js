import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './Projects.css';

// Your projects array with links to PDFs
const projects = [
  {
    title: 'Smart Home Security System',
    subtitle: 'ESP32-CAM & Ultrasonic Sensors',
    description: 'A cost-effective, real-time home security solution integrating ESP32-CAM, servo motors, and ultrasonic sensors. The system dynamically detects motion from multiple directions, automatically orients the camera, and performs face detection with alerts sent via Telegram.',
    technologies: ['ESP32', 'IoT', 'Python', 'Telegram API', 'Machine Learning'],
    pdfLink: '/pdfs/Security camera pdf.pdf',
    icon: '🔒',
  },
  {
    title: 'Heart Disease Prediction System',
    subtitle: 'Machine Learning & Python GUI',
    description: 'An advanced healthcare predictive tool leveraging machine learning algorithms (Decision Tree, Random Forest, XGBoost) to accurately identify heart disease risk from patient health data. Features comprehensive data preprocessing and a user-friendly Tkinter GUI.',
    technologies: ['Python', 'Machine Learning', 'XGBoost', 'Tkinter', 'Data Science'],
    pdfLink: '/pdfs/Heart_disease.pdf',
    icon: '❤️',
  },
];

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState('');

  const handleViewClick = (pdfLink) => {
    setSelectedPdf(pdfLink);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPdf('');
  };

  return (
    <Container className="projects-container">
      <div className="projects-header text-center mb-5">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">Exploring innovative solutions through embedded systems and machine learning</p>
        <div className="title-underline"></div>
      </div>
      <Row className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx} md={6} lg={6}>
            <Card className="project-card h-100">
              <Card.Body className="d-flex flex-column">
                <div className="project-icon">{project.icon}</div>
                <Card.Title className="project-card-title mt-3">{project.title}</Card.Title>
                <Card.Subtitle className="project-card-subtitle mb-3">{project.subtitle}</Card.Subtitle>
                <Card.Text className="project-description flex-grow-1">{project.description}</Card.Text>
                <div className="tech-tags mb-3">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <Button 
                  variant="primary" 
                  className="project-btn"
                  onClick={() => handleViewClick(project.pdfLink)}
                >
                  <span>View Project</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal 
        show={showModal} 
        onHide={handleClose} 
        size="lg" 
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="project-modal"
      >
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Project Documentation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          {selectedPdf ? (
            <iframe
              src={selectedPdf}
              title="Project PDF"
              width="100%"
              height="100%"
              style={{ border: 'none', minHeight: '70vh' }}
            />
          ) : (
            <p>No PDF selected</p>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}
