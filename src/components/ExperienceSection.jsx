import React from 'react';
import htmlImg from '../assets/bxl-html5.svg';
import githubImg from '../assets/bxl-git.svg';
import expressjsImg from '../assets/express-original.svg';
import jsImg from '../assets/bxl-javascript.svg';
import mongodbImg from '../assets/bxl-mongodb.svg';
import reactImg from '../assets/bxl-react.svg';
import sassImg from '../assets/bxl-sass.svg';
import nodejsImg from '../assets/bxl-nodejs.svg';
import typescriptImg from '../assets/bxl-typescript.svg';
import websocketImg from '../assets/websocket.svg';
import mtuImg from '../assets/material-ui.svg';
import mysqlImg from '../assets/mysql.svg';
import arrow from '../assets/arrow.png';

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <ExperienceArticle srcImg={htmlImg} title="HTML" experience="Experienced" />
              <ExperienceArticle srcImg={sassImg} title="SASS" experience="Intermediate" />
              <ExperienceArticle srcImg={jsImg} title="JavaScript" experience="Intermediate" />
              <ExperienceArticle srcImg={typescriptImg} title="TypeScript" experience="Basic" />
              <ExperienceArticle srcImg={reactImg} title="React" experience="Intermediate" />
              <ExperienceArticle srcImg={mtuImg} title="Material UI" experience="Intermediate" />

            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <ExperienceArticle srcImg={websocketImg} title="Websocket" experience="Basic" />
              <ExperienceArticle srcImg={nodejsImg} title="Node JS" experience="Intermediate" />
              <ExperienceArticle srcImg={expressjsImg} title="Express JS" experience="Intermediate" />
              <ExperienceArticle srcImg={githubImg} title="GitHub" experience="Intermediate" />
              <ExperienceArticle srcImg={mongodbImg} title="MongoDB" experience="Intermediate" />
              <ExperienceArticle srcImg={mysqlImg} title="MySQL" experience="basic" />
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#projects'}
      />
    </section>
  );
};

const ExperienceArticle = ({ srcImg,title, experience }) => {
  return (
    <article>
      <img src={srcImg} alt="Experience icon" className="icon" />
      <div>
        <h3>{title}</h3>
        <p>{experience}</p>
      </div>
    </article>
  );
};

export default Experience;
