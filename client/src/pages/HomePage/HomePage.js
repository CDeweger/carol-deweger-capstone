import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import FeaturedNPO from "../../components/FeaturedNPO/FeaturedNPO";
import NPOCategory from "../../components/NPOCategory/NPOCategory";
// import { Link } from "react-router-dom";

import About from "../../components/About/About";
import "./HomePage.scss";

const API_URL = process.env.REACT_APP_API_URL;

class HomePage extends Component {
  state = {
    organizationList: null,
  };

  getOrganizationList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        this.setState({
          organizationList: res.data,
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getOrganizationList();
  }

  render() {
    if (!this.state.organizationList) {
      return null;
    }

    return (
      <div>
        <Helmet>
          <title>Donation Hub | Home</title>
        </Helmet>
        <FeaturedNPO organizationList={this.state.organizationList} />
        <NPOCategory />
        {/* 
        <h1 className="about__heading" id="about">
          About Donation Hub
        </h1>
        <p className="about__description">
          Donation Hub is a platform to bring different non-profit organizations
          and donors together. It is a common issue that donations are not
          efficiently distributed and used. On Donation Hub, any non-profit can
          easily create posts for surplus donations or items that are needed. By
          sharing surplus donations, non-profits can efficiently share and
          distribute their resources while limiting or preventing food waste.
          Donation Hub can also help donors find what to donate and match them
          with organizations in need. I hope you will enjoy Donation Hub and
          find it useful. Happy sharing and happy donating!
        </p> */}
        <About />
      </div>
    );
  }
}

export default HomePage;
