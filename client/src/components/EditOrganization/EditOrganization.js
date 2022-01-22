import React, { Component } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
const API_URL = process.env.REACT_APP_API_URL;

class EditOrganization extends Component {
  state = {
    targetOrganization: null,
    selectedFile: null,
    imageUploaded: null,
  };
  getTargetOrganization = (id) => {
    axios
      .get(`${API_URL}organization/${id}`)
      .then((res) => {
        console.log(res.data);
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
      image: this.state.imageUploaded,
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
        });
      });
    alert("image uploaded");
  };

  render() {
    console.log(this.state.targetOrganization);
    if (!this.state.targetOrganization) {
      return null;
    }
    return (
      <div>
        <h1>hello from edit</h1>
        <p></p>
        <form onSubmit={this.handleSubmit}>
          <label>Image</label>
          <input
            type="file"
            name="image"
            onChange={this.fileSelectedHandler}
          ></input>
          <button type="button" onClick={this.fileUploadHandler}>
            Upload
          </button>

          <label>Location</label>
          <input
            name="location"
            defaultValue={this.state.targetOrganization.location}
          ></input>
          <label>Website</label>
          <input
            defaultValue={this.state.targetOrganization.website}
            name="website"
          ></input>
          <label>Description</label>
          <input
            defaultValue={this.state.targetOrganization.description}
            name="description"
          ></input>

          <button>Update</button>
        </form>

        {/* <div>
          <label>Image</label>
          <input
            type="file"
            name="image"
            onChange={this.fileSelectedHandler}
          ></input>
          <button onClick={this.fileUploadHandler}>Upload</button>
        </div> */}
      </div>
    );
  }
}

export default EditOrganization;
