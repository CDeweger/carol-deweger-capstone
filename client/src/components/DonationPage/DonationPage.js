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
    // upload image
    selectedFile: null,
    imageUploaded: null,
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
        // const data = response.data;
        // const fileURL = data.secure_url

        this.setState({
          imageUploaded: res.data.secure_url,
        });
      });
    alert("image uploaded");
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
              <p>{this.state.currUser.program_type}</p>
              <p>{this.state.currUser.location}</p>
              <p>{this.state.currUser.description}</p>
              <Link to={`profile/${this.state.currUser.id}/edit`}>
                Edit Profile
              </Link>
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
                <label className="donation-page__info-label" htmlFor="info">
                  More information
                </label>
                <input
                  className="donation-page__info-input"
                  name="info"
                  type="text"
                ></input>
                <button className="donation-page__button">Create</button>
              </div>
            </form>
            {/* uplaod image */}
            <div>
              <form>
                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={this.fileSelectedHandler}
                ></input>
                <button type="button" onClick={this.fileUploadHandler}>
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
        <DonationList currUser={this.state.currUser} />
      </>
    );
  }
}

export default DonationPage;
