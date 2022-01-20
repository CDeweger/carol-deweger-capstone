import React, { Component } from "react";
import axios from "axios";
import DonationList from "../DonationList/DonationList";
import EditDonationCard from "../EditDonationCard/EditDonationCard";

const API_URL = process.env.REACT_APP_API_URL;
const postDonationURL = `${API_URL}organization`;

class DonationPage extends Component {
  state = {
    organizationList: null,
    currUser: null,
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
        //  program_name: this.state.currUser.program_name,
        item: e.target.item.value,
        status: e.target.status.value,
        info: e.target.info.value,
      })
      .then((response) => {
        console.log(response);
        // this.setState({
        //   isSignedUp: true,
        // });
      })
      .catch((err) => console.log(err));
    e.target.reset();
    document.location.reload(true);
  };
  render() {
    console.log(this.props);
    console.log(this.state.currUser);

    if (!this.state.currUser) {
      return null;
    }
    return (
      <>
        <div>
          <div>
            <h1>{this.state.currUser.program_name}</h1>
            <p>{this.state.currUser.program_type}</p>
            <p>{this.state.currUser.location}</p>
            <p>{this.state.currUser.description}</p>
          </div>
          <h1>Create a New Post</h1>
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
            <button>Create</button>
          </form>
        </div>
        <DonationList currUser={this.state.currUser} />

        {/* <EditDonationCard /> */}
      </>
    );
  }
}

export default DonationPage;
