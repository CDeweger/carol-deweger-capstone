import React from "react";
import axios from "axios";
import "./DeleteDonationCardModal.scss";

const API_URL = process.env.REACT_APP_API_URL;

// const DeleteDonationCardModal = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default DeleteDonationCardModal;

const DeleteDonationCardModal = (props) => {
  const handleCancel = () => {
    props.closeDeleteModal();
  };

  const handleDelete = () => {
    axios
      .delete(
        `${API_URL}organization/${props.donationList.organizationID}/item/${props.donationList.id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    props.closeDeleteModal();
    window.location.reload(true);
  };
  console.log(props.donationList.organizationID);
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
              <p>Item: {props.donationList.itemName}</p>
              <p>
                Status:{" "}
                {props.donationList.status === "In Need" ? (
                  <span className="in-need">In Need</span>
                ) : (
                  <span className="surplus">Surplus</span>
                )}
              </p>
              <p>
                Date posted:
                {new Date(props.donationList.date).toLocaleDateString()}
              </p>
              <p>Information: {props.donationList.information}</p>
            </div>

            <div className="delete-modal__image-container delete-modal__content-body--image ">
              <p>Image:</p>
              <img
                className="delete-modal__image"
                src={props.donationList.image}
              />
            </div>
          </div>
          <div className="delete-modal__buttons">
            <button
              className="delete-modal__buttons--cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="delete-modal__buttons--delete"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDonationCardModal;
