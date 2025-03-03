import React from 'react'
import './brand.css'

const Brand = ({ data }) => {
  return (
    <div className="brand-wrapper">
      <div className="brand-new">
        <h2>{data.title}</h2>
        {data.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default Brand
