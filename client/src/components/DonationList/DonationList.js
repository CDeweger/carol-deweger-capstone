import React from "react";
import "./DonationList.scss";

const DonationList = (props) => {
  console.log(props);
  return (
    <div className="donationList">
      {props.currUser.donations.map((donation) => {
        return (
          <div className="donationList-card">
            <p>{donation.itemName}</p>
            <p>{donation.information}</p>
            <p>
              {donation.status === "In Need" ? (
                <span className="donationList-card__in-need">In Need</span>
              ) : (
                <span className="donationList-card__surplus">Surplus</span>
              )}
            </p>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default DonationList;
