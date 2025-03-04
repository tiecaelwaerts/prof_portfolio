import React from 'react';
import Project from './project.jsx';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: 'path/to/image1.jpg', link: 'https://project1.com', repo: 'https://github.com/tiecaelwaerts/project1' },
    // Add five more projects
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} title={project.title} image={project.image} link={project.link} repo={project.repo} />
      ))}
    </section>
  );
};

export default Portfolio;