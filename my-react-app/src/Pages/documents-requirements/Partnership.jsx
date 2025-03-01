import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const Partnership = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Partnership Registration</h2>
          <div className="doc-content">
            <ul>
              <li>PAN Cards of all Partners</li>
              <li>Aadhar Cards of all Partners</li>
              <li>Partnership Deed</li>
              <li>Business Address Proof</li>
              <li>Residential Address Proof of Partners</li>
              <li>Bank Account Details</li>
              <li>Photographs of all Partners</li>
              <li>Business Name Approval</li>
              <li>Property Documents/Rent Agreement</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partnership; 