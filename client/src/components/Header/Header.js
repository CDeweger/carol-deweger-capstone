import React from "react";
import { Link } from "react-router-dom";
import Submenu from "../Submenu/Submenu";

import FeaturedNPO from "../FeaturedNPO/FeaturedNPO";
import "./Header.scss";

const Header = () => {
  const isLoggedIn = sessionStorage.getItem("token");

  return (
    <>
      {/* <FeaturedNPO /> */}
      <div className="header">
        <div className="header-title">Donation Hub</div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list--item">
              <Link className="header-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="header__nav-list--item">
              <Link to={"/"}>About</Link>
            </li>
            <li className="header__nav-list--item">
              <span>Category</span>
              <Submenu />
            </li>
            <li className="header__nav-list--item">
              {!isLoggedIn ? (
                <Link to={"/login"}>Login</Link>
              ) : (
                <Link to={"/profile"}>Profile</Link>
              )}
            </li>
            <li>{isLoggedIn && <Link to={"/logout"}>Logout</Link>}</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
