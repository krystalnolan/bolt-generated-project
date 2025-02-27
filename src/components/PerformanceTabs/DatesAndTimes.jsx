import React, { useState } from 'react';
import './DatesAndTimes.css';

function DatesAndTimes() {
  const [dateTimes, setDateTimes] = useState([{ date: '', time: '', onsale: false }]);

  const handleAddDateTime = () => {
    setDateTimes([...dateTimes, { date: '', time: '', onsale: false }]);
  };

  const handleDateTimeChange = (index, field, value) => {
    const updatedDateTimes = [...dateTimes];
    updatedDateTimes[index][field] = value;
    setDateTimes(updatedDateTimes);
  };

  const handleRemoveDateTime = (index) => {
    const updatedDateTimes = [...dateTimes];
    updatedDateTimes.splice(index, 1);
    setDateTimes(updatedDateTimes);
  };

  const handleSave = () => {
    // Save logic here
    alert(JSON.stringify(dateTimes));
  };

  return (
    <div className="dates-and-times">
      <h3>Dates and Times</h3>

      {dateTimes.map((dateTime, index) => (
        <div key={index} className="date-time-row">
          <div className="form-group">
            <label htmlFor={`date-${index}`}>Date:</label>
            <input
              type="date"
              id={`date-${index}`}
              className="form-control"
              value={dateTime.date}
              onChange={(e) => handleDateTimeChange(index, 'date', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor={`time-${index}`}>Time:</label>
            <input
              type="time"
              id={`time-${index}`}
              className="form-control"
              value={dateTime.time}
              onChange={(e) => handleDateTimeChange(index, 'time', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                className="form-check-input"
                checked={dateTime.onsale}
                onChange={(e) => handleDateTimeChange(index, 'onsale', e.target.checked)}
              />
              Onsale
            </label>
          </div>

          <button type="button" className="btn btn-danger" onClick={() => handleRemoveDateTime(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" className="btn btn-secondary" onClick={handleAddDateTime}>
        Add Date and Time
      </button>

      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default DatesAndTimes;
