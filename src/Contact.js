import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:ragavinayds@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Container className="contact-container">
      <div className="contact-header text-center mb-5">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind? Let's work together!</p>
        <div className="title-underline"></div>
      </div>
      
      <Row className="justify-content-center">
        <Col md={8} lg={7}>
          <div className="contact-card">
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-4">
                <Form.Label className="form-label">Your Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="form-control-custom"
                  placeholder="Enter your name"
                />
              </Form.Group>
              
              <Form.Group className="mb-4">
                <Form.Label className="form-label">Your Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="form-control-custom"
                  placeholder="Enter your email"
                />
              </Form.Group>
              
              <Form.Group className="mb-4">
                <Form.Label className="form-label">Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="form-control-custom"
                  placeholder="Tell me about your project..."
                />
              </Form.Group>
              
              <Button className="contact-btn" type="submit">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </Button>
            </Form>
          </div>
          
          <div className="contact-info mt-5 text-center">
            <p className="contact-email">
              <strong>Email:</strong>{' '}
              <a href="mailto:ragavinayds@gmail.com">ragavinayds@gmail.com</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
