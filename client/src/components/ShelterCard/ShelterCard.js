import React from "react";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/icons/external-link-icon.png";

const ShelterCard = (props) => {
  if (!props.shelterList.donations) {
    return null;
  }
  return (
    <div className="firstNationCard">
      <div className="firstNationCard__img-box">
        <img
          className="firstNationCard__img-box--img"
          src={props.shelterList.image}
          alt={props.shelterList.program_name}
        />
      </div>
      <div className="firstNationCard__info">
        {/* mobile img display */}
        <h2 className="firstNationCard__info--title">
          {props.shelterList.program_name}
        </h2>
        <div className="firstNationCard__img-box--mobile">
          <img
            className="firstNationCard__img-box--img-mobile"
            src={props.shelterList.image}
            alt={props.shelterList.program_name}
          />
        </div>
        <p className="firstNationCard__type">
          <b>Program type:</b> {props.shelterList.program_type}
        </p>
        <p className="firstNationCard__location">
          <b>Location:</b>
          {props.shelterList.location}
        </p>
        <p>{props.shelterList.description}</p>
        <p className="firstNationCard__info--need">
          Donations in need:
          {props.shelterList.donations.map((donation) => {
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
          {props.shelterList.donations.map((donation) => {
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
              pathname: `homeless-shelter/${props.shelterList.id}`,
            }}
          >
            Learn More
          </Link>
          <a
            className="firstNationCard__links--website"
            target="_blank"
            href={props.shelterList.website}
          >
            Website{" "}
            <img className="firstNationCard__links--icon" src={linkIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShelterCard;
