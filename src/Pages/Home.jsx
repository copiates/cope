import React from 'react'
import { Header } from '../containers'
import { Brand, Article } from '../components'
import { Footer } from '../containers'
import './Home.css'

const fallbackData = {
  header: {
    companyName: "B.V. Swami & Co, Chartered Accountants",
    address: "No 3440, SR Harmony, 4th Cross, 10th Main Rd, Bengaluru, Karnataka-560038"
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
  return (
    <div className="home-container">
      <Header data={fallbackData.header} />
      <div className="brand-section">
        <Brand data={fallbackData.brand} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
