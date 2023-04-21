import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <>
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                exact
                to="/"
                activeClassName="active"
                className="nav-link-large"
              >
                About Me
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/portfolio"
                activeClassName="active"
                className="nav-link-large"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                activeClassName="active"
                className="nav-link-large"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/resume"
                activeClassName="active"
                className="nav-link-large"
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
