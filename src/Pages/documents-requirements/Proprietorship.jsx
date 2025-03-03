import React from 'react';
import './documents.css';
import Footer from '../../containers/footer/Footer';

const Proprietorship = () => {
  return (
    <div>
      <div className="doc-container">
        <div className="doc-card">
          <h2>Documents Required for Proprietorship Registration</h2>
          <p>The following documents required for proprietorship registration are:</p>
          <div className="doc-content">
            <ul>
              <li>Aadhaar Card of the proprietor.</li>
              <li>PAN card of the proprietor.</li>
              <li>Name and address of the business.</li>
              <li>Bank account in the name of the business.</li>
              <li>Registration under the Shop and Establishment Act of the respective state.</li>
              <li>Registration under GST, if the business turnover exceeds Rs.20 lakhs.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Proprietorship;