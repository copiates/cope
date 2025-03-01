import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const ESI = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for ESI Registration</h2>
          <div className="doc-content">
            <ul>
              <li>PAN Card of the Business Entity</li>
              <li>Address Proof of Business</li>
              <li>Bank Account Details</li>
              <li>Details of Employees</li>
              <li>Digital Signature Certificate (DSC)</li>
              {/* Add more required documents */}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ESI; 