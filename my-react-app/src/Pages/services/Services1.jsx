import React from 'react';
import './services.css'
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
                <a href="https://www.esic.gov.in/registration" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                PF - Provident Fund
                <a href="https://www.epfindia.gov.in/site_en/index.php" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                PTR - Professional Tax Registration
                <a href="https://www.karnataka.gov.in/professionalTax" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                Labour Registration
                <a href="https://labour.gov.in/registration" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                Shops and Establishments Registration
                <a href="https://qlabour.gov.in/NewClsService/Registration_of_Shops.html" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                GST - Goods and Services Tax Registration
                <a href="https://www.gst.gov.in/help/registration" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                Proprietorship Firm Registration
                <a href="https://udyamregistration.gov.in" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                Partnership Firm Registration
                <a href="https://www.mca.gov.in/MinistryV2/llpfirm.html" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                LLP - Limited Liability Partnership Registration
                <a href="https://www.mca.gov.in/MinistryV2/llphome.html" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                One Person Company Registration
                <a href="https://www.mca.gov.in/MinistryV2/incorporation_company.html" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                Private Limited Company Registration
                <a href="https://www.mca.gov.in/MinistryV2/incorporation_company.html" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                IE Code - Import Export Code Registration
                <a href="https://dgft.gov.in/iec" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
              </li>
              <li>
                LAE - Legal Entity Identifier (LEI) Registration
                <a href="https://lei.legal" target="_blank" rel="noopener noreferrer" className="docs-btn">
                  Documents Required
                </a>
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
