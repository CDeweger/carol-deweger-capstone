import React from "react";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/icons/external-link-icon.png";

import "./FirstNationCard.scss";

const FirstNationCard = (props) => {
  if (!props.firstNationList.donations) {
    return null;
  }
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
        <h2 className="firstNationCard__info--title">
          {props.firstNationList.program_name}
        </h2>
        {/* mobile img display */}
        <div className="firstNationCard__img-box--mobile">
          <img
            className="firstNationCard__img-box--img-mobile"
            src={props.firstNationList.image}
            alt={props.firstNationList.program_name}
          />
        </div>
        <p className="firstNationCard__type">
          <b>Program type:</b> {props.firstNationList.program_type}
        </p>

        <p className="firstNationCard__location">
          <b>Location:</b>
          {props.firstNationList.location}
        </p>
        <p>{props.firstNationList.description}</p>
        <p className="firstNationCard__info--need">
          Donations in need:
          {props.firstNationList.donations.map((donation) => {
            if (donation.status === "In Need") {
              return (
                <p className="firstNationCard__donation-tag--in-need">
                  {donation.itemName}
                </p>
              );
            }
          })}
        </p>
        <p className="firstNationCard__info--surplus">
          Surplus donations:
          {props.firstNationList.donations.map((donation) => {
            if (donation.status === "Surplus") {
              return (
                <p className="firstNationCard__donation-tag--surplus">
                  {donation.itemName}
                </p>
              );
            }
          })}
        </p>
        <div className="firstNationCard__links">
          <Link
            className="button firstNationCard__learn-more-button"
            to={{
              pathname: `first-nation/${props.firstNationList.id}`,
            }}
          >
            Learn More
          </Link>
          <a
            className="firstNationCard__links--website"
            target="_blank"
            href={props.firstNationList.website}
          >
            Website
            <img className="firstNationCard__links--icon" src={linkIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstNationCard;
