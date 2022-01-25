import React from "react";
import { Link } from "react-router-dom";
import Submenu from "../Submenu/Submenu";

import FeaturedNPO from "../FeaturedNPO/FeaturedNPO";
import "./Header.scss";

const Header = () => {
  const isLoggedIn = sessionStorage.getItem("token");

  // const goToAbout = () => {
  //   window.scroll({
  //     top: 750,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <>
      {/* <FeaturedNPO /> */}
      <div className="header">
        <Link to={"/"}>
          <h1 className="header-title">Donation Hub</h1>
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list--item header-hover">
              <Link className="header-link header-hover" to={"/"}>
                Home
              </Link>
            </li>
            <li
              className="header__nav-list--item header-hover"
              // onClick={goToAbout}
            >
              {/* <Link to={"/"}>About</Link> */}
              About
            </li>
            <li className="header__nav-list--item header-hover">
              <span>Category</span>
              <Submenu />
            </li>
            <li className="header__nav-list--item header-hover">
              {!isLoggedIn ? (
                <Link className="header-hover" to={"/login"}>
                  Login
                </Link>
              ) : (
                <Link className="header-hover" to={"/profile"}>
                  Profile
                </Link>
              )}
            </li>
            <li className="header__nav-list--item header-hover">
              {isLoggedIn && (
                <Link className="header-hover" to={"/logout"}>
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
