import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import FeaturedNPO from "../../components/FeaturedNPO/FeaturedNPO";
import NPOCategory from "../../components/NPOCategory/NPOCategory";
import About from "../../components/About/About";
import "./HomePage.scss";

const API_URL = process.env.REACT_APP_API_URL;

const HomePage = () => {
  const [organizationList, setOrganizationList] = useState(null);

  const getOrganizationList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        setOrganizationList(res.data);
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    getOrganizationList();
  }, []);

  if (!organizationList) {
    return null;
  }

  return (
    <div className="homepage">
      <Helmet>
        <title>Donation Hub | Home</title>
      </Helmet>
      <FeaturedNPO organizationList={organizationList} />
      <NPOCategory />
      <About />
    </div>
  );
};

export default HomePage;
