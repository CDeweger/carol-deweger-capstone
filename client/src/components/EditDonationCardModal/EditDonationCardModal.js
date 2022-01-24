import React, { Component } from "react";
import axios from "axios";
import "./EditDonationCardModal.scss";
// import { Image } from "cloudinary-react";

const API_URL = process.env.REACT_APP_API_URL;

class EditDonationCardModal extends Component {
  state = {
    selectedFile: null,
    imageUploaded: null,
    changePreviewImg: false,
  };

  handleCancel = () => {
    this.props.closeEditModal();
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(
        `${API_URL}organization/${this.props.donationList.organizationID}/item/${this.props.donationList.id}`,
        {
          itemName: e.target.item.value,
          status: e.target.status.value,
          information: e.target.info.value,
          image:
            this.state.imageUploaded === null
              ? this.props.donationList.image
              : this.state.imageUploaded,
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

  fileSelectedHandler = (e) => {
    //console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);
    formData.append("upload_preset", "wg0wjivl");
    axios
      .post("https://api.cloudinary.com/v1_1/dml1rigkl/image/upload", formData)
      .then((res) => {
        console.log(res);
        // const data = response.data;
        // const fileURL = data.secure_url

        this.setState({
          imageUploaded: res.data.secure_url,
          changePreviewImg: true,
        });
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className="edit-modal">
        <div className="edit-modal__container">
          <div className="edit-modal__inner-container">
            <div className="edit-modal__content-container">
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label>Item </label>
                  <input
                    type="text"
                    name="item"
                    defaultValue={this.props.donationList.itemName}
                  ></input>
                  <label>Status </label>
                  <select name="status">
                    <option disabled selected>
                      Please select
                    </option>
                    {this.props.donationList.status === "In Need" ? (
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
                <div className="edit-modal__form-group">
                  <label>More information</label>
                  <textarea
                    name="info"
                    rows="5"
                    defaultValue={this.props.donationList.information}
                  ></textarea>
                </div>
                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={this.fileSelectedHandler}
                ></input>
                <button type="button" onClick={this.fileUploadHandler}>
                  Upload
                </button>
                <p>Image preview</p>

                {!this.state.changePreviewImg ? (
                  <div className="edit-modal__preview-image-box">
                    <img
                      className="edit-modal__preview-image"
                      src={this.props.donationList.image}
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="edit-modal__preview-image edit-modal__preview-upload "
                      src={this.state.imageUploaded}
                    />
                  </div>
                )}
                <div className="edit-modal__button">
                  <button onClick={this.handleCancel}>Cancel</button>
                  <button>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditDonationCardModal;
