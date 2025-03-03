import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const ROCDocuments = () => {
  

  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
        <h2>Documents required for ROC Filing</h2>
        <p>The documents required while filing register of companies are:</p>
          <div className="doc-content">
            <ul>
              <li>Registered Office and Business Activities</li>
              <li>Holding, Subsidiary, and Associate Companies</li>
              <li>Shareholding Pattern, Securities, and Indebtedness</li>
              <li>Changes in Members, Directors, and Key Personnel</li>
              <li>Meetings, Attendance, and Remuneration Details</li>
              <li>Penalties or Punishments</li>
              <li>Compliance Certifications and Other Disclosures</li>
              <li>Filing of Annual Return (Form MGT-7)</li>
              <li>Filing of Financial Statements (Form AOC-4)</li>
              <li>MGT 8 (applicable to a listed company or company having a paid-up share capital of Rs. 10 Crores or more or a company with a turnover of Rs. 50 Crores or more)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ROCDocuments;