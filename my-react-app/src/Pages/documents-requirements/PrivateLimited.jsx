import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const PrivateLimited = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Private Limited Company Registration</h2>
          <div className="doc-content">
            <ul>
              <li>Digital Signature Certificate (DSC) of Directors</li>
              <li>PAN Cards of all Directors</li>
              <li>Aadhar Cards of all Directors</li>
              <li>Passport Size Photographs of Directors</li>
              <li>Residential Proof of Directors</li>
              <li>Registered Office Proof</li>
              <li>NOC from Property Owner</li>
              <li>Bank Statement/Utility Bills</li>
              <li>Board Resolution</li>
              <li>Memorandum of Association (MOA)</li>
              <li>Articles of Association (AOA)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivateLimited; 