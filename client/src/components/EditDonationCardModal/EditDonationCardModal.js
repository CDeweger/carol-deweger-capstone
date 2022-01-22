import React, { Component } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

class EditDonationCardModal extends Component {
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
