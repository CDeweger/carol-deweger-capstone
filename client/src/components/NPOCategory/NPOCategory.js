import React from "react";
import { Link } from "react-router-dom";
import "./NPOCategory.scss";

const NPOCategory = () => {
  return (
    <div className="NPOCategory">
      <h1>Exploring nonprofit organizations</h1>
      <p>Find out what they need and what you can do to help.</p>
      <div>__________</div>
      <div className="NPOCategory__category">
        <Link to={"/"} className="button NPOCategory__button">
          Homeless Shelter
        </Link>
        <Link to={"/"} className="button NPOCategory__button">
          Food Bank and Soup Kitchen
        </Link>
        <Link to={"/first-nation"} className="button NPOCategory__button">
          First Nation
        </Link>
      </div>
    </div>
  );
};

export default NPOCategory;
