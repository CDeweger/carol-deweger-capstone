import React, { Component } from "react";
import axios from "axios";
import DonationPage from "../../components/DonationPage/DonationPage";
// import DonationList from "../../components/DonationList/DonationList";

const API_URL = process.env.REACT_APP_API_URL;
const profileURL = `${API_URL}profile`;

class ProfilePage extends Component {
  state = {
    isLoading: true,
    userInfo: null,
    user: null,
  };

  componentDidMount() {
    // here grab token from sessionStorage
    const token = sessionStorage.getItem("token");

    axios
      .get(profileURL, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          userInfo: response.data,
          isLoading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { isLoading, userInfo } = this.state;
    return isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <DonationPage userInfo={userInfo} />
        {/* <DonationList userInfo={userInfo} /> */}
      </>
    );
  }
}

export default ProfilePage;
