import React, { Component } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const profileURL = `${API_URL}profile`;

class ProfilePage extends Component {
  state = {
    isLoading: true,
    userInfo: {},
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
        this.setState(
          {
            userInfo: response.data,
            isLoading: false,
          }
          //   () => {
          //     this.setState({
          //       isLoading: false,
          //     });
          //   }
        );
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { isLoading, userInfo } = this.state;
    return isLoading ? <h1>Loading...</h1> : <h1>Welcome {userInfo.name}!</h1>;
  }
}

export default ProfilePage;
