import React from 'react';
import resumePDF from '../assets/resume.pdf'; // Ensure the path to the resume PDF is correct

const Resume = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Express.js",
    "MongoDB", "SQL", "HTML", "CSS",
    "GitHub", "GraphQL", "Phaser", "REST & APIs"
  ];

  return (
    <section className="resume-section">
      {/* Resume Download */}
      <div className="resume-download">
        <a 
          href={resumePDF} 
          download 
          className="resume-download-link"
        >
          Download Resume
        </a>
      </div>

      {/* Technical Skills */}
      <h2 className="resume-title">Technical Skills</h2>

      <div className="skills-grid">
        {skills.map(skill => (
          <span key={skill} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Resume;
