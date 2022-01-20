import React, { Component } from "react";
import EditDonationCardModal from "../EditDonationCardModal/EditDonationCardModal";
class DonationCard extends Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    // console.log(this.props);
    let modal = <></>;
    if (this.state.showModal) {
      modal = (
        <EditDonationCardModal
          closeModal={this.closeModal}
          donationList={this.props.donationList}
        />
      );
    }

    return (
      <>
        {modal}
        <div className="donationList-card">
          <div className="donationList-card__inner">
            <p>{this.props.donationList.itemName}</p>
            <p>{this.props.donationList.information}</p>
            <p>
              {this.props.donationList.status === "In Need" ? (
                <span className="donationList-card__in-need">In Need</span>
              ) : (
                <span className="donationList-card__surplus">Surplus</span>
              )}
            </p>
            <p>{new Date(this.props.donationList.date).toLocaleDateString()}</p>
            <button>Delete</button>
            <button onClick={this.showModal}>Edit</button>
          </div>
        </div>
      </>
    );
  }
}

export default DonationCard;
