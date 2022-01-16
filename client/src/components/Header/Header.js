import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">Donation Hub</div>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list--item">Home</li>
          <li className="header__nav-list--item">About</li>
          <li className="header__nav-list--item">Category</li>
          <li className="header__nav-list--item">Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
