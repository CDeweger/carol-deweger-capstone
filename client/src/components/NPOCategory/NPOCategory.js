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
        <Link
          to={"/organization/homeless-shelter"}
          className="button NPOCategory__button"
        >
          Homeless Shelters
        </Link>
        <Link
          to={"/organization/food-program"}
          className="button NPOCategory__button"
        >
          Free & Low Cost Food Programs
        </Link>
        <Link
          to={"/organization/first-nation"}
          className="button NPOCategory__button NPOCategory__button--first-nation "
        >
          First Nations Organizations
        </Link>
        {/* <span className="button NPOCategory__button"> Animal Shelters</span> */}
        <Link to={"/"} className="button NPOCategory__button">
          Animal Shelters
        </Link>
        <Link to={"/"} className="button NPOCategory__button">
          Refugee Support Programs
        </Link>
        <Link to={"/"} className="button NPOCategory__button">
          Environmental Conservation Programs
        </Link>
      </div>
    </div>
  );
};

export default NPOCategory;
