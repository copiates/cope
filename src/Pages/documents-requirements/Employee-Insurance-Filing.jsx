import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const EmployeeInsuranceFiling = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
        <h2>Documents required for Employee Insurance Return Filing</h2>
        <p>The documents required while filing employee insurance returns are:</p>
          <div className="doc-content">
            <h4>Employee Records:</h4>
            <ul>
              <li>Attendance Log</li>
              <li>Wages Register</li>
              <li>Employee Details (including ESI contributions)</li>
              <li>Organization's Attendance Records</li>
            </ul>
            <h4>Forms and Filings:</h4>
            <ul>
              <li>Form 6 (for ESI filing)</li>
              <li>ESI Challans and Returns (monthly contributions)</li>
            </ul>
            <h4>Workplace Compliance:</h4>
            <ul>
              <li>Accident Report List</li>
              <li>Inspection Book (for ESI inspections)</li>
            </ul>
            <h4>Additional Documents for Compliance:</h4>
            <ul>
              <li>Registration Certificate/License (under Shops and Establishments Act)</li>
              <li>Certificate of Incorporation (for companies)</li>
              <li>Memorandum and Articles of Association (for companies)</li>
              <li>Trust Deed (for partnership firms)</li>
              <li>Factory Work Commencement Certificate (for factories)</li>
              <li>Director, Shareholder, and Partner Information</li> 
              <li>PAN of the Organization</li>
              <li>Bank Statement</li>
              <li>Property Address and Details</li>
              <li>Certifications and Inspection Records</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployeeInsuranceFiling;