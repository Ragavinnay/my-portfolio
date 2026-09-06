import React from 'react';
import { Container } from 'react-bootstrap';
import './Certifications.css';

const certifications = ['Data Structures and Algorithms (C++) · Apna College', 'The Full Stack Web Development Bootcamp · Udemy', '100 Days of Python Bootcamp · Udemy'];

export default function Certifications() {
  return <Container className="certifications-container"><div className="section-heading"><p className="section-eyebrow">04 — Learning</p><h2 className="certifications-title">Always in<br /><em>progress.</em></h2></div><div className="certification-list">{certifications.map((cert, index) => <div className="certification-row" key={cert}><span>0{index + 1}</span><p>{cert}</p><span>↗</span></div>)}</div></Container>;
}
