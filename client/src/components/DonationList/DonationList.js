// import { Link } from "react-router-dom";

import React, { Component } from "react";
import "./DonationList.scss";
import EditDonationCardModal from "../EditDonationCardModal/EditDonationCardModal";

class DonationList extends Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState({ showModal: true });
  };
  // handleClick = () => {
  //   console.log("click");
  //   <>
  //     <form>
  //       <label>Item</label>
  //       <input type="text" name="item"></input>
  //       <label>Status</label>
  //       <select name="status">
  //         <option disabled selected>
  //           Please select
  //         </option>
  //         <option>In Need</option>
  //         <option>Surplus</option>
  //       </select>
  //       <label>More information</label>
  //       <input name="info" type="text"></input>
  //       <button>Create</button>
  //     </form>
  //   </>;
  //};
  render() {
    let modal = <></>;
    if (this.state.showModal) {
      modal = (
        <EditDonationCardModal
        // itemName={this.props.itemName}
        // inventoryId={this.props.id}
        // closeModal={this.closeModal}
        />
      );
    }
    return (
      <>
        {modal}
        <div className="donationList">
          {this.props.currUser.donations.map((donation) => {
            return (
              <div className="donationList-card">
                <div className="donationList-card__inner">
                  <p>{donation.itemName}</p>
                  <p>{donation.information}</p>
                  <p>
                    {donation.status === "In Need" ? (
                      <span className="donationList-card__in-need">
                        In Need
                      </span>
                    ) : (
                      <span className="donationList-card__surplus">
                        Surplus
                      </span>
                    )}
                  </p>
                  <p>{new Date(donation.date).toLocaleDateString()}</p>
                  <button>Delete</button>
                  <button onClick={this.showModal}>Edit</button>
                  {/* <Link
                  to={`profile/${props.currUser.id}/item/${donation.id}/edit`}
                >
                  Edit
                </Link> */}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default DonationList;
