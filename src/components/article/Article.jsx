import React from 'react'
import './article.css'
import whatsappImage from '../../assets/whatsapp2.jpg'

const Article = () => {
  return (
    <div className="article-container">
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <img src={whatsappImage} alt="WhatsApp" />
      </a>
    </div>
  )
}

export default Article
