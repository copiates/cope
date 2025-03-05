import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/ca-logo3.png';
import callIcon from '../../assets/call-icon.png';
import whatsappIcon from '../../assets/whatsapp.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsDropdownOpen(false);
  };

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
          <Link to="/" onClick={ handleLinkClick}>Home</Link>
          <div className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
            <button className="dropdown-button" onClick={toggleDropdown}>
              Services
              <span className="arrow"></span>
            </button>
            <div className="dropdown-content">
              <Link to="/services/registration" onClick={ handleLinkClick}>Registration Services</Link>
              <Link to="/services/filing" onClick={ handleLinkClick}>Filing Services </Link>
              <Link to="/services/financial-services" onClick={ handleLinkClick}>Financial Services</Link>
            </div>
          </div>
          <Link to="/about" onClick={ handleLinkClick}>About</Link>
        </div>
        <div className="navbar-contact">
          <a href="https://api.whatsapp.com/send?phone=919845643599" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
            <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
          </a>
          <p>+91 9845643599</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
