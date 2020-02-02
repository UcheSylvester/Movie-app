import React from "react";

import "./search-input.styles.scss";

const SearchInput = ({ placeholder, handleInputChange }) => (
  <input
    type="search"
    className="search-input"
    placeholder={placeholder}
    onChange={handleInputChange}
  />
);

export default SearchInput;
