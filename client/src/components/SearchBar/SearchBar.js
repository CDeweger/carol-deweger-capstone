import React from "react";

const SearchBar = ({ placeholder, handleSearch }) => {
  return (
    <div>
      <form className="form">
        <span className="form__icon"></span>
        <input
          type="text"
          placeholder={placeholder}
          name="search"
          className="form__input"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchBar;
