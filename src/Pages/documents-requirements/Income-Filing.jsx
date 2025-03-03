import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const ITRDocuments = () => {
  

  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents required for Income Tax Filing</h2>
          <p>The documents required while filing income taxes are:</p>
          <div className="doc-content">
            <h4>For Salaried Employees:</h4>
            <ul>
              <li>PAN, Aadhaar card, Form-16 (Part A and B), and month-wise salary slips.</li>
              <li>Disclose all taxable allowances and exemptions (e.g., HRA, LTA).</li>
            </ul>

            <h4>For Income from House Property:</h4>
            <ul>
              <li>Rental income details, tenant info (PAN/Aadhaar), property address, co-owner details.</li>
              <li>Interest certificate for loans, including pre-construction interest and municipal tax receipts.</li>
            </ul>

            <h4>For Capital Gains:</h4>
            <ul>
              <li>Documents for sale/purchase of immovable property (deeds, cost details, buyer details).</li>
              <li>For mutual funds/equity shares: capital gain statements from CAMs/Kfintech or your broker.</li>
              <li>Supporting documents for any exemptions under Section 54 or 54EC.</li>
            </ul>

            <h4>For Interest Income:</h4>
            <ul>
              <li>Bank statements for savings account interest, FD interest statements, TDS certificates.</li>
              <li>Cleartax offers tax benefits under Section 80TTA for savings account interest.</li>
            </ul>

            <h4>Form 26AS and AIS/TIS:</h4>
            <ul>
              <li>Form 26AS provides tax deducted and paid details.</li>
              <li>AIS provides a detailed summary of your financial transactions like interest, dividends, and stock market transactions.</li>
            </ul>
            <h4>Section 80 Investments:</h4>
            <ul>
              <li>Documents for investments in PPF, NSC, ULIPs, ELSS, LIC for tax-saving deductions under Section 80C.</li>
            </ul>

            <h4>Documents for Claiming Deductions:</h4>
            <ul>
              <li>Documents for provident fund contributions, tuition fees, life insurance premiums, home loan principal repayment, and investments in ELSS/mutual funds.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ITRDocuments;