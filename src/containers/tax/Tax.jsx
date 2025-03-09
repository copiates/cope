import React, { useState } from 'react';
import './tax.css';

const Tax = () => {
  const [age, setAge] = useState('below60');
  const [basicSalary, setBasicSalary] = useState(0);
  const [hra, setHra] = useState(0);
  const [specialAllowance, setSpecialAllowance] = useState(0);
  const [lta, setLta] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);
  const [section80C, setSection80C] = useState(0);
  const [section80D, setSection80D] = useState(0);
  const [section80TTA, setSection80TTA] = useState(0);
  const [otherDeductions, setOtherDeductions] = useState(0);
  const [taxableIncomeOld, setTaxableIncomeOld] = useState(0);
  const [taxableIncomeNew, setTaxableIncomeNew] = useState(0);
  const [taxOld, setTaxOld] = useState(0);
  const [taxNew, setTaxNew] = useState(0);

  const calculateTax = () => {
    // Convert monthly values to annual
    const annualBasicSalary = basicSalary * 12;
    const annualHRA = hra * 12;
    const annualSpecialAllowance = specialAllowance * 12;
    const annualRentPaid = rentPaid * 12;
    const annualLTA = Number(lta) || 0;
    const annualOtherIncome = Number(otherIncome) || 0;

    // HRA Exemption Calculation
    const hraExemption = Math.max(
      0,
      Math.min(
        annualHRA,
        annualRentPaid - 0.1 * annualBasicSalary,
        0.5 * annualBasicSalary
      )
    );

    // Old Regime: Calculate total income with deductions
    const standardDeductionOld = 50000;
    const totalDeductions = Math.min(150000, Number(section80C)) + 
                          Math.min(25000, Number(section80D)) + 
                          Math.min(10000, Number(section80TTA)) +
                          Number(otherDeductions);

    const totalIncomeOld =
      annualBasicSalary +
      annualHRA -
      hraExemption +
      annualSpecialAllowance +
      annualLTA +
      annualOtherIncome -
      standardDeductionOld -
      totalDeductions;

    // New Regime: Calculate total income (no deductions except standard deduction)
    const standardDeductionNew = 75000;
    const totalIncomeNew =
      annualBasicSalary +
      annualHRA +
      annualSpecialAllowance +
      annualLTA +
      annualOtherIncome -
      standardDeductionNew;

    // Tax calculation based on age and regime
    const calculateTaxAmount = (income, regime) => {
      let tax = 0;
      let taxableIncome = income;

      if (regime === 'old') {
        const exemptionLimit = 
          age === 'below60' ? 250000 :
          age === '60to80' ? 300000 : 500000;
        
        taxableIncome = Math.max(0, income - exemptionLimit);

        if (taxableIncome <= 250000) {
          tax = 0;
        } else if (taxableIncome <= 500000) {
          tax = (taxableIncome - 250000) * 0.05;
        } else if (taxableIncome <= 1000000) {
          tax = 12500 + (taxableIncome - 500000) * 0.2;
        } else {
          tax = 112500 + (taxableIncome - 1000000) * 0.3;
        }
      } else {
        // New regime slabs
        taxableIncome = Math.max(0, income - 300000);
        
        if (taxableIncome <= 300000) {
          tax = 0;
        } else if (taxableIncome <= 600000) {
          tax = (taxableIncome - 300000) * 0.05;
        } else if (taxableIncome <= 900000) {
          tax = 15000 + (taxableIncome - 600000) * 0.1;
        } else if (taxableIncome <= 1200000) {
          tax = 45000 + (taxableIncome - 900000) * 0.15;
        } else if (taxableIncome <= 1500000) {
          tax = 90000 + (taxableIncome - 1200000) * 0.2;
        } else {
          tax = 150000 + (taxableIncome - 1500000) * 0.3;
        }
      }

      // Calculate surcharge for high income
      let surcharge = 0;
      if (income > 50000000) {
        surcharge = regime === 'new' ? tax * 0.25 : tax * 0.37;
      } else if (income > 20000000) {
        surcharge = tax * 0.25;
      } else if (income > 10000000) {
        surcharge = tax * 0.15;
      } else if (income > 5000000) {
        surcharge = tax * 0.10;
      }

      tax += surcharge;
      return Math.round(tax * 1.04); // Adding 4% health and education cess
    };

    const oldTax = calculateTaxAmount(totalIncomeOld, 'old');
    const newTax = calculateTaxAmount(totalIncomeNew, 'new');

    setTaxableIncomeOld(Math.round(totalIncomeOld));
    setTaxableIncomeNew(Math.round(totalIncomeNew));
    setTaxOld(oldTax);
    setTaxNew(newTax);
  };

  return (
    <div>
      <div className="tax-calculator">
        <h2>Income Tax Calculator FY 2024-25 (AY 2025-26)</h2>
        
        <div className="input-group">
          <label>Age Group:</label>
          <select value={age} onChange={(e) => setAge(e.target.value)}>
            <option value="below60">Below 60 years</option>
            <option value="60to80">60 to 80 years</option>
            <option value="above80">Above 80 years</option>
          </select>
        </div>

        <h3>Income Details</h3>
        <div className="input-group">
          <label>Basic Salary (Monthly):</label>
          <input
            type="number"
            value={basicSalary}
            onChange={(e) => setBasicSalary(Number(e.target.value) || 0)}
            placeholder="Enter monthly amount"
          />
        </div>
        <div className="input-group">
          <label>HRA Received (Monthly):</label>
          <input
            type="number"
            value={hra}
            onChange={(e) => setHra(Number(e.target.value) || 0)}
            placeholder="Enter monthly amount"
          />
        </div>
        <div className="input-group">
          <label>Special Allowance (Monthly):</label>
          <input
            type="number"
            value={specialAllowance}
            onChange={(e) => setSpecialAllowance(Number(e.target.value) || 0)}
            placeholder="Enter monthly amount"
          />
        </div>
        <div className="input-group">
          <label>LTA (Annually):</label>
          <input
            type="number"
            value={lta}
            onChange={(e) => setLta(Number(e.target.value) || 0)}
            placeholder="Enter annual amount"
          />
        </div>
        <div className="input-group">
          <label>Rent Paid (Monthly):</label>
          <input
            type="number"
            value={rentPaid}
            onChange={(e) => setRentPaid(Number(e.target.value) || 0)}
            placeholder="Enter monthly amount"
          />
        </div>
        <div className="input-group">
          <label>Other Income (Annually):</label>
          <input
            type="number"
            value={otherIncome}
            onChange={(e) => setOtherIncome(Number(e.target.value) || 0)}
            placeholder="Enter annual amount"
          />
        </div>

        <h3>Deductions (Old Regime)</h3>
        <div className="input-group">
          <label>Section 80C (Max 1.5L):</label>
          <input
            type="number"
            value={section80C}
            onChange={(e) => setSection80C(Number(e.target.value) || 0)}
            placeholder="PPF, ELSS, LIC, etc."
          />
        </div>
        <div className="input-group">
          <label>Section 80D (Max 25K):</label>
          <input
            type="number"
            value={section80D}
            onChange={(e) => setSection80D(Number(e.target.value) || 0)}
            placeholder="Medical Insurance"
          />
        </div>
        <div className="input-group">
          <label>Section 80TTA (Max 10K):</label>
          <input
            type="number"
            value={section80TTA}
            onChange={(e) => setSection80TTA(Number(e.target.value) || 0)}
            placeholder="Savings Account Interest"
          />
        </div>
        <div className="input-group">
          <label>Other Deductions:</label>
          <input
            type="number"
            value={otherDeductions}
            onChange={(e) => setOtherDeductions(Number(e.target.value) || 0)}
            placeholder="Others"
          />
        </div>

        <button className="calculate-btn" onClick={calculateTax}>
          Calculate Tax
        </button>

        <div className="result">
          <h3>Tax Calculation Results</h3>
          <div className="regime-comparison">
            <div className="old-regime">
              <h4>Old Regime</h4>
              <p>Taxable Income: ₹{taxableIncomeOld.toLocaleString()}</p>
              <p>Tax Payable: ₹{taxOld.toLocaleString()}</p>
            </div>
            <div className="new-regime">
              <h4>New Regime</h4>
              <p>Taxable Income: ₹{taxableIncomeNew.toLocaleString()}</p>
              <p>Tax Payable: ₹{taxNew.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;
