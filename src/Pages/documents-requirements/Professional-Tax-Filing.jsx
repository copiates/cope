import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const PTDocuments = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
        <h2>Documents required for Professional Tax Return Filing</h2>
        <h4>The documents required while filing professional tax returns are:</h4>
          <div className="doc-content">
            <h4>Personal Details</h4>
            <ul>
              <li>PAN Card (Permanent Account Number)</li>
              <li>Aadhaar Card (for individual tax filings)</li>
              <li>Address proof (such as a utility bill or passport)</li>
            </ul>
            <h4>Income Details</h4>
            <ul>
              <li>Salary Slips (for employees)</li>
              <li>Form-16 issued by the employer</li>
              <li>Proof of any additional income (e.g., freelance, consulting income)</li>
            </ul>
            <h4>Business Details (for self-employed individuals)</h4>
            <ul>
              <li>GST registration details (if applicable)</li>
              <li>Income and expenditure records (Profit & Loss statement, balance sheet)</li>
              <li>TDS certificates, if any, for tax deducted at source</li>
              <li>Bank statements or passbooks to report business-related income</li>
            </ul>
            <h4>Professional Tax Challans</h4>
            <ul>
            <li>Copy of any earlier professional tax challans (for individuals already paying professional tax in Karnataka)</li>
            <li>Professional Tax Registration Certificate (if applicable)</li>
            </ul>
            <h4>Proof of Deductions</h4>
            <ul>
              <li>Details of any tax deductions that can be claimed under section 80C, 80D, etc. (e.g., PPF, insurance premiums, and other investments)</li>
              <li>Proof of any exemptions or special considerations (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PTDocuments;