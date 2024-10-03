import React, { useState } from 'react';
import './AddCalendarForm.css';

function AddCalendarForm({ onClose }) {
  const [formData, setFormData] = useState({
    url: '',
    platform: '',
    startDate: '',
    endDate: '',
    keywords: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Calendar</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Website URL:</label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Enter website URL"
              required
            />
          </div>
          <div className="form-group">
            <label>Social Media Platform:</label>
            <select
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              required
            >
              <option value="">Select platform</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
            </select>
          </div>
          <div className="form-group">
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Comma-separated Keywords/Topics:</label>
            <input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              placeholder="Enter keywords or topics"
              required
            />
          </div>

          <div className="form-buttons">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="generate-btn">
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCalendarForm;
