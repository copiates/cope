import React from 'react'
import './brand.css'

const Brand = ({ data }) => {
  // Optimize rendering by pre-rendering the first paragraph (LCP element)
  const firstParagraph = data.description[0];
  const otherParagraphs = data.description.slice(1);
  
  return (
    <div className="brand-wrapper">
      <div className="brand-new">
        <h2>{data.title}</h2>
        {/* Render the LCP element with priority */}
        <p className="lcp-priority">{firstParagraph}</p>
        {/* Render other paragraphs normally */}
        {otherParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default Brand
