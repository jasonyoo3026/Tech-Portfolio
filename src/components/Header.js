import React from 'react';
import '../styles/Header.css';
import logo from '../Assets/Name-logo.png';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="background-header text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink exact to="/">
          <img src={logo} alt="Jason Yoo" className="logo" />
        </NavLink>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
