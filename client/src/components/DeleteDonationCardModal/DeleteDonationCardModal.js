import React, { Component } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

class DeleteDonationCardModal extends Component {
  handleCancel = () => {
    this.props.closeDeleteModal();
  };
  render() {
    return (
      <div>
        <p>{this.props.donationList.itemName}</p>
        <p>{this.props.donationList.status}</p>
        <p>{this.props.donationList.information}</p>
        <p>{new Date(this.props.donationList.date).toLocaleDateString()}</p>
        <button onClick={this.handleCancel}>Cancel</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default DeleteDonationCardModal;
