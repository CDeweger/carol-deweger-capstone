import React, { Component } from "react";
import axios from "axios";
import AllOrganizationsCard from "../../components/AllOrganizationsCard/AllOrganizationsCard";
//import "./FirstNationPage.scss";

const API_URL = process.env.REACT_APP_API_URL;

class AllOrganizations extends Component {
  state = {
    allOrganizations: [],
  };

  getAllOrganizationsList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        this.setState({
          allOrganizations: res.data,
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getAllOrganizationsList();
  }

  render() {
    console.log(this.state.allOrganizations);

    if (!this.state.allOrganizations) {
      return null;
    }

    return (
      <div className="FirstNationPage">
        <h1 className="FirstNationPage__heading">Non-Profit Organizations</h1>
        {this.state.allOrganizations.map((organization) => {
          return (
            <AllOrganizationsCard
              key={organization.id}
              allOrganizations={organization}
            />
          );
        })}
      </div>
    );
  }
}

export default AllOrganizations;
