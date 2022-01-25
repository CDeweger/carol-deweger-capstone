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
            <h1 className="delete-modal__heading">
              Do you want to delete this post?
            </h1>

            <div className="delete-modal__content-body">
              <div className="delete-modal__content-body--info">
                {" "}
                <p>Item: {this.props.donationList.itemName}</p>
                <p>
                  Status:{" "}
                  {this.props.donationList.status === "In Need" ? (
                    <span className="in-need">In Need</span>
                  ) : (
                    <span className="surplus">Surplus</span>
                  )}
                </p>
                <p>
                  Date posted:
                  {new Date(this.props.donationList.date).toLocaleDateString()}
                </p>
                <p>Information: {this.props.donationList.information}</p>
              </div>

              <div className="delete-modal__image-container delete-modal__content-body--image ">
                <p>Image:</p>
                <img
                  className="delete-modal__image"
                  src={this.props.donationList.image}
                />
              </div>
            </div>
            <div className="delete-modal__buttons">
              <button
                className="delete-modal__buttons--cancel"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
              <button
                className="delete-modal__buttons--delete"
                onClick={this.handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteDonationCardModal;
