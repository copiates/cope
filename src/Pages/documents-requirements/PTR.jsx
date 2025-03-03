import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const PTR = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Professional Tax Registration</h2>
          <p>The following information and documents are required for Professional Tax Registration:</p>
          <div className="doc-content">
            <ul>
              <li>Legal Name of Employer</li>
              <li>Permanent Account Number or Tax Deduction Account Number or Tax Collection Account Number of the Employer</li>
              <li>Trade Name, if any</li>
              <li>Constitution of Profession, Trade, etc</li>
              <li>Nature of the Profession, Trade, etc</li>
              <li>Full postal address and telephone Nos. of the main place of work</li>
              <li>Full postal address and telephone Nos. of the additional place/s of work</li>
              <li>Aadhaar No. of Authorised Signatory (Optional)</li>
              <li>Name of the Authorised Signatory</li>
              <li>Mobile No. of Authorised Signatory</li>
              <li>Status of person signing this form – Proprietor-1, Partner-2, Principal Officer-3, Agent-4, Manager-5, Director-6, Secretary-7, Others (specify)-8</li>
              <li>Photograph of Authorised Signatory</li>
              <li>Enrolment No. under Profession Tax Act</li>
              <li>Goods and Services Tax No. (GSTIN)</li>
              <li>KST/CST/Any other Registration or License Number</li>
              <li>Date of Commencement of Trade, Profession</li>
              <li>Number of Employees</li>
              <li>Scanned Documents :
                (1) - Photograph of Proprietor, Partner, Director, Authorised Person;
                (2) - Constitutions of Business: Registration of Incorporation, Deed of Partnership firm, Registration Certificate etc. as applicable;
                (3) - Proof of Principal Place of Business</li>
              <li>Consent (if option of verification by Aadhaar is exercised)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PTR; 