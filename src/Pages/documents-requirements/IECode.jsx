import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const IECode = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Import Export Code Registration</h2>
          <p>For IE code registration, the following documents are required:</p>
          <div className="doc-content">
            <ul>
              <li>Individual’s, firm’s or company’s copy of PAN Card.</li>
              <li>Proprietor’s voter ID, Aadhaar card or passport copy.</li>
              <li>Proof of establishment, incorporation or registration of the partnership, society, proprietorship firm, company, HUF, etc.</li>
              <li>Proof of address of business premise, such as sale deed, lease deed, rent agreement or utility bills (electricity bill, telephone bill or mobile bill).</li>
              <li>Individual’s or company’s or firm’s cancel cheque copies of current bank accounts.</li>
              <li>A self-addressed envelope for delivery of IEC certificate by registered post.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IECode;