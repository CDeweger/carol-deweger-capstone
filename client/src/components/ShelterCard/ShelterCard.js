import React from "react";
import { Link } from "react-router-dom";

//import "./FirstNationCard.scss";

const ShelterCard = (props) => {
  if (!props.shelterList.donations) {
    return null;
  }
  console.log(props);
  return (
    <div className="FirstNationCard">
      <div className="FirstNationCard__img-box">
        <img
          className="FirstNationCard__img-box--img"
          src={props.shelterList.image}
          alt={props.shelterList.program_name}
        />
      </div>
      <div className="FirstNationCard__info">
        <h2>{props.shelterList.program_name}</h2>
        <p>Location:{props.shelterList.location}</p>
        <p>{props.shelterList.description}</p>
        <p className="FirstNationCard__info--need">
          Donations in need:
          {props.shelterList.donations.map((donation) => {
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
          {props.shelterList.donations.map((donation) => {
            if (donation.status === "Surplus") {
              return (
                <span className="FirstNationCard__donation-tag--surplus">
                  {donation.itemName}
                </span>
              );
            }
          })}
        </p>
        <Link
          className="button"
          to={{
            pathname: `homeless-shelter/${props.shelterList.id}`,
            // pathname: `/${props.shelterList.id}`,
          }}
        >
          Learn More
        </Link>
        <a target="_blank" href={props.shelterList.website}>
          Website
        </a>
      </div>
    </div>
  );
};

export default ShelterCard;
