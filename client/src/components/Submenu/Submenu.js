import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Submenu.scss";

class Submenu extends Component {
  render() {
    return (
      <div className="Submenu">
        <ul className="nav__submenu">
          <li className="nav__submenu-list nav__submenu-list--shelter ">
            <Link>Homeless Shelter</Link>
          </li>
          <li className="nav__submenu-list">
            <Link>Food Bank and Soup Kitchen</Link>
          </li>
          <li className="nav__submenu-list">
            <Link to={"/organization"}>First Nation</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Submenu;
