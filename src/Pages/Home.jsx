import React, { useEffect } from 'react'
import { Header } from '../containers'
import { Brand, Article } from '../components'
import './Home.css'

const fallbackData = {
  header: {
    companyName: "B.V. Swami & Co, Chartered Accountants",
    address: "No 3440, G-1, SR Harmony, 4th Cross, 10th Main Rd, Indiranagar, Bengaluru-560038"
  },
  brand: {
    title: "WELCOME TO OUR WEBSITE",
    description: [
      "B.V. SWAMI & CO. was established in the year 2000. It is a leading chartered accountancy firm rendering comprehensive professional services which include audit, management consultancy, tax consultancy, accounting services, manpower management, secretarial services etc.",
      "We are a professionally managed firm. The team consists of distinguished chartered accountants, corporate financial advisors and tax consultants. The firm represents a combination of specialized skills, which are geared to offers sound financial advice and personalized proactive services.",
      "Those associated with the firm have regular interaction with industry and other professionals which enables the firm to keep pace with contemporary developments and to meet the needs of its clients."
    ]
  }
};

const Home = () => {
  // Use useEffect to mark the LCP element for priority rendering
  useEffect(() => {
    // Add priority hints for the LCP element
    const addPriorityHints = () => {
      const lcpElement = document.querySelector('.brand-new p');
      if (lcpElement) {
        // Mark this element as high priority for the browser
        if ('loading' in HTMLImageElement.prototype) {
          lcpElement.setAttribute('fetchpriority', 'high');
        }
        // Add a class for styling priority
        lcpElement.classList.add('lcp-element');
      }
    };
    
    // Execute immediately and also after a small delay to ensure DOM is ready
    addPriorityHints();
    setTimeout(addPriorityHints, 0);
  }, []);

  return (
    <div className="home-container">
      <Header data={fallbackData.header} />
      <div className="brand-section">
        <Brand data={fallbackData.brand} />
      </div>
    </div>
  )
}

export default Home
