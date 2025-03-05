import React from 'react';
import profilePic from '../images/profilePic.jpg';

const AboutMe = () => {
  return (
    <main className="about-me-container">
      <img 
        src={profilePic} 
        alt="Tyler Caelwaerts" 
        className="profile-pic"
      />
      <p className="about-me-text">
        Hello! I'm Tyler Caelwaerts, a U.S. Veteran and Software Developer with a strong foundation in full-stack web development. 
        I currently work at the Veterans Health Administration and recently completed a coding bootcamp, where I honed my skills 
        in modern technologies, including JavaScript, React, Node.js, and database management.
      </p>
      <p className="about-me-text">
        Passionate about building efficient and scalable applications, I thrive on solving complex problems and continuously expanding 
        my knowledge. My projects showcase my expertise in front-end and back-end development, as well as my ability to create seamless 
        user experiences.
      </p>
    </main>
  );
};

export default AboutMe;
