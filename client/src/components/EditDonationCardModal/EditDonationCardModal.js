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
    // alert("image uploaded");
  };

  render() {
    console.log(this.props);
    return (
      <div className="edit-modal">
        <div className="edit-modal__container">
          <div className="edit-modal__inner-container">
            <form onSubmit={this.handleSubmit}>
              <label>Item</label>
              <input
                type="text"
                name="item"
                defaultValue={this.props.donationList.itemName}
              ></input>
              <label>Status</label>
              <select name="status">
                <option disabled selected>
                  Please select
                </option>
                <option>In Need</option>
                <option>Surplus</option>
              </select>
              <label>More information</label>
              <input
                name="info"
                type="text"
                defaultValue={this.props.donationList.information}
              ></input>
              <button>Update</button>
              <button onClick={this.handleCancel}>Cancel</button>
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
                <img src={this.props.donationList.image} />
              ) : (
                <img src={this.state.imageUploaded} />
              )}
            </form>
            <form>
              {/* <label>Image</label>
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
                <img src={this.props.donationList.image} />
              ) : (
                <img src={this.state.imageUploaded} />
              )} */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditDonationCardModal;
