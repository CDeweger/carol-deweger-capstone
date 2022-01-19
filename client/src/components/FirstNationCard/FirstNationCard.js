import React from "react";
import "./FirstNationCard.scss";

const FirstNationCard = (props) => {
  console.log(props);
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
        <p className="FirstNationCard__info--need">
          Donations in need:
          {props.firstNationList.donation.map((oneDonation) => {
            if (oneDonation.status === "In Need") {
              return <span>{oneDonation.itemName}.</span>;
            }
          })}
        </p>
        <p className="FirstNationCard__info--surplus">
          Surplus donations:
          {props.firstNationList.donation.map((oneDonation) => {
            if (oneDonation.status === "Surplus") {
              return <span>{oneDonation.itemName}.</span>;
            }
          })}
        </p>
        <button className="button">Leran More</button>
      </div>
    </div>
  );
};

export default FirstNationCard;
