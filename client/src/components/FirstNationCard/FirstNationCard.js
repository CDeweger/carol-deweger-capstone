import React from "react";
import { Link } from "react-router-dom";

import "./FirstNationCard.scss";

const FirstNationCard = (props) => {
  if (!props.firstNationList.donations) {
    return null;
  }
  console.log(props);
  return (
    <div className="firstNationCard">
      <div className="firstNationCard__img-box">
        <img
          className="firstNationCard__img-box--img"
          src={props.firstNationList.image}
          alt={props.firstNationList.program_name}
        />
      </div>
      <div className="firstNationCard__info">
        <h2>{props.firstNationList.program_name}</h2>
        <p>Location:{props.firstNationList.location}</p>
        <p>{props.firstNationList.description}</p>
        <p className="firstNationCard__info--need">
          Donations in need:
          {props.firstNationList.donations.map((donation) => {
            if (donation.status === "In Need") {
              return (
                <span className="firstNationCard__donation-tag--in-need">
                  {donation.itemName}
                </span>
              );
            }
          })}
        </p>
        <p className="firstNationCard__info--surplus">
          Surplus donations:
          {props.firstNationList.donations.map((donation) => {
            if (donation.status === "Surplus") {
              return (
                <span className="firstNationCard__donation-tag--surplus">
                  {donation.itemName}
                </span>
              );
            }
          })}
        </p>
        <div className="firstNationCard__links">
          <Link
            className="button"
            to={{
              pathname: `first-nation/${props.firstNationList.id}`,
            }}
          >
            Learn More
          </Link>
          <a target="_blank" href={props.firstNationList.website}>
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstNationCard;
