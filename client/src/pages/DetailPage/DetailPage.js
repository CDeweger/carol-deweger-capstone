import React, { Component } from "react";
import axios from "axios";
import "./DetailPage.scss";

const API_URL = process.env.REACT_APP_API_URL;

class DetailPage extends Component {
  state = {
    targetOrganization: null,
  };

  getTargetOrganization = (id) => {
    axios
      .get(`${API_URL}organization/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          targetOrganization: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getTargetOrganization(this.props.match.params.id);
  }

  render() {
    console.log(this.props.match.params.id);
    if (!this.state.targetOrganization) {
      return null;
    }
    console.log(this.state.targetOrganization);
    return (
      <div className="detailPage">
        <div className="detailPage__info">
          <h1 className="detailPage__heading">
            {this.state.targetOrganization.program_name}
          </h1>
          <img
            className="detailPage__image"
            src={this.state.targetOrganization.image}
          />
          <p className="detailPage__details">
            {this.state.targetOrganization.description}
          </p>
          <p>Location: {this.state.targetOrganization.location}</p>
          <p>{this.state.targetOrganization.website}</p>
        </div>
        <div>
          {this.state.targetOrganization.donations.map((donation) => {
            return (
              <div>
                <p>{donation.itemName}</p>
                <p>{donation.information}</p>
                <p>{donation.status}</p>
                <div>
                  <img src={donation.image} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DetailPage;
