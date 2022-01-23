import React, { Component } from "react";
import axios from "axios";
import "./DeleteDonationCardModal.scss";

const API_URL = process.env.REACT_APP_API_URL;

class DeleteDonationCardModal extends Component {
  handleCancel = () => {
    this.props.closeDeleteModal();
  };

  handleDelete = () => {
    axios
      .delete(
        `${API_URL}organization/${this.props.donationList.organizationID}/item/${this.props.donationList.id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.closeDeleteModal();
    window.location.reload(true);
  };
  render() {
    console.log(this.props.donationList.organizationID);
    return (
      <div className="delete-modal">
        <div className="delete-modal__container">
          <div className="delete-modal__inner-container">
            <p>{this.props.donationList.itemName}</p>
            <p>{this.props.donationList.status}</p>
            <p>{this.props.donationList.information}</p>
            <p>{new Date(this.props.donationList.date).toLocaleDateString()}</p>
            <img src={this.props.donationList.image} />
            <button onClick={this.handleCancel}>Cancel</button>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteDonationCardModal;
