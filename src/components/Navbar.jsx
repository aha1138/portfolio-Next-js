import React from 'react';
import { FaHome, FaGraduationCap, FaBriefcase, FaCode, FaCogs, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Your Name</h1>
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('about')} className="nav-link">
            <FaHome className="inline mr-2" /> About
          </button>
          <button onClick={() => scrollToSection('education')} className="nav-link">
            <FaGraduationCap className="inline mr-2" /> Education
          </button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">
            <FaBriefcase className="inline mr-2" /> Experience
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            <FaCode className="inline mr-2" /> Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">
            <FaCogs className="inline mr-2" /> Skills
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            <FaEnvelope className="inline mr-2" /> Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;