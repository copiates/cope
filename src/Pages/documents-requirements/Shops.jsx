import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const Shops = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Shops & Establishments Registration</h2>
          <h4>The following documents required for shops & establishments registration are:</h4>
          <div className="doc-content">
            <h4>For Sole Proprietorship</h4>
            <ul>
              <li>PAN card</li>
              <li>Address proof (utility bill, rental agreement, etc.)</li>
              <li>Rental agreement (if applicable)</li>
              <li>Passport-sized photographs of the owner</li>
            </ul>
            <h4>For Partnership Firms</h4>
            <ul>
              <li>PAN card of the firm</li>
              <li>Partnership deed</li>
              <li>Address proof of all partners</li>
              <li>Rental agreement</li>
              <li>Passport-sized photographs of all partners</li>
            </ul>
            <h4>For Private Limited Companies</h4>
            <ul>
              <li>PAN card of the company</li>
              <li>Certificate of Incorporation</li>
              <li>MOA (Memorandum of Association) and AOA (Articles of Association)</li>
              <li>Address proof of directors</li>
              <li>Rental agreement</li>
              <li>Passport-sized photographs of all directors</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shops; 