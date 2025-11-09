import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'Embedded C', level: 80 },
    ],
  },
  {
    title: 'Embedded Systems & IoT',
    icon: '🔌',
    skills: [
      { name: 'ESP32', level: 85 },
      { name: 'Arduino', level: 90 },
      { name: 'Raspberry Pi', level: 75 },
      { name: 'Sensor Integration', level: 85 },
      { name: 'Firmware Development', level: 85 },
    ],
  },
  {
    title: 'Web Development',
    icon: '🌐',
    skills: [
      { name: 'React', level: 80 },
      { name: 'Node.js', level: 70 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    title: 'Machine Learning & Data',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning', level: 80 },
      { name: 'Data Science', level: 75 },
      { name: 'TensorFlow', level: 70 },
      { name: 'scikit-learn', level: 75 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'PlatformIO', level: 80 },
      { name: 'Docker', level: 65 },
      { name: 'MQTT', level: 75 },
    ],
  },
  {
    title: 'Communication Protocols',
    icon: '📡',
    skills: [
      { name: 'I2C', level: 80 },
      { name: 'SPI', level: 80 },
      { name: 'UART', level: 85 },
      { name: 'WiFi', level: 85 },
      { name: 'Bluetooth', level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <Container className="skills-container">
      <div className="skills-header text-center mb-5">
        <h2 className="skills-title">Skills & Technologies</h2>
        <p className="skills-subtitle">A comprehensive overview of my technical expertise</p>
        <div className="title-underline"></div>
      </div>
      <Row className="g-4">
        {skillCategories.map((category, idx) => (
          <Col key={idx} md={6} lg={4}>
            <div className="skill-category-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-name-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

