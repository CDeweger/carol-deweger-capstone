import React, { Component } from "react";
import axios from "axios";
import FoodProgramCard from "../../components/FoodProgramCard/FoodProgramCard";
import "./FoodProgramPage.scss";
const API_URL = process.env.REACT_APP_API_URL;

class FoodProgramPage extends Component {
  state = {
    foodProgramList: [],
  };

  getFoodProgramList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        this.setState({
          foodProgramList: res.data.filter(
            (type) => type.program_type === "Free/Low Cost Food Program"
          ),
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getFoodProgramList();
  }

  render() {
    console.log(this.state.foodProgramList);

    if (!this.state.foodProgramList) {
      return null;
    }

    return (
      <div className="FirstNationPage">
        <h1 className="FirstNationPage__heading">
          Free & Low Cost Food Program
        </h1>
        {this.state.foodProgramList.map((foodProgram) => {
          return (
            <FoodProgramCard
              key={foodProgram.id}
              foodProgramList={foodProgram}
            />
          );
        })}
      </div>
    );
  }
}

export default FoodProgramPage;
