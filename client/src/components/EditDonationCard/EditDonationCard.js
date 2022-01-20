import React, { Component } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

class EditDonationCard extends Component {
  state = {
    organizationList: null,
  };

  //get a list of organization
  getOrganizationList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  getItemById = (id) => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getOrganizationList();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Item</label>
          <input type="text" name="item"></input>
          <label>Status</label>
          <select name="status">
            <option disabled selected>
              Please select
            </option>
            <option>In Need</option>
            <option>Surplus</option>
          </select>
          <label>More information</label>
          <input name="info" type="text"></input>
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default EditDonationCard;
