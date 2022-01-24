import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DonationList from "../DonationList/DonationList";
import "./DonationPage.scss";

const API_URL = process.env.REACT_APP_API_URL;
const postDonationURL = `${API_URL}organization/item`;

class DonationPage extends Component {
  state = {
    organizationList: null,
    currUser: null,
    selectedFile: null,
    imageUploaded: null,
    previewImg: null,
  };

  getOrganization = () => {
    axios
      .get(`${API_URL}organization/`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          organizationList: res.data,
          currUser: res.data.find((user) => {
            return user.program_name === this.props.userInfo.name;
          }),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getOrganization();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(postDonationURL, {
        organizationID: this.state.currUser.id,
        item: e.target.item.value,
        status: e.target.status.value,
        info: e.target.info.value,
        image: this.state.imageUploaded,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    e.target.reset();
    document.location.reload(true);
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

        this.setState({
          imageUploaded: res.data.secure_url,
        });
      });
  };

  render() {
    console.log(this.props);
    console.log(this.state.currUser);

    if (!this.state.currUser) {
      return null;
    }
    return (
      <>
        <div className="donation-page">
          <div className="donation-page__profile">
            <div className="donation-page__img-box">
              <img
                className="donation-page__img-box--img"
                src={this.state.currUser.image}
              />
            </div>
            <div className="donation-page__profile-info">
              <h1>{this.state.currUser.program_name}</h1>
              <p>Program type: {this.state.currUser.program_type}</p>
              <p>Location: {this.state.currUser.location}</p>
              <p>{this.state.currUser.description}</p>
              <div className="donation-page__link-box">
                {" "}
                <Link
                  className="donation-page__edit-link"
                  to={`profile/${this.state.currUser.id}/edit`}
                >
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
          {/* the form to create a new post */}
          <div className="donation-page__new-post">
            <h1 className="donation-page__title">Create a New Post</h1>
            <form className="donation-page__" onSubmit={this.handleSubmit}>
              <div className="donation-page__item-status">
                <div className="donation-page__form-div donation-page__item">
                  <label htmlFor="item">Item</label>
                  <input
                    className="donation-page__"
                    type="text"
                    name="item"
                  ></input>
                </div>
                <div className="donation-page__form-div donation-page__status">
                  <label htmlFor="status">Status</label>
                  <select className="donation-page__" name="status">
                    <option disabled selected>
                      Please select
                    </option>
                    <option>In Need</option>
                    <option>Surplus</option>
                  </select>
                </div>
              </div>
              <div className="donation-page__form-div">
                <label htmlFor="new-post-image" className="">
                  Choose an image
                </label>
                <input
                  type="file"
                  name="image"
                  id="new-post-image"
                  onChange={this.fileSelectedHandler}
                ></input>
                <button type="button" onClick={this.fileUploadHandler}>
                  Upload
                </button>
                <p>Image preview</p>
                {!this.state.imageUploaded ? null : (
                  // <img src={this.state.currUser.image} />
                  <img src={this.state.imageUploaded} />
                )}

                <label className="donation-page__info-label" htmlFor="info">
                  More information
                </label>
                <textarea
                  name="info"
                  rows="10"
                  cols="200"
                  placeholder="Provide extra information..."
                ></textarea>

                <button className="donation-page__button">Create</button>
              </div>
            </form>
          </div>
        </div>
        <DonationList currUser={this.state.currUser} />
      </>
    );
  }
}

export default DonationPage;
