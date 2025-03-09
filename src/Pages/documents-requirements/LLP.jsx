import React from 'react';
import './documents.css';

const LLP = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for LLP Registration</h2>
          <h4>The following documents required for LLP registration are:</h4>
          <div className="doc-content">
              <h4>For Partners / Promoters</h4>
              <ul>
                <li>Copy of PAN</li>
                <li>Copy of Address proof – Aadhaar Card / Driving License / Passport / Voter ID</li>
                <li>One Photograph</li>
                <li>Copy of Bank Statement / Electricity Bill / Mobile Bill / Landline Telephone Bill</li>
              </ul>
              <h4>For LLP Address</h4>
              <ul>
                <li>Proof of Registered Address – Sale Deed / Rental Agreement</li>
                <li>Copy of Utility bill – (EB, Telephone Bill, Property Tax Receipt, Water Tax Bill) for proposed company address not older than 2 months</li>
                <li>NOC from owner / occupier of the property to use the premises as registered office</li>
              </ul>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLP;