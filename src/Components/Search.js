import React from 'react';

const Search = () => {
    return ( 
        <div class="search-container">
  <input type="text" id="search-input" placeholder="Enter a location" />
  <div class="dropdown">
    <button class="dropdown-toggle" type="button" id="dropdown-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select a location</button>
    <div className="dropdown-menu" aria-labelledby="dropdown-btn">
      <a className="dropdown-item" href="#" data-value="New York">New York</a>
      <a className="dropdown-item" href="#" data-value="Los Angeles">Los Angeles</a>
      <a className="dropdown-item" href="#" data-value="Chicago">Chicago</a>
      <a className="dropdown-item" href="#" data-value="Houston">Houston</a>
      <a className="dropdown-item" href="#" data-value="Miami">Miami</a>
    </div>
  </div>
  <button type="button" id="search-btn">Search</button>
</div>
     );
}
 
export default Search;