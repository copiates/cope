import React from 'react';
import './documents.css';

const LEI = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Legal Entity Identifier Registration</h2>
          <h4>The following documents required for legal entity identifier registration are:</h4>
          <div className="doc-content">
            <h4>Partnership</h4>
            <ul>
              <li>GST Certificate</li>
              <li>Partnership Deed AND PAN</li>
              <li>IEC</li>
              <li>UDYAM (Mandatory if Partnership Deed is provided)</li>
            </ul>
            <h4>Private Limited / Limited / LLP</h4>
            <ul>
              <li>Certificate of Incorporation</li>
              <li>GST Certificate</li>
              <li>IEC Certificate (Any One)</li>
            </ul>
            <h4>Trust</h4>
            <ul>
              <li>GST Certificate & PAN</li>
              <li>Trust Deed & PAN</li>
              <li>NGO Darpan (Any One)</li>
            </ul>
            <h4>Society / NGO / Foundation / AOP / Academic Institution</h4>
            <ul>
              <li>GST Certificate & PAN</li>
              <li>NGO Darpan Certificate</li>
              <li>UDYAM Certificate & Bye Laws</li>
            </ul>
            <h4>Bank</h4>
            <ul>
              <li>GST Certificate & PAN</li>
              <li>RBI License with Board Resolution & PAN</li>
            </ul>
            <h4>Sole Proprietorship</h4>
            <ul>
              <li>GST Certificate</li>
              <li>IEC</li>
              <li>UDYAM *(All Pages) (Any One)</li>
            </ul>
            <h4>HUF (Hindu Undivided Family)</h4>
            <ul>
              <li>GST Certificate & PAN</li>
              <li>UDYAM Certificate & Member List</li>
            </ul>
            <h4>Fund / Scheme</h4>
            <ul>
              <li>Deed & Board Resolution & PAN</li>
            </ul>
            <h4>Others</h4>
            <ul>
              <li>GST Certificate</li>
              <li>Partnership Deed AND PAN</li>
              <li>IEC</li>
              <li>UDYAM (Mandatory if Partnership Deed is provided)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LEI;