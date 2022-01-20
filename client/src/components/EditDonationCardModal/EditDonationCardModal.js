import React, { Component } from "react";

class EditDonationCardModal extends Component {
  render() {
    return (
      <div>
        <form>
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

export default EditDonationCardModal;
