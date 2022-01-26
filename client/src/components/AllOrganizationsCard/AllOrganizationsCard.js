import React from "react";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/icons/external-link-icon.png";

// import "./FirstNationCard.scss";

const AllOrganizationsCard = (props) => {
  if (!props.allOrganizations.donations) {
    return null;
  }
  // console.log(props);
  return (
    <div className="firstNationCard">
      <div className="firstNationCard__img-box">
        <img
          className="firstNationCard__img-box--img"
          src={props.allOrganizations.image}
          alt={props.allOrganizations.program_name}
        />
      </div>
      <div className="firstNationCard__info">
        <h2>{props.allOrganizations.program_name}</h2>
        <p>
          <b>Program type:</b> {props.allOrganizations.program_type}
        </p>
        <p>
          <b>Location:</b> {props.allOrganizations.location}
        </p>
        <p>{props.allOrganizations.description}</p>
        <p className="firstNationCard__info--need">
          Donations in need:
          {props.allOrganizations.donations.map((donation) => {
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
          {props.allOrganizations.donations.map((donation) => {
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
            className="button firstNationCard__learn-more-button"
            to={{
              pathname: `organization/${props.allOrganizations.id}`,
            }}
          >
            Learn More
          </Link>
          <a
            className="firstNationCard__links--website"
            target="_blank"
            href={props.allOrganizations.website}
          >
            Website
            <img className="firstNationCard__links--icon" src={linkIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllOrganizationsCard;
