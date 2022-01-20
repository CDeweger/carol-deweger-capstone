// import { Link } from "react-router-dom";

import React, { Component } from "react";
import "./DonationList.scss";
import EditDonationCardModal from "../EditDonationCardModal/EditDonationCardModal";
import DonationCard from "../DonationCard/DonationCard";

class DonationList extends Component {
  render() {
    return (
      <>
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
