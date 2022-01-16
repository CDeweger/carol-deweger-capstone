import React, { Component } from "react";
import axios from "axios";
import FeaturedNPG from "../../components/FeaturedNPG/FeaturedNPG";

const API_URL = process.env.REACT_APP_API_URL;

class HomePage extends Component {
  state = {
    shelterList: [],
  };
  getShelterList = () => {
    axios
      .get(`${API_URL}shelter`)
      .then((res) => {
        this.setState({
          shelterList: res.data,
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getShelterList();
  }

  render() {
    console.log(this.state.shelterList);

    return (
      <div>
        <h1>This is the homepage</h1>
        <FeaturedNPG shelterList={this.state.shelterList} />
      </div>
    );
  }
}

export default HomePage;
