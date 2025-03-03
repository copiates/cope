import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const PF = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for PF Registration</h2>
          <p>The following documents need to be attached to the "Registration Form for EPFO" by the employer:</p>
          <div className="doc-content">
            <ul>
              <li>PAN Card of the Proprietor/Partner/Director</li>
              <li>Proof of address such as the Electricity Bill or Water Bill or Telephone Bill of the Registered Office (not older than 2 months)</li>
              <li>Aadhaar Card of Proprietor/Partner/Director</li>
              <li>Shop and Establishment Certificate/GST Certificate/ any License issued by the government for the establishment</li>
              <li>Digital Signature of the Proprietor/Partner/Director</li>
              <li>Cancelled Cheque or Bank Statement of Entity</li>
              <li>Hired/Rented/Leased Agreement, if any</li>
              <li>License Proof issued by the Identifier/Licensing Authority</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PF; 