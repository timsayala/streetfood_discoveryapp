import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
import './Search.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: 	14.599512,
  lng: 120.984222
};

const Search = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [autocomplete, setAutocomplete] = useState(null);
  const autocompleteRef = useRef(null);

  const handleLocationSelect = () => {
    if (autocomplete !== null) {
      setSelectedLocation(autocomplete.getPlace().formatted_address);
      autocompleteRef.current.value = '';
    }
  };

  const handleSearch = () => {
    console.log('Search clicked with location:', selectedLocation);
    // You can add code to fetch data based on the selected location and update the UI
  };

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  return (
    <div className="search-container">
      <LoadScript googleMapsApiKey="AIzaSyDTp2f9HVNelrFnwoVGqvW6ePPzxlT_iQo" libraries={['places']}>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={13} center={defaultCenter} />
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={handleLocationSelect}
        >
          <input
            type="text"
            placeholder="Enter a location"
            className="form-control"
            ref={autocompleteRef}
          />
        </Autocomplete>
      </LoadScript>
      <button
        type="button"
        id="search-btn"
        className="btn btn-primary"
        onClick={handleSearch}
        disabled={!selectedLocation}
      >
        Search
      </button>
    </div>
  );
};

export default Search;