import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const IECode = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Import Export Code Registration</h2>
          <div className="doc-content">
            <ul>
              <li>PAN Card of Entity/Individual</li>
              <li>Aadhar Card of Applicant</li>
              <li>Bank Certificate/Cancelled Cheque</li>
              <li>Business Registration Certificate</li>
              <li>GSTIN Certificate (if applicable)</li>
              <li>Digital Photograph of Applicant</li>
              <li>Business Address Proof</li>
              <li>Digital Signature Certificate</li>
              <li>Partnership Deed/MOA/AOA (as applicable)</li>
              <li>Director/Partner Identity Proof</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IECode; 