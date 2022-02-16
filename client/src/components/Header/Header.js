import React from "react";
import { Link } from "react-router-dom";
import Submenu from "../Submenu/Submenu";
import { HashLink } from "react-router-hash-link";
import "./Header.scss";

const Header = () => {
  const isLoggedIn = sessionStorage.getItem("token");

  return (
    <>
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
            <li className="header__nav-list--item header-hover">
              <HashLink
                className="header-link header-hover"
                smooth
                to="/#about"
              >
                About
              </HashLink>
            </li>
            <li className="header__nav-list--item header-hover">
              <span>Organizations</span>
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
