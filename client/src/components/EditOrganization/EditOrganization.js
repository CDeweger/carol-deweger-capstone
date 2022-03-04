import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EditOrganization.scss";
const API_URL = process.env.REACT_APP_API_URL;

const EditOrganization = (props) => {
  const [targetOrganization, setTargetOrganization] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(null);
  const [changePreviewImg, setChangePreviewImg] = useState(false);

  const getTargetOrganization = (id) => {
    axios
      .get(`${API_URL}organization/${id}`)
      .then((res) => {
        setTargetOrganization(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTargetOrganization(props.match.params.id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.patch(`${API_URL}organization/${props.match.params.id}/edit`, {
      location: e.target.location.value,
      website: e.target.website.value,
      description: e.target.description.value,
      image: imageUploaded === null ? targetOrganization.image : imageUploaded,
    });
    props.history.push("/profile");
  };
  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.files[0]);
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
      });
  };

  const handleGoBack = () => {
    props.history.goBack();
  };

  if (!targetOrganization) {
    return null;
  }
  return (
    <div className="edit-profile">
      <h1 className="edit-profile__edit-title">Update Profile</h1>
      <h2 className="edit-profile__program-title">
        {" "}
        {targetOrganization.program_name}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="edit-profile-body">
          <div className="edit-profile-body__image">
            <p className="edit-profile-body__image-preview">Image preview</p>

            {!changePreviewImg ? (
              <div className="edit-profile__image-box">
                <img
                  className="edit-profile__image"
                  src={targetOrganization.image}
                />
              </div>
            ) : (
              <div className="edit-profile__image-box">
                <img className="edit-profile__image" src={imageUploaded} />
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
                  onChange={fileSelectedHandler}
                ></input>
              </div>

              <button
                className="edit-profile__image-upload-button"
                type="button"
                onClick={fileUploadHandler}
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
              defaultValue={targetOrganization.location}
            ></input>
            <label htmlFor="website" className="edit-profile-body__label">
              Website:
            </label>
            <input
              className="edit-profile-body__input  "
              defaultValue={targetOrganization.website}
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
              {targetOrganization.description}
            </textarea>
          </div>
        </div>
        <div className="edit-profile__button-box">
          {" "}
          <button
            className="edit-profile__cancel-button "
            type="button"
            onClick={handleGoBack}
          >
            Cancel
          </button>
          <button className="edit-profile__update-button button">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditOrganization;
