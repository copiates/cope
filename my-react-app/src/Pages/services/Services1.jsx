import React from 'react';
import './services.css'
import Footer from '../../containers/footer/Footer';

const Services1 = () => {
  return (
    <div>
      <div className="services-container">
        <div className="service-card">
          <h3>Registration Services</h3>
          <div className="service-content">
            <p>We provide comprehensive registration services for:</p>
            <ul>
              <li>ESI - Employee State Insurance</li>
              <li>PF - Provident Fund</li>
              <li>PTR - Professional Tax Registration</li>
              <li>Labour Registration</li>
              <li>Shops and Establishments Registration</li>
              <li>GST - Goods and Services Tax Registration</li>
              <li>Proprietorship Firm Registration</li>
              <li>Partnership Firm Registration</li>
              <li>LLP - Limited Liability Partnership Registration</li>
              <li>One Person Company Registration</li>
              <li>Private Limited Company Registration</li>
              <li>IE Code - Import Export Code Registration</li>
              <li>LAE - Legal Entity Identifier (LEI) Registration</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services1
