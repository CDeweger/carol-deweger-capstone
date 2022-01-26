import React, { Component } from "react";
import axios from "axios";
import "./DetailPage.scss";
import linkIcon from "../../assets/icons/external-link-icon.png";

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
    // console.log(this.props.match.params.id);
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
          <div className="detailPage__location-website">
            <p className="detailPage__location-website--location">
              <b>Location:</b> {this.state.targetOrganization.location}
            </p>
            <a
              className="detailPage__location-website--website"
              href={this.state.targetOrganization.website}
            >
              Website
              <img src={linkIcon} className="detailPage__external-link" />
            </a>
          </div>
          <p className="detailPage__details">
            {this.state.targetOrganization.description}
          </p>
        </div>
        <div className="detailPage-card">
          {this.state.targetOrganization.donations.map((donation) => {
            return (
              <div className="detailPage-card__group">
                <div className="detailPage-card__image-box">
                  <img
                    className="detailPage-card__image"
                    src={donation.image}
                  />
                </div>
                <div className="detailPage-card__info-body">
                  {/* <div className="detailPage-card__date-item"> */}
                  <h2 className="detailPage-card__item">{donation.itemName}</h2>

                  {/* </div> */}
                  <div className="detailPage-card__date-item">
                    {/* <p className="detailPage-card__status">{donation.status}</p> */}
                    {donation.status === "In Need" ? (
                      <span className="detailPage-card__status-in-need">
                        In Need
                      </span>
                    ) : (
                      <span className="detailPage-card__status-surplus">
                        Surplus
                      </span>
                    )}
                    <p className="detailPage-card__date">
                      {" "}
                      Posted date:
                      {new Date(donation.date).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="detailPage-card__info">
                    {donation.information}
                  </p>
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
