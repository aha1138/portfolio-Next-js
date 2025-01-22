import React from 'react';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <section id="about" className="section">
        <h2>About Me</h2>
        {/* Add your about content */}
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        {/* Add your education content */}
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        {/* Add your experience content */}
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        {/* Add your projects content */}
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        {/* Add your skills content */}
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        {/* Add your contact content */}
      </section>
    </div>
  );
}

export default App;