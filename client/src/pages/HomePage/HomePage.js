import React, { Component } from "react";
import axios from "axios";
import FeaturedNPO from "../../components/FeaturedNPO/FeaturedNPO";

const API_URL = process.env.REACT_APP_API_URL;

class HomePage extends Component {
  state = {
    shelterList: [],
    foodProgramList: [],
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

  getfoodProgramList = () => {
    axios
      .get(`${API_URL}food-program`)
      .then((res) => {
        this.setState({
          foodProgramList: res.data,
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getShelterList();
    this.getfoodProgramList();
  }

  render() {
    console.log(this.state.shelterList);
    console.log(this.state.foodProgramList);

    return (
      <div>
        <FeaturedNPO shelterList={this.state.shelterList} />
      </div>
    );
  }
}

export default HomePage;
