import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const OPC = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for One Person Company Registration</h2>
          <div className="doc-content">
            <ul>
              <li>PAN Card of Director</li>
              <li>Aadhar Card of Director</li>
              <li>Digital Signature Certificate</li>
              <li>Passport Size Photograph</li>
              <li>Business Address Proof</li>
              <li>NOC from Property Owner</li>
              <li>Bank Statement</li>
              <li>Nominee Details & Documents</li>
              <li>Declaration of Unqualified Director</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OPC; 