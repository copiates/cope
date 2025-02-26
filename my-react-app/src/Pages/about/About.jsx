import React, { useState, useEffect } from 'react';
import Footer from '../../containers/footer/Footer';
import './about.css';

const fallbackData = {
  team: [
    {
      name: "CA. VENUGOPAL SWAMI. B FCA",
      description: "A Commerce Graduate from Sri Venkateswara University, Thirupati and a Fellow Member of the Institute of Chartered Accountants of India, qualified in May, 1999. He has conducted various Statutory Audits, Internal Audits and Concurrent Audits of Public sector, Government Companies & Nationalized Banks. He specializes in Management Consultancy, Project Finance / Reporting, Audits of Large Corporate entities Banks and Financial Institutions."
    },
    {
      name: "CA. VENKATARAMANA. S FCA",
      description: "A Commerce Graduate from Sri Venkateswara University, Thirupati and a Fellow Member of the Institute of Chartered Accountants of India. Qualified in November, 2002, has Industry Experience of Eleven Years & has served reputed companies. He has conducted various Statutory Audits and Internal Audits. He specializes in Management Consultancy, Stock audits, Audits of Large Corporate entities Banks and Financial Institutions."
    }
  ]
};

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('/api/about')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => {
        console.error('Error fetching about data:', error);
        setAboutData(fallbackData);
      });
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <div>
      <div className="about-container">
        <div className="about-content">
          <h2>Our Team</h2>
          {aboutData.team.map((member, index) => (
            <div key={index} className="about-section">
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;