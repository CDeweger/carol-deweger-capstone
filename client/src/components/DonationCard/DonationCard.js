import React, { setState, useState } from "react";
import EditDonationCardModal from "../EditDonationCardModal/EditDonationCardModal";
import DeleteDonationCardModal from "../DeleteDonationCardModal/DeleteDonationCardModal";
import "./DonationCard.scss";

const DonationCard = (props) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, SetShowDeleteModal] = useState(false);

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleShowDeleteModal = () => {
    SetShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    SetShowDeleteModal(false);
  };

  let editModal = <></>;
  if (showEditModal) {
    editModal = (
      <EditDonationCardModal
        closeEditModal={closeEditModal}
        donationList={props.donationList}
      />
    );
  }

  let deleteModal = <></>;
  if (showDeleteModal) {
    deleteModal = (
      <DeleteDonationCardModal
        closeDeleteModal={closeDeleteModal}
        donationList={props.donationList}
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
              src={props.donationList.image}
            />
          </div>
          <div className="donationList-card__info-box">
            <div>
              <h2 className="donationList-card__item">
                {props.donationList.itemName}
              </h2>
            </div>
            <div className="donationList-card__status-date">
              <p>
                Status:{" "}
                {props.donationList.status === "In Need" ? (
                  <span className="donationList-card__in-need">In Need</span>
                ) : (
                  <span className="donationList-card__surplus">Surplus</span>
                )}
              </p>
              <p className="donationList-card__date">
                Posted: {new Date(props.donationList.date).toLocaleDateString()}
              </p>
            </div>
            <p>{props.donationList.information}</p>
            <div className="donationList-card__buttons">
              <button
                className="donationList-card__delete-button"
                onClick={handleShowDeleteModal}
              >
                Delete
              </button>
              <button
                className="donationList-card__edit-button"
                onClick={handleShowEditModal}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationCard;
