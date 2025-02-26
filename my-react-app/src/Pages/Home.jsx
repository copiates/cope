import React, { useState, useEffect } from 'react'
import { Header } from '../containers'
import { Brand } from '../components'
import { Footer } from '../containers'
import './Home.css'

const Home = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch('/api/home')
      .then(response => response.json())
      .then(data => setHomeData(data))
      .catch(error => console.error('Error fetching home data:', error));
  }, []);

  if (!homeData) return <div className="home-container"><div>Loading...</div></div>;

  return (
    <div className="home-container">
      <div >
        <Header data={homeData.header} />
      </div>
      <div className="brand-section">
        <Brand data={homeData.brand} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
