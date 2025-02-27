import React, { useState } from 'react';
import './PerformanceDetails.css';

function PerformanceDetails() {
  const [performanceTitle, setPerformanceTitle] = useState('');
  const [performanceSubtitle, setPerformanceSubtitle] = useState('');
  const [eventStatus, setEventStatus] = useState('');
  const [genre, setGenre] = useState('');
  const [onsale, setOnsale] = useState(false);
  const [onsaleDate, setOnsaleDate] = useState('');
  const [presale, setPresale] = useState(false);
  const [presaleDate, setPresaleDate] = useState('');

  const genres = ['Rock', 'Pop', 'Hip Hop', 'Classical', 'Jazz', 'Electronic', 'Country', 'Other'];
  const eventStatuses = ['Onsale', 'Cancelled', 'Postponed', 'Preview'];

  const handleSave = () => {
    // Save logic here
    alert(
      `Performance Title: ${performanceTitle}, Subtitle: ${performanceSubtitle}, Event Status: ${eventStatus}, Genre: ${genre}, ` +
      `Onsale: ${onsale}, Onsale Date: ${onsaleDate}, Presale: ${presale}, Presale Date: ${presaleDate}`
    );
  };

  return (
    <div className="performance-details">
      <h3>Performance Details</h3>

      <div className="form-group">
        <label htmlFor="performanceTitle">Performance Title:</label>
        <input
          type="text"
          id="performanceTitle"
          className="form-control"
          value={performanceTitle}
          onChange={(e) => setPerformanceTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="performanceSubtitle">Performance Subtitle:</label>
        <input
          type="text"
          id="performanceSubtitle"
          className="form-control"
          value={performanceSubtitle}
          onChange={(e) => setPerformanceSubtitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="eventStatus">Event Status:</label>
        <select
          id="eventStatus"
          className="form-control"
          value={eventStatus}
          onChange={(e) => setEventStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          {eventStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          className="form-control"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Select Genre</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            className="form-check-input"
            checked={onsale}
            onChange={(e) => setOnsale(e.target.checked)}
          />
          GP Onsale
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="onsaleDate">GP Onsale Date:</label>
        <input
          type="datetime-local"
          id="onsaleDate"
          className="form-control"
          value={onsaleDate}
          onChange={(e) => setOnsaleDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            className="form-check-input"
            checked={presale}
            onChange={(e) => setPresale(e.target.checked)}
          />
          Presale
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="presaleDate">Presale Date:</label>
        <input
          type="datetime-local"
          id="presaleDate"
          className="form-control"
          value={presaleDate}
          onChange={(e) => setPresaleDate(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default PerformanceDetails;
