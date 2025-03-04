import React from 'react'
import './article.css'
import whatsappImage from './assets/whatsapp.jpg'

const Article = () => {
  return (
    <div>
      <h1>Article</h1>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <img src={whatsappImage} alt="WhatsApp" />
      </a>
    </div>
  )
}

export default Article
