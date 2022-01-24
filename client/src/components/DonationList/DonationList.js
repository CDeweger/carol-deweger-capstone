import React, { Component } from "react";
import "./DonationList.scss";
import DonationCard from "../DonationCard/DonationCard";

class DonationList extends Component {
  render() {
    return (
      <>
        <h1 className="donationList-title">Current Posts</h1>
        <div className="donationList">
          {this.props.currUser.donations.map((donation) => {
            return <DonationCard donationList={donation} />;
          })}
        </div>
      </>
    );
  }
}

export default DonationList;
