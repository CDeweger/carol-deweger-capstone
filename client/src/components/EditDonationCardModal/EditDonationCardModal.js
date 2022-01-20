import React, { Component } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

class EditDonationCardModal extends Component {
  handleCancel = () => {
    this.props.closeModal();
  };

  handleSubmit = () => {};

  render() {
    console.log(this.props);
    return (
      <div>
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
        </form>
      </div>
    );
  }
}

export default EditDonationCardModal;
