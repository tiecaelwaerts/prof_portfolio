import React from 'react';

const Project = ({ title, image, link, repo }) => {
  return (
    <div className="mb-4">
      <h2>{title}</h2>
      <img src={image} alt={title} className="w-full h-auto" />
      <p>
        <a href={link} target="_blank" rel="noopener noreferrer">Deployed Application</a> | 
        <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </div>
  );
};

export default Project;