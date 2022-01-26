import React, { Component } from "react";
import axios from "axios";
import FirstNationCard from "../../components/FirstNationCard/FirstNationCard";
import "./FirstNationPage.scss";

const API_URL = process.env.REACT_APP_API_URL;

class FirstNationPage extends Component {
  state = {
    firstNationList: [],
  };

  getFirstNationList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        this.setState({
          firstNationList: res.data.filter(
            (type) => type.program_type === "First Nations Organization"
          ),
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getFirstNationList();
  }

  render() {
    console.log(this.state.firstNationList);

    if (!this.state.firstNationList) {
      return null;
    }

    return (
      <div className="FirstNationPage">
        <h1 className="FirstNationPage__heading">
          First Nation Non-Profit Organizations
        </h1>
        {this.state.firstNationList.map((firstNation) => {
          return (
            <FirstNationCard
              key={firstNation.id}
              firstNationList={firstNation}
            />
          );
        })}
      </div>
    );
  }
}

export default FirstNationPage;
