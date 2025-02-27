import React, { useState } from 'react';
import './SalesChannels.css';

function SalesChannels() {
  const [salesChannels, setSalesChannels] = useState([{ channel: '', startDate: '', endDate: '' }]);
  const channels = ['Website', 'Box Office', 'Third Party'];

  const handleAddSalesChannel = () => {
    setSalesChannels([...salesChannels, { channel: '', startDate: '', endDate: '' }]);
  };

  const handleSalesChannelChange = (index, field, value) => {
    const updatedSalesChannels = [...salesChannels];
    updatedSalesChannels[index][field] = value;
    setSalesChannels(updatedSalesChannels);
  };

  const handleRemoveSalesChannel = (index) => {
    const updatedSalesChannels = [...salesChannels];
    updatedSalesChannels.splice(index, 1);
    setSalesChannels(updatedSalesChannels);
  };

  const handleSave = () => {
    // Save logic here
    alert(JSON.stringify(salesChannels));
  };

  return (
    <div className="sales-channels">
      <h3>Sales Channels</h3>

      {salesChannels.map((channel, index) => (
        <div key={index} className="sales-channel-row">
          <div className="form-group">
            <label htmlFor={`channel-${index}`}>Sales Channel:</label>
            <select
              id={`channel-${index}`}
              className="form-control"
              value={channel.channel}
              onChange={(e) => handleSalesChannelChange(index, 'channel', e.target.value)}
            >
              <option value="">Select Channel</option>
              {channels.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor={`startDate-${index}`}>Start Date:</label>
            <input
              type="date"
              id={`startDate-${index}`}
              className="form-control"
              value={channel.startDate}
              onChange={(e) => handleSalesChannelChange(index, 'startDate', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor={`endDate-${index}`}>End Date:</label>
            <input
              type="date"
              id={`endDate-${index}`}
              className="form-control"
              value={channel.endDate}
              onChange={(e) => handleSalesChannelChange(index, 'endDate', e.target.value)}
            />
          </div>

          <button type="button" className="btn btn-danger" onClick={() => handleRemoveSalesChannel(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" className="btn btn-secondary" onClick={handleAddSalesChannel}>
        Add Sales Channel
      </button>

      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default SalesChannels;
