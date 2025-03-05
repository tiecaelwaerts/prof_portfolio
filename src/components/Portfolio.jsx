import React from 'react';
import Project from './project.jsx';
import adventurersBoard from '../images/adventurersBoard.png';
import SpellCaster from '../images/spellCaster.png';
import weatherDashboard from '../images/weatherDashboard.png';
import treasureBarBrawl from '../images/treasureBarBrawl.png';

const Portfolio = () => {
  const projects = [
    { title: 'Adventurers Board', image: adventurersBoard, link: 'https://adventurers-board.onrender.com/', repo: 'https://github.com/tiecaelwaerts/adventurers-board' },
    { title: 'SpellCaster', image: SpellCaster, link: 'https://tiecaelwaerts.github.io/caster-leveling-sheet/', repo: 'https://github.com/tiecaelwaerts/caster-leveling-sheet' },
    { title: 'Weather Dashboard', image: weatherDashboard, link: 'https://weather-dashboard-kvm7.onrender.com', repo: 'https://github.com/tiecaelwaerts/weather-dashboard' },
    { title: 'Treasure Bar Brawl', image: treasureBarBrawl, link: 'https://treasure-bar-brawl.onrender.com', repo: 'https://github.com/tiecaelwaerts/Treasure-Bar-Brawl' }
  ];

  return (
    <section className="portfolio-section">
      <h1 className="portfolio-title">My Projects</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project key={index} title={project.title} image={project.image} link={project.link} repo={project.repo} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;