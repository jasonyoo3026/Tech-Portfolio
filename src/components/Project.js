import React from 'react';
import { Icon } from 'semantic-ui-react';
import '../styles/Project.css';

const Project = ({ project }) => {
  const { title, imageUrl, liveUrl, repoUrl } = project;

  return (
    <div className="col-lg-4 col-md-6 mb-4 d-flex">
      <div className="project-container">
        <h4 className="project-title" style={{ fontSize: '24px' }}>{title}</h4>
        <div className="card h-100 project-card">
          <div className="project-image">
            <img src={imageUrl} alt={title} className="card-img-top" />
            <div className="button-overlay">
              <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Live
              </a>
              <a href={repoUrl} target="_blank" rel="noreferrer" className="btn btn-secondary ms-2">
                <Icon name="github" size="large" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
