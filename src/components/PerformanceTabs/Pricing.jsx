import React, { useState } from 'react';
import './Pricing.css';

function Pricing() {
  const [pricingRows, setPricingRows] = useState([{ description: '', price: '', insideCharge: '', zone: '' }]);
  const zones = ['Zone A', 'Zone B', 'Zone C', 'Zone D'];

  const handleAddPricingRow = () => {
    setPricingRows([...pricingRows, { description: '', price: '', insideCharge: '', zone: '' }]);
  };

  const handlePricingChange = (index, field, value) => {
    const updatedPricingRows = [...pricingRows];
    updatedPricingRows[index][field] = value;
    setPricingRows(updatedPricingRows);
  };

  const handleRemovePricingRow = (index) => {
    const updatedPricingRows = [...pricingRows];
    updatedPricingRows.splice(index, 1);
    setPricingRows(updatedPricingRows);
  };

  const handleSave = () => {
    // Save logic here
    alert(JSON.stringify(pricingRows));
  };

  return (
    <div className="pricing">
      <h3>Pricing</h3>

      {pricingRows.map((row, index) => (
        <div key={index} className="pricing-row">
          <div className="form-group">
            <label htmlFor={`description-${index}`}>Description:</label>
            <input
              type="text"
              id={`description-${index}`}
              className="form-control"
              value={row.description}
              onChange={(e) => handlePricingChange(index, 'description', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor={`price-${index}`}>Price:</label>
            <input
              type="number"
              id={`price-${index}`}
              className="form-control"
              value={row.price}
              onChange={(e) => handlePricingChange(index, 'price', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor={`insideCharge-${index}`}>Inside Charge:</label>
            <input
              type="number"
              id={`insideCharge-${index}`}
              className="form-control"
              value={row.insideCharge}
              onChange={(e) => handlePricingChange(index, 'insideCharge', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor={`zone-${index}`}>Zone:</label>
            <select
              id={`zone-${index}`}
              className="form-control"
              value={row.zone}
              onChange={(e) => handlePricingChange(index, 'zone', e.target.value)}
            >
              <option value="">Select Zone</option>
              {zones.map((z) => (
                <option key={z} value={z}>
                  {z}
                </option>
              ))}
            </select>
          </div>

          <button type="button" className="btn btn-danger" onClick={() => handleRemovePricingRow(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" className="btn btn-secondary" onClick={handleAddPricingRow}>
        Add Pricing Row
      </button>

      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default Pricing;
