import React, { Component } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

class EditOrganization extends Component {
  state = {
    targetOrganization: null,
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
    this.getTargetOrganization();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // axios
    // .patch()

    // const
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>hello from edit</h1>
        <p></p>
        <form onSubmit={this.handleSubmit}>
          <label>Location</label>
          <input></input>
          <label>Website</label>
          <input></input>
          <label>Description</label>
          <input></input>
          <label>Image</label>
          <input type="file" name="image"></input>
        </form>
      </div>
    );
  }
}

export default EditOrganization;
