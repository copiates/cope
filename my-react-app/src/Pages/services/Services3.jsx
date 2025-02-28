import React from 'react';
import './services.css'
import Footer from '../../containers/footer/Footer';

const Services3 = () => {
  return (
    <div>
      <div className="services-container">
        <div className="brand">
          <h2>Financial Services</h2>
          <ul>
            <li>Project Reports for Bank Loans</li>
            <li>Other Financial Consultation for:
              <ul>
                <li>Mortgage Loans</li>
                <li>Overdraft Loans</li>
                <li>Cash Credit Loans</li>
                <li>Bank Guarantee</li>
                <li>Letter of Credit</li>
                <li>Housing Loans</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services3;
