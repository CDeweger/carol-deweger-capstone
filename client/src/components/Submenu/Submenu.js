import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Submenu.scss";

class Submenu extends Component {
  render() {
    return (
      <div className="submenu">
        <ul className="nav__submenu">
          <li className="nav__submenu-list nav__submenu-list--shelter ">
            <Link
              className="submenu-hover"
              to={"/organization/homeless-shelter"}
            >
              Homeless Shelter
            </Link>
          </li>
          <li className="nav__submenu-list">
            <Link className="submenu-hover" to={"/organization/food-program"}>
              Free & Low Cost Food Program
            </Link>
          </li>
          <li className="nav__submenu-list">
            <Link className="submenu-hover" to={"/organization/first-nation"}>
              First Nation
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Submenu;
