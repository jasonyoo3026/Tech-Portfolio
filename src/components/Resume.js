import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import '../styles/Resume.css'; // Import the custom CSS file

const Resume = () => {
  const proficiencies = [
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'MySQL', icon: 'database' },
    { name: 'MongoDB', icon: 'database' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'node' },
  ];

  return (
    <section className="container mt-5" style={{ marginBottom: '2rem' }}>
      <Header as="h1" dividing>
        Resume
      </Header>
      <a href="https://drive.google.com/file/d/1AP2c1QUW81c6pHcvgcowNZyhLAwKhsG8/view?usp=share_link" target="_blank" rel="noreferrer" className="btn btn-secondary mb-3">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul className="list-group">
        {proficiencies.map((proficiency, index) => (
          <li key={index} className="list-group-item d-flex align-items-center">
            {proficiency.icon ? (
              <Icon name={proficiency.icon} size="huge" className="me-2" />
            ) : (
              <img src={proficiency.imageUrl} alt={proficiency.name} className="icon-image me-2" />
            )}
            {proficiency.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;

