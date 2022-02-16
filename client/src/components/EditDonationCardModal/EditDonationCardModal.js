import React, { Component, useState } from "react";
import axios from "axios";
import "./EditDonationCardModal.scss";

// import React from 'react';

// const EditDonationCardModal = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default EditDonationCardModal;

const API_URL = process.env.REACT_APP_API_URL;

const EditDonationCardModal = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(null);
  const [changePreviewImg, setChangePreviewImg] = useState(false);

  const handleCancel = () => {
    props.closeEditModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(
        `${API_URL}organization/${props.donationList.organizationID}/item/${props.donationList.id}`,
        {
          itemName: e.target.item.value,
          status: e.target.status.value,
          information: e.target.info.value,
          image:
            imageUploaded === null ? props.donationList.image : imageUploaded,
          //image: this.props.donationList.image,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload(true);
  };

  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    // this.setState({
    //   selectedFile: e.target.files[0],
    // });
  };

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "wg0wjivl");
    axios
      .post("https://api.cloudinary.com/v1_1/dml1rigkl/image/upload", formData)
      .then((res) => {
        console.log(res);

        setImageUploaded(res.data.secure_url);
        setChangePreviewImg(true);
        // this.setState({
        //   imageUploaded: res.data.secure_url,
        //   changePreviewImg: true,
        // });
      });
  };

  //console.log(this.props);
  return (
    <div className="edit-modal">
      <div className="edit-modal__container">
        <div className="edit-modal__inner-container">
          <form className="edit-modal__form" onSubmit={handleSubmit}>
            <div>
              <h1 className="edit-modal__heading">Update the post</h1>
              <div className="edit-modal__item-status">
                <div className="edit-modal__form-group edit-modal__item">
                  <label>Item </label>
                  <input
                    type="text"
                    name="item"
                    defaultValue={props.donationList.itemName}
                  ></input>
                </div>
                <div className="edit-modal__form-group edit-modal__status">
                  <label>Status </label>
                  <select className="edit-modal__status--select" name="status">
                    <option disabled selected>
                      Please select
                    </option>
                    {props.donationList.status === "In Need" ? (
                      <>
                        <option selected>In Need</option>
                        <option>Surplus</option>
                      </>
                    ) : (
                      <>
                        <option>In Need</option>
                        <option selected>Surplus</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className="edit-modal__image-upload">
              <label
                htmlFor="edit-post-image"
                className="edit-modal__choose-image"
              >
                Choose an image
              </label>
              <input
                type="file"
                id="edit-post-image"
                name="image"
                onChange={fileSelectedHandler}
              ></input>
              <button
                className="edit-modal__upload-button"
                type="button"
                onClick={fileUploadHandler}
              >
                Upload image
              </button>
            </div>
            <div className="edit-modal__preview-info">
              <div>
                <p className="edit-modal__preview-label">Image preview</p>
                {!changePreviewImg ? (
                  <div className="edit-modal__preview-image-box">
                    <img
                      className="edit-modal__preview-image"
                      src={props.donationList.image}
                    />
                  </div>
                ) : (
                  <div className="edit-modal__preview-image-box">
                    <img
                      className="edit-modal__preview-image edit-modal__preview-upload "
                      src={imageUploaded}
                    />
                  </div>
                )}
              </div>
              <div className="edit-modal__form-group edit-modal__more-info ">
                <label>More information</label>
                <textarea
                  className="edit-modal__more-info--input"
                  name="info"
                  rows="5"
                  defaultValue={props.donationList.information}
                ></textarea>
              </div>
            </div>
            <div className="edit-modal__buttons">
              <button
                className="edit-modal__buttons--cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button className="edit-modal__buttons--update">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDonationCardModal;
