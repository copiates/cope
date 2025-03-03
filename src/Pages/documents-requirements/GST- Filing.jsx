import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const GSTDocuments = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents required for GST Return Filing</h2>
          <p>The documents required while filing GST return are:</p>
          <div className="doc-content">
            <ul>
              <li>List of Invoices (B2B Services, B2C Services)</li>
              <li>Customer GSTIN</li>
              <li>Type of Invoice</li>
              <li>Invoice Number</li>
              <li>Place of Supply</li>
              <li>GST Rate</li>
              <li>Taxable Value</li>
              <li>Amount of CGST, SGST, IGST and GST Cess applicable</li>
              <li>Consolidated intra-state and inter-state sales</li>
              <li>HSN wise summary details</li>
              <li>Summary of requisite documents i.e. Debit and Credit Note</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GSTDocuments;