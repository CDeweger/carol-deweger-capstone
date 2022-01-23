import React from "react";
import { Link } from "react-router-dom";

// import "./FirstNationCard.scss";

const FoodProgramCard = (props) => {
  if (!props.foodProgramList.donations) {
    return null;
  }
  console.log(props);
  return (
    <div className="FirstNationCard">
      <div className="FirstNationCard__img-box">
        <img
          className="FirstNationCard__img-box--img"
          src={props.foodProgramList.image}
          alt={props.foodProgramList.program_name}
        />
      </div>
      <div className="FirstNationCard__info">
        <h2>{props.foodProgramList.program_name}</h2>
        <p>Location:{props.foodProgramList.location}</p>
        <p>{props.foodProgramList.description}</p>
        <p className="FirstNationCard__info--need">
          Donations in need:
          {props.foodProgramList.donations.map((donation) => {
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
          {props.foodProgramList.donations.map((donation) => {
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
            pathname: `first-nation/${props.foodProgramList.id}`,
            // pathname: `/${props.foodProgramList.id}`,
          }}
        >
          Learn More
        </Link>
        <a target="_blank" href={props.foodProgramList.website}>
          Website
        </a>
      </div>
    </div>
  );
};

export default FoodProgramCard;
