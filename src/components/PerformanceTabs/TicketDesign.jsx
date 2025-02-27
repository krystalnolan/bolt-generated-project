import React, { useState } from 'react';
import './TicketDesign.css';

function TicketDesign() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [line4, setLine4] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = () => {
    // Save logic here
    alert(
      `Line 1: ${line1}, Line 2: ${line2}, Line 3: ${line3}, Line 4: ${line4}, Image: ${image ? 'Uploaded' : 'Not Uploaded'}`
    );
  };

  return (
    <div className="ticket-design">
      <h3>Ticket Design</h3>

      <div className="form-group">
        <label htmlFor="line1">Line 1:</label>
        <input
          type="text"
          id="line1"
          className="form-control"
          value={line1}
          onChange={(e) => setLine1(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="line2">Line 2:</label>
        <input
          type="text"
          id="line2"
          className="form-control"
          value={line2}
          onChange={(e) => setLine2(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="line3">Line 3:</label>
        <input
          type="text"
          id="line3"
          className="form-control"
          value={line3}
          onChange={(e) => setLine3(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="line4">Line 4:</label>
        <input
          type="text"
          id="line4"
          className="form-control"
          value={line4}
          onChange={(e) => setLine4(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          className="form-control-file"
          onChange={handleImageChange}
        />
        {image && (
          <img src={image} alt="Uploaded" style={{ maxWidth: '200px', marginTop: '10px' }} />
        )}
      </div>

      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default TicketDesign;
