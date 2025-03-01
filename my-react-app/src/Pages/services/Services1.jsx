import React from 'react';
import { Link } from 'react-router-dom';
import './services1&2.css'
import Footer from '../../containers/footer/Footer';

const Services1 = () => {
  return (
    <div>
      <div className="services-container">
        <div className="service-card">
          <h3>Registration Services</h3>
          <div className="service-content">
            <p>We provide comprehensive registration services for:</p>
            <ul>
              <li>
                ESI - Employee State Insurance
                <Link to="/documents/esi" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                PF - Provident Fund
                <Link to="/documents/pf" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                PTR - Professional Tax Registration
                <Link to="/documents/ptr" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                Labour Registration
                <Link to="/documents/labour" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                Shops and Establishments Registration
                <Link to="/documents/shops" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                GST - Goods and Services Tax Registration
                <Link to="/documents/gst" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                Proprietorship Firm Registration
                <Link to="/documents/proprietorship" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                Partnership Firm Registration
                <Link to="/documents/partnership" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                LLP - Limited Liability Partnership Registration
                <Link to="/documents/llp" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                One Person Company Registration
                <Link to="/documents/opc" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                Private Limited Company Registration
                <Link to="/documents/private-limited" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                IE Code - Import Export Code Registration
                <Link to="/documents/ie-code" className="docs-btn">
                  Documents Required
                </Link>
              </li>
              <li>
                LAE - Legal Entity Identifier (LEI) Registration
                <Link to="/documents/lei" className="docs-btn">
                  Documents Required
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services1
