import React from "react";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/icons/external-link-icon.png";

// import "./FirstNationCard.scss";

const FoodProgramCard = (props) => {
  if (!props.foodProgramList.donations) {
    return null;
  }
  console.log(props);
  return (
    <div className="firstNationCard">
      <div className="firstNationCard__img-box">
        <img
          className="firstNationCard__img-box--img"
          src={props.foodProgramList.image}
          alt={props.foodProgramList.program_name}
        />
      </div>
      <div className="firstNationCard__info">
        <h2>{props.foodProgramList.program_name}</h2>
        <p>Location:{props.foodProgramList.location}</p>
        <p>{props.foodProgramList.description}</p>
        <p className="firstNationCard__info--need">
          Donations in need:
          {props.foodProgramList.donations.map((donation) => {
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
          {props.foodProgramList.donations.map((donation) => {
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
              pathname: `first-nation/${props.foodProgramList.id}`,
              // pathname: `/${props.foodProgramList.id}`,
            }}
          >
            Learn More
          </Link>
          <a target="_blank" href={props.foodProgramList.website}>
            Website{" "}
            <img className="firstNationCard__links--icon" src={linkIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodProgramCard;
