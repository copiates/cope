import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const PFDocuments = () => {
  

  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents required for Provident Fund Return Filing</h2>
          <h4>The documents required while filing provident fund returns are:</h4>
          <div className="doc-content">
            <ul>
              <li>Employer's contribution amount to EPF</li>
              <li>Employee's contribution amount to EPF</li>
              <li>ECR (Electronic Challan cum Return) Challan copy</li>
              <li>Details of UAN (Universal Account Number), with KYC compliance, of employees</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PFDocuments;