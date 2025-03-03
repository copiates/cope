import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const Partnership = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Partnership Registration</h2>
          <div className="doc-content">
            <p>The documents required to be submitted to Registrar for registration of a Partnership Firm are:</p>
            <ul>
              <li>Application for registration of partnership (Form 1)</li>
              <li>Certified original copy of Partnership Deed</li>
              <li>Specimen of an affidavit certifying all the details mentioned in the partnership deed and documents are correct</li>
              <li>PAN card and address proof of the partners</li>
              <li>PAN card and address of the firm</li>
              <li>Proof of principal place of business of the firm (ownership documents or rental/lease agreement)</li>
              <li>NOC from the landlord</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partnership;