import React, { useState, useEffect } from 'react';
import './services.css'
import Footer from '../../containers/footer/Footer';

const fallbackData = {
  title: "Income Tax Return Filing Services",
  features: [
    "Individuals (Salaried, Business/Profession)",
    "Hindu Undivided Family (HUF)",
    "Partnership Firms",
    "Limited Liability Partnership (LLP)",
    "Private Limited Companies",
    "Non-Profit Organizations (NPO)",
    "Charitable Trusts"
  ]
};

const Services1 = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetch('/api/services/itr')
      .then(response => response.json())
      .then(data => setServiceData(data))
      .catch(error => {
        console.error('Error fetching ITR service data:', error);
        setServiceData(fallbackData);
      });
  }, []);

  if (!serviceData) return <div>Loading...</div>;

  return (
    <div>
      <div className="services-container">
        <div className="service-card">
          <h3>{serviceData.title}</h3>
          <div className="service-content">
            <p>Professional Income Tax Return filing service for:</p>
            <ul>
              {serviceData.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="service-button">Get Started</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services1

