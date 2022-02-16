import React from "react";
import "./DonationList.scss";
import DonationCard from "../DonationCard/DonationCard";

const DonationList = (props) => {
  return (
    <>
      <h1 className="donationList-title">Current Posts</h1>
      <div className="donationList">
        {props.currUser.donations.map((donation) => {
          return <DonationCard donationList={donation} />;
        })}
      </div>
    </>
  );
};

export default DonationList;
