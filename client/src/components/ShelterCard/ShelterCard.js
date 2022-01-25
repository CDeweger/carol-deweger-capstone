import React from "react";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/icons/external-link-icon.png";

//import "./FirstNationCard.scss";

const ShelterCard = (props) => {
  if (!props.shelterList.donations) {
    return null;
  }
  console.log(props);
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
        <h2>{props.shelterList.program_name}</h2>
        <p>Location:{props.shelterList.location}</p>
        <p>{props.shelterList.description}</p>
        <p className="firstNationCard__info--need">
          Donations in need:
          {props.shelterList.donations.map((donation) => {
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
          {props.shelterList.donations.map((donation) => {
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
            className="button "
            to={{
              pathname: `homeless-shelter/${props.shelterList.id}`,
              // pathname: `/${props.shelterList.id}`,
            }}
          >
            Learn More
          </Link>
          <a target="_blank" href={props.shelterList.website}>
            Website{" "}
            <img className="firstNationCard__links--icon" src={linkIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShelterCard;
