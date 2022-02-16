import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import DonationPage from "../../components/DonationPage/DonationPage";
// import DonationList from "../../components/DonationList/DonationList";

const API_URL = process.env.REACT_APP_API_URL;
const profileURL = `${API_URL}profile`;
// const profileURL = `${API_URL}`;

class ProfilePage extends Component {
  state = {
    isLoading: true,
    userInfo: null,
    user: null,
  };

  componentDidMount() {
    // here grab token from sessionStorage
    const token = sessionStorage.getItem("token");
    //window.location.reload(true);
    axios
      .get(profileURL, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        //console.log(response);
        this.setState({
          userInfo: response.data,
          isLoading: false,
        });
      })
      .catch((err) => console.log(err));

    this.reloadPage();
  }

  reloadPage = () => {
    if (window.localStorage) {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;

        window.location.reload();
      } else {
        localStorage.removeItem("firstLoad");
      }
    }
  };

  render() {
    //console.log(this.props);
    const { isLoading, userInfo } = this.state;
    return isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <Helmet>
          <title>Donation Hub | Profile</title>
        </Helmet>
        <DonationPage userInfo={userInfo} />
        {/* {window.location.reload(true)} */}
        {/* <DonationList userInfo={userInfo} /> */}
      </>
    );
  }
}

export default ProfilePage;
