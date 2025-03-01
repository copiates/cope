import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const GST = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for GST Registration</h2>
          <div className="doc-content">
            <ul>
              <li>PAN Card of Business Entity</li>
              <li>Aadhar Card of Proprietor/Directors</li>
              <li>Business Registration Document</li>
              <li>Bank Account Statement/Cancelled Cheque</li>
              <li>Address Proof of Business Place</li>
              <li>Electricity Bill of Business Place</li>
              <li>Rent Agreement (if rented premises)</li>
              <li>Photographs of Business Premises</li>
              <li>Digital Signature Certificate</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GST; 