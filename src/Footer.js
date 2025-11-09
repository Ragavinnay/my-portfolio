import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="footer-text mb-0">
              © {new Date().getFullYear()} <span className="footer-name">Raga Vinay</span>. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="footer-text mb-0">
              Built with <span className="footer-heart">❤️</span> and React
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
