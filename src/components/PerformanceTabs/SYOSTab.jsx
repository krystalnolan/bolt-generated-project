import React, { useState } from 'react';
import './SYOSTab.css';

function SYOSTab() {
  const [rows, setRows] = useState(3);
  const [seatsPerRow, setSeatsPerRow] = useState(10);
  const [rowNames, setRowNames] = useState(Array(rows).fill(''));
  const [rowDescriptions, setRowDescriptions] = useState(Array(rows).fill(''));
  const [seatingArea, setSeatingArea] = useState([]);
  const [seatZones, setSeatZones] = useState({}); // {rowIndex-seatIndex: zone}
  const zones = ['A', 'B', 'C', 'D']; // Available zones
  const [selectedZone, setSelectedZone] = useState(zones[0]); // Default selected zone

  const handleGenerateSeating = () => {
    const newSeatingArea = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < seatsPerRow; j++) {
        row.push({ row: i + 1, seat: j + 1, status: 'available' });
      }
      newSeatingArea.push(row);
    }
    setSeatingArea(newSeatingArea);
    setRowNames(Array(rows).fill(''));
    setRowDescriptions(Array(rows).fill(''));
    setSeatZones({}); // Clear existing zones
  };

  const handleSeatClick = (row, seat) => {
    const seatKey = `${row}-${seat}`;
    setSeatZones(prevZones => ({
      ...prevZones,
      [seatKey]: selectedZone,
    }));
  };

  const handleRowNameChange = (index, value) => {
    const updatedRowNames = [...rowNames];
    updatedRowNames[index] = value;
    setRowNames(updatedRowNames);
  };

  const handleRowDescriptionChange = (index, value) => {
    const updatedRowDescriptions = [...rowDescriptions];
    updatedRowDescriptions[index] = value;
    setRowDescriptions(updatedRowDescriptions);
  };

  return (
    <div className="syos-tab">
      <h3>Select Your Own Seat</h3>

      <div className="controls">
        <div className="form-group">
          <label htmlFor="rows">Rows:</label>
          <input
            type="number"
            id="rows"
            className="form-control"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="seatsPerRow">Seats per Row:</label>
          <input
            type="number"
            id="seatsPerRow"
            className="form-control"
            value={seatsPerRow}
            onChange={(e) => setSeatsPerRow(parseInt(e.target.value))}
          />
        </div>

        <button className="btn btn-primary" onClick={handleGenerateSeating}>
          Generate Seating
        </button>
      </div>

      {seatingArea.length > 0 && (
        <div className="row-settings">
          <h4>Row Settings:</h4>
          {rowNames.map((name, index) => (
            <div key={index} className="row-setting">
              <div className="form-group">
                <label htmlFor={`rowName-${index}`}>Row {index + 1} Name:</label>
                <input
                  type="text"
                  id={`rowName-${index}`}
                  className="form-control"
                  value={name}
                  onChange={(e) => handleRowNameChange(index, e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`rowDescription-${index}`}>Row {index + 1} Description:</label>
                <input
                  type="text"
                  id={`rowDescription-${index}`}
                  className="form-control"
                  value={rowDescriptions[index]}
                  onChange={(e) => handleRowDescriptionChange(index, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {seatingArea.length > 0 && (
        <div className="zone-selector">
          <h4>Select Zone:</h4>
          {zones.map(zone => (
            <button
              key={zone}
              className={`btn btn-zone ${selectedZone === zone ? 'active' : ''}`}
              onClick={() => setSelectedZone(zone)}
            >
              Zone {zone}
            </button>
          ))}
        </div>
      )}

      <div className="seating-area">
        {seatingArea.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            <span className="row-label">{rowNames[rowIndex] || `Row ${rowIndex + 1}`}</span>
            {row.map((seat, seatIndex) => (
              <div
                key={`${rowIndex}-${seatIndex}`}
                className={`seat ${seat.status}`}
                onClick={() => handleSeatClick(rowIndex, seatIndex)}
              >
                {seat.seat}
                {seatZones[`${rowIndex}-${seatIndex}`] && (
                  <span className="zone-label">{seatZones[`${rowIndex}-${seatIndex}`]}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SYOSTab;
