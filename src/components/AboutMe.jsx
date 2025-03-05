import React from 'react';

const AboutMe = () => {
  return (
    <main className="text-center">
      <img 
        src="/images/profilePic.jpg" 
        alt="Tyler Caelwaerts" 
        className="w-32 h-32 rounded-full mx-auto"
      />
      <p className="mt-4">
        Hello! I'm Tyler Caelwaerts, a U.S. Veteran and Software Developer with a strong foundation in full-stack web development. 
        I currently work at the Veterans Health Administration and recently completed a coding bootcamp, where I honed my skills 
        in modern technologies, including JavaScript, React, Node.js, and database management.
      </p>
      <p className="mt-4">
        Passionate about building efficient and scalable applications, I thrive on solving complex problems and continuously expanding 
        my knowledge. My projects showcase my expertise in front-end and back-end development, as well as my ability to create seamless 
        user experiences.
      </p>
    </main>
  );
};

export default AboutMe;
