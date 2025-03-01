import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const Proprietorship = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Proprietorship Registration</h2>
          <div className="doc-content">
            <ul>
              <li>PAN Card of the Proprietor</li>
              <li>Aadhar Card of Proprietor</li>
              <li>Passport Size Photographs</li>
              <li>Business Address Proof</li>
              <li>Residential Address Proof</li>
              <li>Bank Account Statement</li>
              <li>Business Name Approval</li>
              <li>Rent Agreement (if applicable)</li>
              <li>NOC from Property Owner</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Proprietorship; 