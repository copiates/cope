import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const Labour = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Labour Registration</h2>
          <div className="doc-content">
            <ul>
              <li>Business Registration Certificate</li>
              <li>PAN Card of the Business</li>
              <li>GST Registration (if applicable)</li>
              <li>List of Workers/Employees</li>
              <li>Employee Identity Proofs</li>
              <li>Business Address Proof</li>
              <li>Safety and Health Policy Documents</li>
              <li>Appointment Letters of Employees</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Labour; 