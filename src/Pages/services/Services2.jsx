import React from 'react';
import { Link } from 'react-router-dom';
import './services1&2.css';
import Footer from '../../containers/footer/Footer';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Services2 = () => {
  return (
    <div>
      <div className="services-container">
        <div className="service-card">
          <h3>Filing Services</h3>
          <div className="service-content">
            <p>We provide comprehensive filing services for:</p>
            <ul>
              <li>
                ITR - Income Tax Return Filing
                <Link to="/documents/itr-documents" className="docs-btn" onClick={scrollToTop}>
                  Documents Required
                </Link>
              </li>
              <li>
                GST - Goods and Services Tax Return Filing
                <a href="https://www.whatsapp.com/" className="contact-btn" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </li>
              <li>
                PT - Professional Tax Return Filing
                <a href="https://www.whatsapp.com/" className="contact-btn" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </li>
              <li>
                ESI - Employee State Insurance Return Filing
                <a href="https://www.whatsapp.com/" className="contact-btn" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </li>
              <li>
                PF - Provident Fund Return Filing
                <a href="https://www.whatsapp.com/" className="contact-btn" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </li>
              <li>
                ROC - Registrar of Companies Filing
                <a href="https://www.whatsapp.com/" className="contact-btn" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </li>
              <li>
                Any other filing services related to the above mentioned services
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services2;
