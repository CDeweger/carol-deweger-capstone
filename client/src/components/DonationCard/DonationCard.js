import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditDonationCardModal from "../EditDonationCardModal/EditDonationCardModal";
import DeleteDonationCardModal from "../DeleteDonationCardModal/DeleteDonationCardModal";
import "./DonationCard.scss";
const API_URL = process.env.REACT_APP_API_URL;

class DonationCard extends Component {
  state = {
    showEditModal: false,
    showDeleteModal: false,
  };

  showEditModal = () => {
    this.setState({ showEditModal: true });
    //this.props.histroy.push(`profile/${this.props.donationList.id}`);
  };

  closeEditModal = () => {
    this.setState({ showEditModal: false });
  };

  showDeleteModal = () => {
    this.setState({ showDeleteModal: true });
  };

  closeDeleteModal = () => {
    this.setState({ showDeleteModal: false });
  };

  render() {
    console.log(this.props);
    let editModal = <></>;
    if (this.state.showEditModal) {
      editModal = (
        <EditDonationCardModal
          closeEditModal={this.closeEditModal}
          donationList={this.props.donationList}
        />
      );
    }

    let deleteModal = <></>;
    if (this.state.showDeleteModal) {
      deleteModal = (
        <DeleteDonationCardModal
          closeDeleteModal={this.closeDeleteModal}
          donationList={this.props.donationList}
        />
      );
    }

    return (
      <>
        {editModal}
        {deleteModal}
        <div className="donationList-card">
          <div className="donationList-card__inner">
            <div className="donationList-card__image-box">
              <img
                className="donationList-card__image-box--image"
                src={this.props.donationList.image}
              />
            </div>
            <div className="donationList-card__info-box">
              <div>
                <h2 className="donationList-card__item">
                  {this.props.donationList.itemName}
                </h2>
              </div>
              <div className="donationList-card__status-date">
                <p>
                  Status:{" "}
                  {this.props.donationList.status === "In Need" ? (
                    <span className="donationList-card__in-need">In Need</span>
                  ) : (
                    <span className="donationList-card__surplus">Surplus</span>
                  )}
                </p>
                <p className="donationList-card__date">
                  Posted:{" "}
                  {new Date(this.props.donationList.date).toLocaleDateString()}
                </p>
              </div>
              <p>{this.props.donationList.information}</p>
              <div className="donationList-card__buttons">
                <button
                  className="donationList-card__delete-button"
                  onClick={this.showDeleteModal}
                >
                  Delete
                </button>
                <button
                  className="donationList-card__edit-button"
                  onClick={this.showEditModal}
                >
                  {/* <Link to={`profile/${this.props.donationList.id}`}>Edit</Link> */}
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DonationCard;
