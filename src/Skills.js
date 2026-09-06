import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const skillsByProfile = {
  core: [
    { title: 'Embedded systems', skills: ['ESP32', 'Arduino UNO', 'Arduino Nano', 'STM32', 'Sensor interfacing', 'Interrupts', 'Firmware coding'] },
    { title: 'Electronics & simulation', skills: ['LTSpice', 'Keil MicroVision', 'Proteus', 'MATLAB', 'STM32CubeIDE', 'Arduino IDE'] },
    { title: 'Communication', skills: ['UART', 'I2C', 'WiFi', 'JSON / HTTP'] },
    { title: 'Programming', skills: ['Embedded C', 'C++', 'Python'] },
  ],
  software: [
    { title: 'Software & data', skills: ['Python', 'C++', 'Embedded C', 'JSON / HTTP', 'Automation'] },
    { title: 'AI & computer vision', skills: ['AI / ML', 'OpenCV', 'Face detection', 'Intelligent systems'] },
    { title: 'Connected systems', skills: ['ESP32-CAM', 'WiFi', 'IoT dashboards', 'Telegram bots'] },
    { title: 'Engineering tools', skills: ['MATLAB', 'Simulink', 'Arduino IDE', 'STM32CubeIDE'] },
  ],
};

export default function Skills({ profile }) {
  return <Container className="skills-container"><div className="section-heading"><p className="section-eyebrow">03 — Toolkit / {profile === 'software' ? 'Software & AI/ML' : 'Core ECE'}</p><h2 className="skills-title">A focused toolkit<br /><em>for meaningful work.</em></h2><p className="skills-subtitle">No artificial proficiency rankings — only the technologies and methods represented in the work.</p></div><Row className="g-4">{skillsByProfile[profile].map((category, idx) => <Col md={6} key={category.title}><div className="skill-category-card"><span className="category-index">0{idx + 1}</span><h3 className="category-title">{category.title}</h3><div className="skills-list">{category.skills.map((skill) => <span className="skill-name" key={skill}>{skill}</span>)}</div></div></Col>)}</Row></Container>;
}
