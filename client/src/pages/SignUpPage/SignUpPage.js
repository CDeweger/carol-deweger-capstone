import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./SignUpPage.scss";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const signupURL = `${API_URL}signup`;
const MIN_PASSWORD_LENGTH = 8;

class SignUpPage extends Component {
  state = {
    isSignedUp: false,
    isLoggedIn: false,
    isLoginError: false,
    errorMessage: "",
    username: "",
    password: "",
    confirmPassword: "",
    isFormValid: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  isPasswordValid = () => {
    if (this.state.password.length < MIN_PASSWORD_LENGTH) {
      return false;
    }

    return true;
  };

  isConfirmPasswordValid = () => {
    const { password, confirmPassword } = this.state;
    return password === confirmPassword;
  };

  isFormValid = () => {
    const { username, password, confirmPassword } = this.state;

    if (!username || !password || !confirmPassword) {
      return false;
    }

    if (!this.isPasswordValid()) {
      return false;
    }
    if (!this.isConfirmPasswordValid()) {
      return false;
    }
    return true;
  };

  signup = (e) => {
    e.preventDefault();
    axios
      .post(signupURL, {
        username: e.target.username.value,
        name: e.target.name.value,
        type: e.target.type.value,
        location: e.target.location.value,
        website: e.target.website.value,
        description: e.target.description.value,
        password: e.target.password.value,
      })
      .then((response) => {
        console.log(response);
        this.setState({
          isSignedUp: true,
          isFormValid: true,
        });
        this.props.history.push("/login");
      })
      // .catch((err) => console.log(err));
      .catch((err) => {
        if (this.isFormValid()) {
          alert("success");
        } else {
          alert("Failed to sign up, you have errors in your form");
        }
      });
  };

  renderSignUp() {
    return (
      <div className="signupPage">
        <Helmet>
          <title>Donation Hub | Sign Up</title>
        </Helmet>
        <h1 className="signupPage__heading">Sign Up</h1>
        <form className="signup-form" onSubmit={this.signup}>
          <div className="signup-form__group">
            <div className="signup-form__field">
              <label className="signup-form__label">E-mail/Username</label>
              <input
                className="signup-form__input"
                type="email"
                name="username"
              />
            </div>
            <div className="signup-form__field">
              <label className="signup-form__label">Organization Name</label>
              <input className="signup-form__input" type="text" name="name" />
            </div>
          </div>
          <div className="signup-form__group">
            {" "}
            <div className="signup-form__field">
              <label className="signup-form__label">Program Type</label>
              <select name="type" className="signup-form__input">
                <option disabled selected>
                  Please select
                </option>
                <option>Homeless Shelter</option>
                <option>Free/Low Cost Food Program</option>
                <option>First Nation</option>
              </select>
            </div>
            <div className="signup-form__field">
              <label className="signup-form__label">Location</label>
              <input
                className="signup-form__input"
                type="text"
                name="location"
              />
            </div>
          </div>
          {/* <div className="signup-form__group--website "> */}
          <div className="signup-form__field signup-form__field--website ">
            <label className="signup-form__label">Website</label>
            <input className="signup-form__input" type="text" name="website" />
          </div>
          {/* </div> */}
          <div className="signup-form__field signup-form__field--description">
            <label className="signup-form__label">Description</label>
            <textarea
              className="signup-form__input signup-form__input--description"
              type="text"
              name="description"
            />
          </div>
          <div className="signup-form__group">
            <div className="signup-form__field">
              <label className="signup-form__label">Password</label>
              <input
                className="signup-form__input"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="signup-form__field">
              <label className="signup-form__label" name="confirm-password">
                Confrim Password
              </label>
              <input
                className="signup-form__input"
                type="password"
                name="confrimPassword"
                value={this.state.confrimPassword}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="signup-form__field">
            <button className="signup-form__button">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }

  render() {
    const { isLoggedIn, isSignedUp } = this.state;

    if (!isSignedUp) return this.renderSignUp();
    return null;
  }
}

export default SignUpPage;
