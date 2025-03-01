import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const LEI = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Legal Entity Identifier Registration</h2>
          <div className="doc-content">
            <ul>
              <li>Business Registration Certificate</li>
              <li>PAN Card of the Entity</li>
              <li>GST Registration Certificate</li>
              <li>Company Incorporation Certificate</li>
              <li>Proof of Registered Address</li>
              <li>Board Resolution for LEI</li>
              <li>Latest Balance Sheet</li>
              <li>Authorized Signatory Details</li>
              <li>Bank Account Details</li>
              <li>Parent Company Details (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LEI; 