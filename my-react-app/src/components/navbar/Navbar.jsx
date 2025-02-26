import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/ca-logo.png';
import callIcon from '../../assets/call-icon.png';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="tax-banner">
        <Link to="tax">Updated for Budget 2025, The Income Tax Calculator for FY 2025-26 is now live!</Link>
      </div>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="" className="home-link">
            <img src={logo} alt="CA Logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="">Home</Link>
          <div className="dropdown">
            <button className="dropdown-button">
              Services
              <span className="arrow"></span>
            </button>
            <div className="dropdown-content">
              <Link to="services/itr">Income Tax Filing</Link>
              <Link to="services/partnership">Partnership Deed</Link>
              <Link to="services/accounting">Accounting Services</Link>
            </div>
          </div>
          <Link to="about">About</Link>
        </div>
        <div className="navbar-contact">
          <img src={callIcon} alt="Phone Icon" />
          <p>+91 9845643599</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
