import React from 'react';
import { Icon } from 'semantic-ui-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container text-center">
        <span className="text-white">
          &copy; {new Date().getFullYear()} Jason Yoo. All rights reserved.
        </span>
        <div className="mt-2">
          <a href="https://github.com/jasonyoo3026" target="_blank" rel="noreferrer" className="text-white">
            <Icon name="github" size="large" />
          </a>
          <a href="https://www.linkedin.com/in/jason-jung-hyun-yoo-2a4546170/" target="_blank" rel="noreferrer" className="text-white ms-2">
            <Icon name="linkedin" size="large" />
          </a>
          <a href="https://stackoverflow.com/users/21668468/jason-yoo" target="_blank" rel="noreferrer" className="text-white ms-2">
            <Icon name="stack overflow" size="large" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

