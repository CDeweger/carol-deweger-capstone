import React from "react";
import { Link } from "react-router-dom";

import FeaturedNPO from "../FeaturedNPO/FeaturedNPO";
import "./Header.scss";

const Header = () => {
  return (
    <>
      {/* <FeaturedNPO /> */}
      <div className="header">
        <div className="header-title">Donation Hub</div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <Link className="header-link" to={"/"}>
              <li className="header__nav-list--item">Home</li>
            </Link>
            <li className="header__nav-list--item">About</li>
            <li className="header__nav-list--item">Category</li>
            <li className="header__nav-list--item">Login</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
