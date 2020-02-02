import React from "react";

import "./search-input.styles.scss";

const SearchInput = ({ handleInputChange }) => (
  <form>
    <input
      type="search"
      placeholder="search movies"
      onChange={handleInputChange}
    />{" "}
  </form>
);

export default SearchInput;
