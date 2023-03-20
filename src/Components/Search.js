import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import './Search.css';

const Search = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationSelect = (e) => {
    setSelectedLocation(e.target.dataset.value);
  };

  const handleSearch = () => {
    console.log('Search clicked with location:', selectedLocation);
    // You can add code to fetch data based on the selected location and update the UI
  };

  return (
    <div className="search-container">
      <input type="text" id="search-input" placeholder="Enter a location" />
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdown-btn"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {selectedLocation ? selectedLocation : 'Select a location'}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdown-btn">
          <a
            className="dropdown-item"
            href="#"
            data-value="New York"
            onClick={handleLocationSelect}
          >
            New York
          </a>
          <a
            className="dropdown-item"
            href="#"
            data-value="Los Angeles"
            onClick={handleLocationSelect}
          >
            Los Angeles
          </a>
          <a
            className="dropdown-item"
            href="#"
            data-value="Chicago"
            onClick={handleLocationSelect}
          >
            Chicago
          </a>
          <a
            className="dropdown-item"
            href="#"
            data-value="Houston"
            onClick={handleLocationSelect}
          >
            Houston
          </a>
          <a
            className="dropdown-item"
            href="#"
            data-value="Miami"
            onClick={handleLocationSelect}
          >
            Miami
          </a>
        </div>
      </div>
      <button type="button" id="search-btn" className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
