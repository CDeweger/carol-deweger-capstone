import React from "react";
import "./FirstNationCard.scss";

const FirstNationCard = (props) => {
  if (!props.firstNationList.donations) {
    return null;
  }
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
          {props.firstNationList.donations.map((donation) => {
            if (donation.status === "In Need") {
              return (
                <span className="FirstNationCard__donation-tag--in-need">
                  {donation.itemName}
                </span>
              );
            }
          })}
        </p>
        <p className="FirstNationCard__info--surplus">
          Surplus donations:
          {props.firstNationList.donations.map((donation) => {
            if (donation.status === "Surplus") {
              return (
                <span className="FirstNationCard__donation-tag--surplus">
                  {donation.itemName}
                </span>
              );
            }
          })}
        </p>
        <button className="button">Leran More</button>
      </div>
    </div>
  );
};

export default FirstNationCard;
