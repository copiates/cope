import React from 'react'
import './article.css'
import whatsappImage from '../../assets/whatsapp.png'

const Article = ({ className }) => {
  return (
    <div className="article-section">
      <div className="article-content">
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src={whatsappImage} alt="WhatsApp" />
        </a>
      </div>
    </div>
  )
}

export default Article
