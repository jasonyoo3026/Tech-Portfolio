import React from 'react';
import jasonPhoto from '../Assets/Jason-Photo.png';
// import styles from '../styles/About.css';
import { Header, Image } from 'semantic-ui-react';

const About = () => {
  return (
    <section className="container mt-5"style={{ marginBottom: '2rem' }}>
       <Header as="h1" dividing>
        About Me
      </Header>
      <div className="row">
        <div className="col-md-3">
          <Image src={jasonPhoto} alt="Jason Yoo" size="medium" circular/>
        </div>
        <div className="col-md-8">
          <p style={{ fontSize: '18px' }}>I am a Sydney-based web developer with a background in Mechanical Engineering, passionate about creating professional websites. I am currently enrolled in the University of Sydney's Coding Bootcamp, pursuing a Full Stack Web Development program while working as a Quality Assurance Engineer. Through the bootcamp, I have honed my skills in HTML, CSS, JavaScript, APIs, Express, MySQL, NoSQL, PWAs, and the MERN Stack. In my free time, I am an avid baseball fan who enjoys a diverse range of sports and has a deep appreciation for music.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
