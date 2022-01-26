import React from "react";
import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

const SearchBar = ({ placeholder, handleSearch }) => {
  return (
    <div className="searchBar">
      <form className="searchBar-form">
        {/* <img className="searchBar-icon" src={searchIcon} /> */}
        <span className="searchBar-icon"></span>
        <input
          type="text"
          placeholder={placeholder}
          name="search"
          className="searchBar-form__input"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

// {placeholder}

export default SearchBar;
