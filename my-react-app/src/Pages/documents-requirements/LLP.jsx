import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const LLP = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for LLP Registration</h2>
          <div className="doc-content">
            <ul>
              <li>Digital Signature Certificate (DSC) of Partners</li>
              <li>PAN Cards of all Designated Partners</li>
              <li>Aadhar Cards of all Partners</li>
              <li>Address Proof of Registered Office</li>
              <li>NOC from Property Owner</li>
              <li>Passport Size Photographs of Partners</li>
              <li>Proof of Partners' Residence</li>
              <li>Utility Bills of Business Place</li>
              <li>Bank Statement/Cancelled Cheque</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LLP; 