import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const Labour = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Labour Registration</h2>
          <p>Following Documents required for Labour License Registration Application</p>
          <div className="doc-content">
            <ul>
              <li>PAN Card of Applicant</li>
              <li>Aadhar Card of Applicant</li>
              <li>GST Registration Certificate</li>
              <li>PF Certificate</li>
              <li>ESIC Certificate or WC Policy</li>
              <li>Mobile and Email id</li>
              <li>Labour Contract Copy / LOI / Agreement</li>
              <li>Form 3 (Central License) or Form 5 (State License)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Labour;