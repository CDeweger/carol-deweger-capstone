import React, { Component } from "react";
import axios from "axios";
import AllOrganizationsCard from "../../components/AllOrganizationsCard/AllOrganizationsCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Redirect } from "react-router-dom";
//import "./FirstNationPage.scss";

const API_URL = process.env.REACT_APP_API_URL;

class AllOrganizations extends Component {
  state = {
    allOrganizations: [],
    allOrganizationsList: null,
    targetOrganizations: null,
  };

  getAllOrganizationsList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        this.setState({
          allOrganizations: res.data,
          allOrganizationsList: res.data,
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getAllOrganizationsList();
  }

  componentDidUpdate(prevProps) {
    if (!this.props.location.state) return;
    if (this.props.location.state.id === prevProps.location.state.id) return;

    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        this.setState({
          allOrganizations: res.data,
          allOrganizationsList: res.data,
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  }

  handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const results = this.state.allOrganizationsList.filter((organization) => {
      if (
        organization.program_type.toLowerCase().includes(query) ||
        organization.program_name.toLowerCase().includes(query) ||
        organization.location.toLowerCase().includes(query) ||
        organization.description.toLowerCase().includes(query)
      )
        return organization;
    });

    this.setState({ targetOrganizations: results });
  };

  handleSearchServer = (e) => {
    const query = e.target.value.toLowerCase();
    this.props.history.push({ search: `search=${query}` });

    axios
      .get(`${API_URL}organization/?search=${query}`)
      .then((res) => {
        this.setState({
          allOrganizations: res.data,
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  render() {
    // console.log(this.state.allOrganizations);
    //console.log(this.props);

    if (!this.state.allOrganizations) {
      return null;
    }

    return (
      <div className="FirstNationPage">
        <h1 className="FirstNationPage__heading">Non-Profit Organizations</h1>
        <SearchBar
          placeholder="Search for donations, organizations and locations..."
          handleSearch={this.handleSearchServer}
        />
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
