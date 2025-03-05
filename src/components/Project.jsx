import React from 'react';

const Project = ({ title, image, link, repo }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <img src={image} alt={title} className="project-image" />
      <p className="project-links">
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">Deployed Application</a> | 
        <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repository</a>
      </p>
    </div>
  );
};

export default Project;