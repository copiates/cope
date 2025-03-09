import React from 'react';
import './documents.css';

const ESI = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for ESIC Registration</h2>
          <p>The documents required while filling the ESIC online registration form are:</p>
          <div className="doc-content">
            <ul>
              <li>Registration Certificate obtained either under the Factories Act or Shops and Establishment Act</li>
              <li>Certificate of incorporation of the establishment - Certificate of Company Registration in case of a company or Partnership deed in case of a partnership firm</li>
              <li>GST certificate of the establishment</li>
              <li>Memorandum of Association and Articles of Association of the company</li>
              <li>Address proof of the establishment - Utility bills (Electricity bill, gas connection bill or telephone bill not exceeding three months), Rental agreement or Property tax receipts of the land on which the establishment is situated</li>
              <li>A list of all the employees working in the establishment</li>
              <li>PAN Card of the business establishment and all employees</li>
              <li>The compensation details of all the employees</li>
              <li>A cancelled cheque of the bank account of the company</li>
              <li>List of directors of the company</li>
              <li>List of the shareholders of the company</li>
              <li>A register containing the attendance of the employees</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESI;