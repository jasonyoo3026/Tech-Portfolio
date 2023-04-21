import React from 'react';
import Project from './Project';
import project1Image from '../Assets/Project-1.png';
import project2Image from '../Assets/Project-2.png';
import project3Image from '../Assets/Password-generator.png';
import project4Image from '../Assets/Text-Editor.png';
import project5Image from '../Assets/note-taking-storage.png';
import project6Image from '../Assets/Work-Scheduler.png';
import { Header } from 'semantic-ui-react';

const projects = [
  // Add your projects here with the following structure
  { title: 'Whats To Eat', imageUrl: project1Image, liveUrl: 'https://jordannotavailable.github.io/project-1/', repoUrl: 'https://github.com/JordanNotAvailable/project-1' },
  { title: 'Impress Apparel', imageUrl: project2Image, liveUrl: 'https://project-2-fullstack-estore.herokuapp.com/', repoUrl: 'https://github.com/ptrcao/project-2-fullstack-estore' },
  { title: 'Password Generator', imageUrl: project3Image, liveUrl: 'https://jasonyoo3026.github.io/wk3-Password_Generator/Develop/', repoUrl: 'https://github.com/jasonyoo3026/Password-Generator' },
  { title: 'Text Editor', imageUrl: project4Image, liveUrl: 'https://still-fortress-36681.herokuapp.com/', repoUrl: 'https://github.com/jasonyoo3026/Text-Editor-PWA' },
  { title: 'Note Taking Storage', imageUrl: project5Image, liveUrl: 'https://intense-refuge-19036.herokuapp.com/notes', repoUrl: 'https://github.com/jasonyoo3026/Note-Taking-Storage' },
  { title: 'Work Day Scheduler', imageUrl: project6Image, liveUrl: 'https://jasonyoo3026.github.io/Time-Scheduler/', repoUrl: 'https://github.com/jasonyoo3026/Time-Scheduler' },
//   { title: 'Project Title', imageUrl: 'project-image-url', liveUrl: 'live-project-url', repoUrl: 'repository-url' }
];

const Portfolio = () => {
  return (
    <section className="container mt-5">
      <Header as="h1" dividing>
        Portfolio
      </Header>
      <div className="row">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
