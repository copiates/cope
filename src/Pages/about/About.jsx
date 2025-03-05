import React from 'react';
import Footer from '../../containers/footer/Footer';
import './about.css';

const fallbackData = [
  {
    name: "CA. VENUGOPAL SWAMI. B FCA",
    description: "A Commerce Graduate from Sri Venkateswara University Thirupati, and a Fellow Member of the Institute of Chartered Accountants of India. Qualified in the Month of May 1999, During his article ship training he has conducted various Statutory Audits, Internal Audits and Concurrent Audits of Public sector, Government Companies & Nationalized Banks. Currently, he is undergoing a post-qualification course on \"Information Systems Audit\" conducted by the ICAI. He specializes in Management Consultancy, Project Finance / Reporting, Audits of Large Corporate entities Banks and Financial Institutions."
  },
  {
    name: "CA. VENKATARAMANA. S FCA",
    description: "A Commerce Graduate from Sri Venkateswara University Thirupati, and a Fellow Member of the Institute of Chartered Accountants of India. Qualified in the Month of January 2003, Has Professional Experience of 22 Years & has served reputed companies. During his article ship training he has conducted various Statutory Audits, Internal Audits and Concurrent Audits of Public sector, Government Companies & Nationalized Banks. He specializes in Management Consultancy, Project Finance, Audits of Large Corporate entities Banks and Financial Institutions."
  },
  {
    name: "CA. AMARANATH. A FCA, ISA, FAFD",
    description: "A Commerce Graduate from Sri Venkateswara University Thirupati, and a Fellow Member of the Institute of Chartered Accountants of India. Qualified in the Month of May 2003, he underwent his article ship training under M/s. Murali Jawahar & Co. Chartered Accountants, Chennai. Has Professional Experience of 22 Years & has served reputed companies like Standard Chartered Bank, American Express Bank. During his article ship training he has conducted various Statutory Audits, Internal Audits and Concurrent Audits of Public sector, Government Companies & Nationalized Banks. Currently, he is undergoing a post-qualification course on \"Information Systems Audit\" conducted by the ICAI. He specializes in Management Consultancy, Project Finance / Reporting (including facilitation of loans from Financial Institutions and Major MNC Banks), Audits State Bank of Travancore branches and of Large Corporate entities Banks and Financial Institutions."
  },
  {
    name: "CA. D MANOJ",
    description: "A Commerce Graduate from IGNOU, Qualified ICWAI in 2018 and a Fellow Member of the Institute of Chartered Accountants of India. Qualified in 2018, he underwent his article ship training under M/s. B V Swami & Co. Chartered Accountants, Bangalore. Has Professional Experience of 7 Years & has served reputed Audit Firm N J Sures & Associates. During his article ship training he has conducted various Statutory Audits, Internal Audits and Concurrent Audits of Public sector, Government Companies & Nationalized Banks. Currently, he is undergoing a post-qualification course on \"Information Systems Audit\" conducted by the ICAI. He specializes in Management Consultancy, Project Finance / Reporting (including facilitation of loans from Financial Institutions and Major MNC Banks), Audits of Large Corporate entities."
  },
  {
    name: "CA. GIREESWARA RAO. P FCA",
    description: "A Commerce Graduate from Sri Venkateswara University Thirupati, 8th rank holder and a Fellow Member of the Institute of Chartered Accountants of India, qualified in November, 2005. Has Professional Experience of 20 Years & has served reputed companies. During his article ship training and practice he has conducted various Statutory Audits, Internal Audits and Concurrent Audits of Public sector, Government Companies & Nationalized Banks."
  },
  {
    name: "CA. CHANDRASEKHAR. V FCA",
    description: "A Commerce Graduate from Osmania University, Hyderabad and an Associate Member of the Institute of Chartered Accountants of India, Qualified CA in May, 2009. He has article ship and Professional Experience of 16 Years & has done various Statutory Audits, Internal Audits and Tax Audit of Manufacturing Companies, Service oriented organisation, Revenue and Concurrent Audits of Nationalized Banks. He specializes in Project reports preparation, Internal Audit, Tax Audit, and Bank audits."
  }
];

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-content">
          <h2>Our Team</h2>
          {fallbackData.map((member, index) => (
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