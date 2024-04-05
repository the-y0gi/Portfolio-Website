import React from 'react';
import expre from '../assets/experience.png';
import edu from '../assets/education.png';
import img from '../assets/profile-img2.webp';
import arrow from '../assets/arrow.png';

const AboutSection = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={img}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={expre}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>1+ years <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img
                src={edu}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>Bechelor of Technology<br />from JEC </p>
            </div>
          </div>
          <div className="text-container">
            <p>
            Hi everyone, I'm <b>Yogesh</b>. As a <b>Frontend Developer</b>, I am passionate about creating user-friendly interfaces using the <b>MERN Stack</b>.
            The web's potential for innovation constantly fascinates me, and I enjoy exploring new technologies and design trends to make web experiences even more seamless and enjoyable. Looking forward to connecting!


            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#experience'}
      />
    </section>
  );
};

export default AboutSection;
