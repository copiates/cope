import React, { useState, useEffect } from 'react';
import './services.css'
import Footer from '../../containers/footer/Footer';

const fallbackData = {
  title: "Partnership Deed Services",
  features: [
    "Partnership Deed Drafting",
    "Partnership Firm Registration",
    "Partnership Deed Modification",
    "GST Registration for Partnership",
    "Legal Compliance Support",
    "Business Structure Consultation",
    "Partner Rights and Responsibilities"
  ]
};

const Services2 = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetch('/api/services/partnership')
      .then(response => response.json())
      .then(data => setServiceData(data))
      .catch(error => {
        console.error('Error fetching partnership service data:', error);
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
            <p>Comprehensive partnership deed drafting including:</p>
            <ul>
              {serviceData.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="service-button">Learn More</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services2

