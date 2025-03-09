import React from 'react';
import './documents.css';

const OPC = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for One Person Company Registration</h2>
          <p>We have to prepare the following documents which are required to be submitted to the ROC:</p>
          <div className="doc-content">
            <ul>
              <li>The Memorandum of Association (MoA) which are the objects to be followed by the Company or stating the business for which the company is going to be incorporated.</li>
              <li>The Articles of the Association (AoA) lays down the by-laws on which the company will operate.</li>
              <li>Since there are only 1 Director and a member, a nominee on behalf of such a person has to be appointed because in case he becomes incapacitated or dies and cannot perform his duties the nominee will perform on behalf of the director and take his place. His consent in Form INC – 3 will be taken along with his PAN card and Aadhar Card.</li>
              <li>Proof of the Registered office of the proposed Company along with the proof of ownership and a NOC from the owner.</li>
              <li>Declaration and Consent of the proposed Director of Form INC -9 and DIR – 2 respectively.</li>
              <li>A declaration by the professional certifying that all compliances have been made.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OPC; 