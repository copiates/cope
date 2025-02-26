import React, { useState } from 'react';
import './tax.css';
import Footer from '../footer/Footer';

const Tax = () => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [hra, setHra] = useState(0);
  const [specialAllowance, setSpecialAllowance] = useState(0);
  const [lta, setLta] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);
  const [taxableIncomeOld, setTaxableIncomeOld] = useState(0);
  const [taxableIncomeNew, setTaxableIncomeNew] = useState(0);
  const [taxOld, setTaxOld] = useState(0);
  const [taxNew, setTaxNew] = useState(0);

  const calculateTax = () => {
    // Calculate total income
    const grossIncome = basicSalary * 12 + hra + specialAllowance + lta + otherIncome;

    // Make API call to backend
    fetch('/api/tax/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        income: grossIncome,
        regime: 'new'
      })
    })
    .then(response => response.json())
    .then(data => {
      setTaxNew(data.taxAmount);
      setTaxableIncomeNew(data.income);
    })
    .catch(error => {
      console.error('Error calculating tax:', error);
      // Simple fallback calculation
      const basicTaxableIncome = grossIncome - 250000; // Basic exemption
      const simpleTaxRate = 0.2; // 20% flat rate for demonstration
      const calculatedTax = basicTaxableIncome > 0 ? basicTaxableIncome * simpleTaxRate : 0;
      
      if (data.regime === 'new') {
        setTaxNew(calculatedTax);
        setTaxableIncomeNew(grossIncome);
      } else {
        setTaxOld(calculatedTax * 1.1); // 10% higher for old regime
        setTaxableIncomeOld(grossIncome);
      }
    });

    // Calculate for old regime
    fetch('/api/tax/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        income: grossIncome,
        regime: 'old'
      })
    })
    .then(response => response.json())
    .then(data => {
      setTaxOld(data.taxAmount);
      setTaxableIncomeOld(data.income);
    })
    .catch(error => {
      console.error('Error calculating tax:', error);
      setTaxOld(0);
      setTaxableIncomeOld(0);
    });
  };

  return (
    <div>
    <div className="tax-calculator">
      <h2>Income Tax Calculator for FY 2025-26 (AY 2026-27)</h2>

      <div className="input-group">
        <label>Basic Salary (Monthly):</label>
        <input
          type="number"
          value={basicSalary}
          onChange={(e) => setBasicSalary(Number(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>HRA (Monthly):</label>
        <input
          type="number"
          value={hra}
          onChange={(e) => setHra(Number(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>Special Allowance (Monthly):</label>
        <input
          type="number"
          value={specialAllowance}
          onChange={(e) => setSpecialAllowance(Number(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>LTA (Annually):</label>
        <input
          type="number"
          value={lta}
          onChange={(e) => setLta(Number(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>Rent Paid (Monthly):</label>
        <input
          type="number"
          value={rentPaid}
          onChange={(e) => setRentPaid(Number(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>Other Income (Annually):</label>
        <input
          type="number"
          value={otherIncome}
          onChange={(e) => setOtherIncome(Number(e.target.value))}
        />
      </div>

      <button className="calculate-btn" onClick={calculateTax}>
        Calculate Tax
      </button>

      <div className="result">
        <h3>Taxable Income & Tax Payable</h3>
        <p><strong>Old Regime:</strong> ₹{taxableIncomeOld} | Tax Payable: ₹{taxOld}</p>
        <p><strong>New Regime:</strong> ₹{taxableIncomeNew} | Tax Payable: ₹{taxNew}</p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Tax;
