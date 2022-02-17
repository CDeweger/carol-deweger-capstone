import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import AllOrganizationsCard from "../../components/AllOrganizationsCard/AllOrganizationsCard";
import SearchBar from "../../components/SearchBar/SearchBar";
const API_URL = process.env.REACT_APP_API_URL;

const AllOrganizations = () => {
  const [allOrganizations, setAllOrganizations] = useState([]);

  const getAllOrganizationsList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        setAllOrganizations(res.data);
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    getAllOrganizationsList();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    history.push({ search: `search=${query}` });
    const infoResults = allOrganizations.filter((organization) => {
      if (
        organization.program_type.toLowerCase().includes(query) ||
        organization.program_name.toLowerCase().includes(query) ||
        organization.location.toLowerCase().includes(query) ||
        organization.description.toLowerCase().includes(query)
      )
        return organization;
    });

    const donationResults = allOrganizations.filter((organization) => {
      for (let i = 0; i < organization.donations.length; i++) {
        if (organization.donations[i].itemName.toLowerCase().includes(query)) {
          if (!infoResults.includes(organization)) return organization;
        }
      }
    });

    setAllOrganizations(infoResults.concat(donationResults));
  };

  const history = useHistory();

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
        handleSearch={handleSearch}
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
