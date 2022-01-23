import React, { Component } from "react";
import axios from "axios";
import ShelterCard from "../../components/ShelterCard/ShelterCard";
import "./ShelterPage.scss";

const API_URL = process.env.REACT_APP_API_URL;

class ShelterPage extends Component {
  state = {
    shelterList: [],
  };

  getshelterList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        this.setState({
          shelterList: res.data.filter(
            (type) => type.program_type === "Homeless Shelter"
          ),
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getshelterList();
  }

  render() {
    console.log(this.state.shelterList);

    if (!this.state.shelterList) {
      return null;
    }

    return (
      <div className="FirstNationPage">
        <h1 className="FirstNationPage__heading">Homeless Shelter </h1>
        {this.state.shelterList.map((shelter) => {
          return <ShelterCard key={shelter.id} shelterList={shelter} />;
        })}
      </div>
    );
  }
}

export default ShelterPage;
