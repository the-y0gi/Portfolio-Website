import React from 'react';

import '../App.css';
import img1 from '../assets/profile-pic.png';
import img3 from '../assets/github.png';
import img2 from '../assets/linkedin.png';
import resume from '../assets/resume.pdf';
const ProfileSection = () => {
  const openCV = () => {
    window.open(resume);
  };

 
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={img1} alt="Dev y0gi profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title name">Yogesh Gadhewal</h1>
        <p className='section__text__p2'>Frontend Developer</p>
      
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={openCV}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={img2}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/in/yogesh-gadhewal-a470322b5/', '_blank')}
          />
          <img
            src={img3}
            alt="My Github profile"
            className="icon"
            onClick={() => window.open('https://github.com/the-y0gi', '_blank')}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
