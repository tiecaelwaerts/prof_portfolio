import React from 'react';
import resumePDF from '../assets/resume.pdf'; // Ensure the path to the resume PDF is correct

const Resume = () => {
  return (
    <section className="max-w-3xl mx-auto p-8 bg-white border border-gray-300 shadow-lg rounded-lg">
      {/* Resume Download */}
      <div className="text-center">
        <a 
          href={resumePDF} 
          download 
          className="inline-block px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Technical Skills */}
      <h2 className="text-2xl font-bold text-center text-blue-700 mt-8">Technical Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-center">
        {[
          "JavaScript", "React", "Node.js", "Express.js",
          "MongoDB", "SQL", "HTML", "CSS",
          "GitHub", "GraphQL", "Phaser", "REST & APIs"
        ].map(skill => (
          <span key={skill} className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg font-semibold">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Resume;
