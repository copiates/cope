import React from 'react';
import './services3.css';
import PageMetadata from '../../components/PageMetadata';

const Services3 = () => {
  return (
    <div>
      <PageMetadata 
        title="Financial Services | BV Swami & Co"
        description="Professional financial services including project reports for bank loans, mortgage loans, overdraft loans, cash credit loans, and other financial consultation."
        canonicalPath="/services/financial-services"
      />
      <div className="services-container">
        <div className="brand">
          <h2>Financial Services</h2>
          <ul>
            <li>Project Reports for Bank Loans</li>
            <li>Other Financial Consultation for:
              <ul>
                <li>Mortgage Loans</li>
                <li>Overdraft Loans</li>
                <li>Cash Credit Loans</li>
                <li>Bank Guarantee</li>
                <li>Letter of Credit</li>
                <li>Housing Loans</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services3;
