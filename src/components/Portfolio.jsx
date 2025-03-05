import React from 'react';
import Project from './Project.jsx';
import adventurersBoard from '../images/adventurersBoard.png';
import projectTwo from '../images/projectTwo.png';
import weatherDashboard from '../images/weatherDashboard.png';
import treasureBarBrawl from '../images/treasureBarBrawl.png';

const Portfolio = () => {
  const projects = [
    { title: 'Adventurers Board', image: adventurersBoard, link: 'https://adventurers-board.onrender.com/', repo: 'https://github.com/tiecaelwaerts/adventurers-board' },
    { title: 'SpellCaster', image: projectTwo, link: 'https://tiecaelwaerts.github.io/caster-leveling-sheet/', repo: 'https://github.com/tiecaelwaerts/caster-leveling-sheet' },
    { title: 'Weather Dashboard', image: weatherDashboard, link: 'https://weather-dashboard-kvm7.onrender.com', repo: 'https://github.com/tiecaelwaerts/weather-dashboard' },
    { title: 'Treasure Bar Brawl', image: treasureBarBrawl, link: 'https://project-four.com', repo: 'https://github.com/tiecaelwaerts/Treasure-Bar-Brawl' }
  ];

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project key={index} title={project.title} image={project.image} link={project.link} repo={project.repo} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;