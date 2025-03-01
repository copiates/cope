import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const PTR = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Professional Tax Registration</h2>
          <div className="doc-content">
            <ul>
              <li>PAN Card of Business/Individual</li>
              <li>Address Proof of Business</li>
              <li>Bank Account Statement</li>
              <li>Proof of Business Ownership</li>
              <li>Latest Utility Bill</li>
              <li>Rental Agreement (if applicable)</li>
              <li>Employee Details</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PTR; 