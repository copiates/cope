import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const PF = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for PF Registration</h2>
          <div className="doc-content">
            <ul>
              <li>PAN Card of the Business Entity</li>
              <li>Company Incorporation Certificate</li>
              <li>Bank Account Details</li>
              <li>Employee Details with KYC</li>
              <li>Digital Signature Certificate (DSC)</li>
              <li>Cancelled Cheque of Company Account</li>
              <li>Address Proof of Establishment</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PF; 