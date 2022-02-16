import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import AllOrganizationsCard from "../../components/AllOrganizationsCard/AllOrganizationsCard";
import SearchBar from "../../components/SearchBar/SearchBar";
const API_URL = process.env.REACT_APP_API_URL;

const AllOrganizations = (props) => {
  const [allOrganizations, setAllOrganizations] = useState([]);
  const [allOrganizationsList, setAllOrganizationsList] = useState(null);

  const getAllOrganizationsList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        setAllOrganizations(res.data);
        setAllOrganizationsList(res.data);
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    getAllOrganizationsList();
  }, []);

  // componentDidUpdate(prevProps) {
  //   if (!this.props.location.state) return;
  //   if (this.props.location.state.id === prevProps.location.state.id) return;

  //   axios
  //     .get(`${API_URL}organization`)
  //     .then((res) => {
  //       this.setState({
  //         allOrganizations: res.data,
  //         allOrganizationsList: res.data,
  //       });
  //     })
  //     .catch((_err) => {
  //       console.log("error");
  //     });
  // }

  // handleSearch = (e) => {
  //   const query = e.target.value.toLowerCase();
  //   const results = this.state.allOrganizationsList.filter((organization) => {
  //     if (
  //       organization.program_type.toLowerCase().includes(query) ||
  //       organization.program_name.toLowerCase().includes(query) ||
  //       organization.location.toLowerCase().includes(query) ||
  //       organization.description.toLowerCase().includes(query)
  //     )
  //       return organization;
  //   });

  //   this.setState({ targetOrganizations: results });
  // };

  const handleSearchServer = (e) => {
    const query = e.target.value.toLowerCase();
    props.history.push({ search: `search=${query}` });

    axios
      .get(`${API_URL}organization/?search=${query}`)
      .then((res) => {
        setAllOrganizations(res.data);
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  if (!allOrganizations) {
    return null;
  }

  return (
    <div className="FirstNationPage">
      <Helmet>
        <title>Donation Hub | Organizations</title>
      </Helmet>
      <h1 className="FirstNationPage__heading">Non-Profit Organizations</h1>
      <SearchBar
        placeholder="Search for donations, organizations and locations..."
        handleSearch={handleSearchServer}
      />
      {allOrganizations.map((organization) => {
        return (
          <AllOrganizationsCard
            key={organization.id}
            allOrganizations={organization}
          />
        );
      })}
    </div>
  );
};

export default AllOrganizations;
