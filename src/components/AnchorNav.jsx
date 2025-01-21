import React from 'react';
import { FaHome, FaGraduationCap, FaBriefcase, FaCode, FaCogs, FaEnvelope } from 'react-icons/fa';
import './css/AnchorNav.css';

const AnchorNav = () => {
  return (
    <nav className="anchor-nav">
      <a href="#about" data-title="Home">
        <FaHome size={24} />
      </a>
      <div className="nav-divider"></div>
      <a href="#education" data-title="Education">
        <FaGraduationCap size={24} />
      </a>
      <a href="#experience" data-title="Work">
        <FaBriefcase size={24} />
      </a>
      <a href="#projects" data-title="Projects">
        <FaCode size={24} />
      </a>
      <a href="#skills" data-title="Skills">
        <FaCogs size={24} />
      </a>
      <div className="nav-divider"></div>
      <a href="#contact" data-title="Contact">
        <FaEnvelope size={24} />
      </a>
    </nav>
  );
};

export default AnchorNav;