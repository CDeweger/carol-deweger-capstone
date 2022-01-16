import React from "react";
import "./NPOCategory.scss";

const NPOCategory = () => {
  return (
    <div className="NPOCategory">
      <h1>Exploring nonprofit organizations</h1>
      <p>Find out what they need and what you can do to help.</p>
      <div>__________</div>
      <div className="NPOCategory__category">
        <button className="button NPOCategory__button">Homeless Shelter</button>
        <button className="button NPOCategory__button">
          Food Bank and Soup Kitchen
        </button>
        <button className="button NPOCategory__button">First Nation</button>
      </div>
    </div>
  );
};

export default NPOCategory;
