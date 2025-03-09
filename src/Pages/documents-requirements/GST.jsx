import React from 'react';
import './documents.css';

const GST = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for GST Registration</h2>
          <h4>documents required for GST registration based on the business structure:</h4>
          <div className="doc-content">
            <h4>Proprietorship</h4>
            <ul>
              <li>Aadhar card of the owner</li>
              <li>Photograph of the owner (in JPEG format, maximum size – 100 KB)</li>
              <li>Bank account details</li>
              <li>Address proof</li>
            </ul>
            <h4>Partnership firm/ LLP</h4>
            <ul>
              <li>PAN card of all partners (including managing partner and authorized signatory)</li>
              <li>Copy of partnership deed</li>
              <li>Photograph of all partners and authorised signatories (in JPEG format, maximum size – 100 KB)</li>
              <li>Address proof of partners (Passport, driving license, Voters identity card, Aadhar card etc.)</li>
              <li>Aadhar card of authorised signatory</li>
              <li>Proof of appointment of authorized signatory</li>
              <li>In the case of LLP, registration certificate / Board resolution of LLP</li>
              <li>Bank account details</li>
              <li>Address proof of principal place of business</li>
            </ul>
            <h4>HUF</h4>
            <ul>
              <li>PAN card of HUF</li>
              <li>PAN card and Aadhar card of Karta</li>
              <li>Photograph of the owner (in JPEG format, maximum size – 100 KB)</li>
              <li>Bank account details</li>
              <li>Address proof of principal place of business</li>
            </ul>
            <h4>Company (Public/ Private/ Indian/ foreign)</h4>
            <ul>
              <li>PAN card of Company</li>
              <li>Certificate of incorporation given by Ministry of Corporate Affairs</li>
              <li>Memorandum of Association / Articles of Association</li>
              <li>PAN card and Aadhar card of authorized signatory. The authorised signatory must be an Indian even in case of foreign companies/branch registration</li>
            </ul>

            <h3>documents required for GST registration based on the nature of business activity:</h3>

            <h4>Normal taxpayer Registration (including composition dealer, government departments and ISD registrations)</h4>
            <ul>
              <li>PAN card of Company (only in case of Company)</li>
              <li>Certificate of incorporation given by Ministry of Corporate Affairs / Proof of constitution of business</li>
              <li>Memorandum of Association (MOA) / Articles of Association (AOA) (only in case of Company)</li>
              <li>PAN card and Aadhaar card of authorized signatory. The authorized signatory must be an Indian, even for foreign companies/branch registration.</li>
              <li>PAN card and address proof of all directors of the Company (partners in case of firm)</li>
              <li>Photograph of all directors and authorized signatory (in JPG format, maximum size – 100 KB)</li>
              <li>Board resolution appointing authorized signatory / Any other proof of appointment of authorized signatory (in JPEG format / PDF format, maximum size – 100 KB)</li>
              <li>Bank account details</li>
              <li>Address proof of principal place of business</li>
            </ul>
            <h4>GST practitioner</h4>
            <ul>
              <li>Photo of the applicant (in JPG format, maximum size – 100 KB)</li>
              <li>Address proof of place where professional practice takes place</li>
              <li>Proof of qualifying degree (Degree certificate)</li>
              <li>Pension certificate (only in case of retired Government officials)</li>
            </ul>
            <h4>TDS registration</h4>
            <ul>
              <li>Photo of drawing and disbursing officer (in JPG format, maximum size – 100 KB)</li>
              <li>PAN and TAN number of the person being registered</li>
              <li>Photo of authorized signatory (in JPG format, maximum size – 100 KB)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GST;