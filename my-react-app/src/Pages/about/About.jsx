import React, { useState, useEffect } from 'react';
import Footer from '../../containers/footer/Footer';
import './about.css';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('/api/about')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error fetching about data:', error));
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <div>
      <div className="about-container">
        <div className="about-content">
          <h2>Our Team</h2>
          
          <div className="about-section">
            <h3>CA. VENUGOPAL SWAMI. B FCA</h3>
            <p>A Commerce Graduate from Sri Venkateswara University, Thirupati and a Fellow Member of the Institute of Chartered Accountants of India, qualified in May, 1999. He has conducted various Statutory Audits, Internal Audits and Concurrent Audits of Public sector, Government Companies & Nationalized Banks. He specializes in Management Consultancy, Project Finance / Reporting, Audits of Large Corporate entities Banks and Financial Institutions.</p>
          </div>

          <div className="about-section">
            <h3>CA. VENKATARAMANA. S FCA</h3>
            <p>A Commerce Graduate from Sri Venkateswara University, Thirupati and a Fellow Member of the Institute of Chartered Accountants of India. Qualified in November, 2002, has Industry Experience of Eleven Years & has served reputed companies. He has conducted various Statutory Audits and Internal Audits. He specializes in Management Consultancy, Stock audits, Audits of Large Corporate entities Banks and Financial Institutions.</p>
          </div>

          <div className="about-section">
            <h3>CA. AMARANATH. A FCA</h3>
            <p>A Commerce Graduate from Sri Venkateswara University Thirupati, and a Fellow Member of the Institute of Chartered Accountants of India. Qualified in May 2003, he underwent his article ship training under M/s. Murali Jawahar & Co. Chartered Accountants, Chennai. Has Industry Experience of Ten Years & has served reputed companies like Standard Chartered Bank, American Express Bank. During his article ship training he has conducted various Statutory Audits, Internal Audits and Concurrent Audits of Public sector, Government Companies & Nationalized Banks. Currently, he is undergoing a post-qualification course on "Information Systems Audit" conducted by the ICAI. He specializes in Management Consultancy, Project Finance / Reporting (including facilitation of loans from Financial Institutions and Major MNC Banks), Audits State Bank of Travancore branches and of Large Corporate entities Banks and Financial Institutions.</p>
          </div>

          <div className="about-section">
            <h3>CA. GIREESWARA RAO. P FCA</h3>
            <p>A Commerce Graduate from Sri Venkateswara University Thirupati, 8th rank holder and a Fellow Member of the Institute of Chartered Accountants of India, qualified in November, 2005. Has Industry Experience of Eight Years & has served reputed companies. During his article ship training and practice he has conducted various Statutory Audits, Internal Audits and Concurrent Audits of Public sector, Government Companies & Nationalized Banks.</p>
          </div>

          <div className="about-section">
            <h3>CA. CHANDRASEKHAR. V FCA</h3>
            <p>A Commerce Graduate from Osmania University, Hyderabad and an Associate Member of the Institute of Chartered Accountants of India, Qualified CA in May, 2009. He has article ship and Industry Experience of Twelve Years & has done various Statutory Audits, Internal Audits and Tax Audit of Manufacturing Companies, Service oriented organisation, Revenue and Concurrent Audits of Nationalized Banks. He specializes in Project reports preparation, Internal Audit, Tax Audit, and Bank audits.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;