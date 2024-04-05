import React from 'react';
import emailImg from '../assets/email.png';
import linkImg from '../assets/linkedin.png';
const Contact = () => {
  
  
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailImg}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="https://mail.google.com/mail/yogeshgadhewal28@gmail.com" target='blank' >yogeshgadhewal28@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkImg}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/yogesh-gadhewal-a470322b5" target='blank'>LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
