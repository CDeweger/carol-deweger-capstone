import React, { Component } from "react";
import axios from "axios";
import FeaturedNPO from "../../components/FeaturedNPO/FeaturedNPO";
import NPOCategory from "../../components/NPOCategory/NPOCategory";

const API_URL = process.env.REACT_APP_API_URL;

class HomePage extends Component {
  state = {
    shelterList: null,
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

  getFoodProgramList = () => {
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
    this.getFoodProgramList();
  }

  render() {
    if (!this.state.shelterList) {
      return null;
    }
    // console.log(this.state.shelterList);
    // console.log(this.state.foodProgramList);

    return (
      <div>
        <FeaturedNPO shelterList={this.state.shelterList} />
        <NPOCategory />
      </div>
    );
  }
}

export default HomePage;
