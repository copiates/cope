import React, { useState, useEffect } from 'react';
import './services.css'
import Footer from '../../containers/footer/Footer';

const fallbackData = {
  title: "Accounting Services",
  features: [
    "Bookkeeping and Accounting",
    "Financial Statement Preparation",
    "Bank Reconciliation",
    "Payroll Processing",
    "GST Compliance",
    "TDS Returns",
    "Financial Analysis and Reporting"
  ]
};

const Services3 = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetch('/api/services/accounting')
      .then(response => response.json())
      .then(data => setServiceData(data))
      .catch(error => {
        console.error('Error fetching accounting service data:', error);
        setServiceData(fallbackData);
      });
  }, []);

  if (!serviceData) return <div>Loading...</div>;

  return (
    <div>
      <div className="services-container">
        <div className="brand">
          <h2>{serviceData.title}</h2>
          <ul>
            {serviceData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services3;
