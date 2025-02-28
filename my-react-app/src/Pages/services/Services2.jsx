import React from 'react';
import './services.css'
import Footer from '../../containers/footer/Footer';

const Services2 = () => {
  return (
    <div>
      <div className="services-container">
        <div className="service-card">
          <h3>Filing Services</h3>
          <div className="service-content">
            <p>We provide comprehensive filing services for:</p>
            <ul>
              <li>ITR - Income Tax Returns Filing</li>
              <li>GST - Goods and Services Tax Filing</li>
              <li>PT - Professional Tax Filing</li>
              <li>ESI - Employee State Insurance Filing</li>
              <li>PF - Provident Fund Filing</li>
              <li>ROC - Registrar of Companies Filing</li>
              <li>Any other filing services related to the above mentioned services</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services2
