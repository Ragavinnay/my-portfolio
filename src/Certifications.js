import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Certifications.css';

const certifications = [
  {
    title: 'Full Stack Development',
    issuer: 'Udemy',
    description: 'Comprehensive full stack web development course covering frontend and backend technologies, databases, and deployment.',
    icon: '🎓',
    category: 'Web Development',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://www.udemy.com', // Replace with actual certificate URL if available
  },
  {
    title: 'Data Structures & Algorithms in C++',
    issuer: 'Apna College',
    description: 'In-depth course on data structures and algorithms using C++, covering essential concepts for problem-solving and technical interviews.',
    icon: '💻',
    category: 'Programming',
    skills: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving'],
    link: 'https://www.apnacollege.in', // Replace with actual certificate URL if available
  },
];

export default function Certifications() {
  return (
    <Container className="certifications-container">
      <div className="certifications-header text-center mb-5">
        <h2 className="certifications-title">Certifications</h2>
        <p className="certifications-subtitle">Continuous learning and skill development</p>
        <div className="title-underline"></div>
      </div>
      <Row className="g-4 justify-content-center">
        {certifications.map((cert, idx) => (
          <Col key={idx} md={6} lg={5}>
            <Card className="certification-card h-100">
              <Card.Body className="d-flex flex-column">
                <div className="certification-icon">{cert.icon}</div>
                <div className="certification-badge">{cert.category}</div>
                <Card.Title className="certification-card-title mt-3">{cert.title}</Card.Title>
                <Card.Subtitle className="certification-card-subtitle mb-3">
                  <span className="issuer-icon">🏢</span> {cert.issuer}
                </Card.Subtitle>
                <Card.Text className="certification-description flex-grow-1">
                  {cert.description}
                </Card.Text>
                <div className="certification-skills mb-3">
                  {cert.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="skill-badge">{skill}</span>
                  ))}
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    View Certificate
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


