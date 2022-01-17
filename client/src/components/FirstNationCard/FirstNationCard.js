import React from "react";
import "./FirstNationCard.scss";

const FirstNationCard = (props) => {
  return (
    <div className="FirstNationCard">
      <div className="FirstNationCard__img-box">
        <img
          className="FirstNationCard__img-box--img"
          src={props.firstNationList.image}
          alt={props.firstNationList.program_name}
        />
      </div>
      <div className="FirstNationCard__info">
        <h2>{props.firstNationList.program_name}</h2>
        <p>Location:{props.firstNationList.location}</p>
        <p>{props.firstNationList.description}</p>
        <p>Donation in need:</p>
        <p>Surplus donation:</p>
        <button className="button">Leran More</button>
      </div>
    </div>
  );
};

export default FirstNationCard;
