import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DonationList from "../DonationList/DonationList";
import "./DonationPage.scss";

const API_URL = process.env.REACT_APP_API_URL;
const postDonationURL = `${API_URL}organization/item`;

const DonationPage = (props) => {
  const [organizationList, setOrganizationList] = useState(null);
  const [currUser, setCurrUser] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [chosedImage, setChosedImage] = useState(false);

  const getOrganization = () => {
    axios
      .get(`${API_URL}organization/`)
      .then((res) => {
        setOrganizationList(res.data);
        setCurrUser(
          res.data.find((user) => {
            return user.program_name === props.userInfo.name;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOrganization();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.item.value && e.target.status.value && e.target.info.value) {
      axios
        .post(postDonationURL, {
          organizationID: currUser.id,
          item: e.target.item.value,
          status: e.target.status.value,
          info: e.target.info.value,
          image: imageUploaded,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
      e.target.reset();
      document.location.reload(true);
    } else alert("Please fill up all the fields");
  };

  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setChosedImage(true);
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
      });
  };

  if (!currUser) {
    return null;
  }
  return (
    <>
      <div className="donation-page">
        <div className="donation-page__profile">
          <div className="donation-page__img-box">
            <img className="donation-page__img-box--img" src={currUser.image} />
          </div>
          <div className="donation-page__profile-info">
            <h1>{currUser.program_name}</h1>
            {/* mobile img display */}
            <div className="donation-page__img-box-mobile">
              <img
                className="donation-page__img-box-mobile--img-mobile"
                src={currUser.image}
              />
            </div>

            <p>
              <b>Program type:</b> {currUser.program_type}
            </p>
            <p>
              <b>Location:</b> {currUser.location}
            </p>
            <p>{currUser.description}</p>
            <div className="donation-page__link-box">
              {" "}
              <Link
                className="donation-page__edit-link"
                to={`profile/${currUser.id}/edit`}
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="donation-page__new-post">
          <h1 className="donation-page__title">Create a New Post</h1>
          <form className="donation-page__" onSubmit={handleSubmit}>
            <div className="donation-page__item-status">
              <div className="donation-page__form-div donation-page__item">
                <label htmlFor="item">Item:</label>
                <input
                  className="donation-page__item-input"
                  type="text"
                  name="item"
                ></input>
              </div>
              <div className="donation-page__form-div donation-page__status">
                <label htmlFor="status">Status:</label>
                <select className="donation-page__status-select" name="status">
                  <option>In Need</option>
                  <option>Surplus</option>
                </select>
              </div>
            </div>
            <div className="donation-page__form-div">
              <div className="donation-page__image-upload">
                {" "}
                <label
                  htmlFor="new-post-image"
                  className="donation-page__choose-image"
                >
                  Choose an image
                </label>
                <input
                  type="file"
                  name="image"
                  id="new-post-image"
                  onChange={fileSelectedHandler}
                ></input>
                <button
                  className="donation-page__upload-button"
                  type="button"
                  onClick={fileUploadHandler}
                >
                  Click to upload the image
                </button>
              </div>

              <p className="donation-page__preview-title">Image preview:</p>
              {!imageUploaded ? null : (
                <div className="donation-page__preview-image-box">
                  <img
                    className="donation-page__preview-image"
                    src={imageUploaded}
                  />
                </div>
              )}

              <label className="donation-page__info-label" htmlFor="info">
                More information:
              </label>
              <textarea
                name="info"
                rows="10"
                cols="200"
                placeholder="Provide extra information..."
                className="donation-page__info-input"
              ></textarea>
              <div className="donation-page__buttons">
                <button
                  className="donation-page__cancel-button"
                  type="button"
                  onClick={() => window.location.reload()}
                >
                  Cancel
                </button>
                <button className="donation-page__create-button">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <DonationList currUser={currUser} />
    </>
  );
};

export default DonationPage;
