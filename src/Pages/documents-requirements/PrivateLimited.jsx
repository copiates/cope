import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const PrivateLimited = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Private Limited Company Registration</h2>
          <h4>The following documents required for private limited company registration are:</h4>
          <div className="doc-content">
            <h4>For Indian Nationals</h4>
            <ul>
              <li>Self-attested PAN card copy</li>
              <li>Passport-sized photo</li>
              <li>Aadhaar Card</li>
              <li>Proof of identity</li>
              <li>Address proof</li>
            </ul>
            <h4>For Foreign Nationals</h4>
            <ul>
              <li>Notarized documents</li>
              <li>Passport-sized photo</li>
              <li>Passport</li>
              <li>Address proof</li>
            </ul>
            <h4>Registered Office Documents</h4>
            <ul>
              <li>Proof of business address</li>
              <li>Copy of the rent agreement (if applicable)</li>
              <li>Owner's no objection certificate</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivateLimited; 