import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const Shops = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Shops & Establishments Registration</h2>
          <div className="doc-content">
            <ul>
              <li>Proof of Business Premises</li>
              <li>Rent Agreement/Ownership Deed</li>
              <li>PAN Card of Business Owner</li>
              <li>ID Proof of Business Owner</li>
              <li>Business Address Proof</li>
              <li>NOC from Property Owner</li>
              <li>Photographs of Business Premises</li>
              <li>Fire Safety Certificate (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shops; 