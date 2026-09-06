import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const skillCategories = [
  { title: 'Embedded systems', skills: ['ESP32', 'Arduino UNO', 'Arduino Nano', 'STM32', 'Sensor interfacing', 'Interrupts', 'Firmware coding'] },
  { title: 'Programming', skills: ['Python', 'Embedded C', 'C++'] },
  { title: 'Communication', skills: ['UART', 'I2C', 'WiFi'] },
  { title: 'Simulation & EDA', skills: ['LTSpice', 'Keil MicroVision', 'Proteus', 'MATLAB', 'STM32CubeIDE', 'Arduino IDE'] },
];

export default function Skills() {
  return <Container className="skills-container"><div className="section-heading"><p className="section-eyebrow">03 — Toolkit</p><h2 className="skills-title">Tools I use to<br /><em>make things real.</em></h2><p className="skills-subtitle">A focused technical toolkit shaped by project work, experimentation, and continuous learning.</p></div><Row className="g-4">{skillCategories.map((category, idx) => <Col md={6} key={category.title}><div className="skill-category-card"><span className="category-index">0{idx + 1}</span><h3 className="category-title">{category.title}</h3><div className="skills-list">{category.skills.map((skill) => <span className="skill-name" key={skill}>{skill}</span>)}</div></div></Col>)}</Row></Container>;
}
