import React from 'react';

const Project = ({ title, image, link, repo }) => {
  return (
    <div className="mb-8 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <img src={image} alt={title} className="w-full h-auto rounded-lg mb-4" />
      <p className="text-lg">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Deployed Application</a> | 
        <a href={repo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">GitHub Repository</a>
      </p>
    </div>
  );
};

export default Project;