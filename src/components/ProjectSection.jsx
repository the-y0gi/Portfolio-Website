import React from 'react';
import bitImg from '../assets/bitcoin.webp';
import gameImg from '../assets/game.jpg';
import todoImg from '../assets/to do.jpg'
import arrow from '../assets/arrow.png';
const Projects = () => {
 
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
         
          <ProjectCard
            imgSrc={todoImg}
            altText="To Do List"
            title="To Do List"
            githubLink="https://github.com/the-y0gi/To-Do-List"
            liveDemoLink="https://to-do-list-hu3x7ac7k-the-y0gis-projects.vercel.app/"
          />
          <ProjectCard
            imgSrc={gameImg}
            altText="Game Hub"
            title="Game Hub"
            githubLink="https://github.com/the-y0gi/Crypto-Trading"
            liveDemoLink="https://github.com/the-y0gi/Crypto-Trading"
          />
          <ProjectCard
            imgSrc={bitImg}
            altText="Bitcoin Trading"
            title="Bitcoin Trading"
            githubLink="https://github.com/the-y0gi/Crypto-Trading"
            liveDemoLink="https://crypto-trading-rouge.vercel.app/"
          />
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#contact'}
      />
    </section>
  );
};

const ProjectCard =({
  imgSrc, 
  altText,
  title, 
  githubLink,
  liveDemoLink,
  isAdmin=false,
}) =>{
  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img src={imgSrc} alt={altText} className="project-img" />
      </div>
      <h2 className="experience-sub-title project-title">{title}</h2>
      <div className="btn-container">
        <button className="btn btn-color-2 project-btn" onClick={() => window.open(githubLink, 'blank') }>
          Github
        </button>
        <button className="btn btn-color-2 project-btn" onClick={() => window.open(liveDemoLink, 'blank')}>
          Live Demo
        </button>
        {isAdmin && (
          <button className="btn btn-color-2 project-btn" onClick={''}>
          Delete
        </button>
        )}
      </div>
    </div>
  );

};

export default Projects;
