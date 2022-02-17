import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import DonationPage from "../../components/DonationPage/DonationPage";

const API_URL = process.env.REACT_APP_API_URL;
const profileURL = `${API_URL}profile`;

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const fetchProfile = () => {
    const token = sessionStorage.getItem("token");

    axios
      .get(profileURL, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserInfo(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    reloadPage();
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const reloadPage = () => {
    if (window.localStorage) {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;

        window.location.reload();
      } else {
        localStorage.removeItem("firstLoad");
      }
    }
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Helmet>
        <title>Donation Hub | Profile</title>
      </Helmet>
      <DonationPage userInfo={userInfo} />
    </>
  );
};

export default ProfilePage;
