import React, { Component } from "react";
import axios from "axios";
import "./EditOrganization.scss";
const API_URL = process.env.REACT_APP_API_URL;

class EditOrganization extends Component {
  state = {
    targetOrganization: null,
    selectedFile: null,
    imageUploaded: null,
    changePreviewImg: false,
  };
  getTargetOrganization = (id) => {
    axios
      .get(`${API_URL}organization/${id}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          targetOrganization: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getTargetOrganization(this.props.match.params.id);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.patch(`${API_URL}organization/${this.props.match.params.id}/edit`, {
      location: e.target.location.value,
      website: e.target.website.value,
      description: e.target.description.value,
      image:
        this.state.imageUploaded === null
          ? this.state.targetOrganization.image
          : this.state.imageUploaded,
    });
    this.props.history.push("/profile");
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
    //alert("image uploaded");
  };

  handleGoBack = () => {
    this.props.history.goBack();
  };
  render() {
    // console.log(this.state.targetOrganization);
    if (!this.state.targetOrganization) {
      return null;
    }
    return (
      <div className="edit-profile">
        <h1 className="edit-profile__edit-title">Update Profile</h1>
        <h2 className="edit-profile__program-title">
          {" "}
          {this.state.targetOrganization.program_name}
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="edit-profile-body">
            <div className="edit-profile-body__image">
              <p>Image preview</p>

              {!this.state.changePreviewImg ? (
                <div className="edit-profile__image-box">
                  <img
                    className="edit-profile__image"
                    src={this.state.targetOrganization.image}
                  />
                </div>
              ) : (
                <div className="edit-profile__image-box">
                  <img
                    className="edit-profile__image"
                    src={this.state.imageUploaded}
                  />
                </div>
              )}
              <div className="edit-profile__image-upload">
                <div className="">
                  {" "}
                  <label
                    htmlFor="profile-image"
                    className="edit-profile__image-file"
                  >
                    Choose an image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="profile-image"
                    onChange={this.fileSelectedHandler}
                  ></input>
                </div>

                <button
                  className="edit-profile__image-upload-button"
                  type="button"
                  onClick={this.fileUploadHandler}
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="edit-profile-body__info">
              <label htmlFor="location" className="edit-profile-body__label">
                Location:
              </label>
              <input
                className="edit-profile-body__input"
                name="location"
                defaultValue={this.state.targetOrganization.location}
              ></input>
              <label htmlFor="website" className="edit-profile-body__label">
                Website:
              </label>
              <input
                className="edit-profile-body__input  "
                defaultValue={this.state.targetOrganization.website}
                name="website"
              ></input>
              <label htmlFor="description" className="edit-profile-body__label">
                Description:
              </label>
              <textarea
                name="description"
                rows="10"
                className="edit-profile-body__input edit-profile-body__input--des"
              >
                {this.state.targetOrganization.description}
              </textarea>
            </div>
          </div>
          <div className="edit-profile__button-box">
            {" "}
            <button
              className="edit-profile__cancel-button "
              type="button"
              onClick={this.handleGoBack}
            >
              Cancel
            </button>
            <button className="edit-profile__update-button button">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditOrganization;
