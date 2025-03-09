import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contact"> 
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p>Phone: +91 9845643599</p>
            <p>Email: bvswamicompany@gmail.com</p>
            <p>Timings: Monday - Saturday , 10AM - 6PM</p>
          </div>
      </div>
      <div className="footer-copyright">
        <p>© 2025 B.V. Swami & Co, Chartered Accountants</p>
      </div>
    </div>
  )
}

export default Footer
