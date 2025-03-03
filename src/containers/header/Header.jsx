import React from 'react'
import './header.css'

const Header = ({ data }) => {
  return (
    <div className="header">
      <div className="practice-name">
        {data.companyName}
      </div>
      <div className="practice-address">
        {data.address}
      </div>
    </div>
  )
}

export default Header
