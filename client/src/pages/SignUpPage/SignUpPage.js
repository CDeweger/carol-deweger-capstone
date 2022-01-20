import React, { Component } from "react";
import "./SignupPage.scss";
import axios from "axios";
import LoginPage from "../LoginPage/LoginPage";

const API_URL = process.env.REACT_APP_API_URL;
const signupURL = `${API_URL}signup`;
//const loginURL = `${API_URL}login`;

class SignUpPage extends Component {
  state = {
    isSignedUp: false,
    isLoggedIn: false,
    isLoginError: false,
    errorMessage: "",
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
        });
        this.props.history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  renderSignUp() {
    return (
      <div className="signupPage">
        <h1 className="signupPage__heading">Sign Up</h1>
        <form className="signup-form" onSubmit={this.signup}>
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
            <input className="signup-form__input" type="text" name="location" />
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label">Website</label>
            <input className="signup-form__input" type="text" name="website" />
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label">Description</label>
            <input
              className="signup-form__input"
              type="text"
              name="description"
            />
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label">Password</label>
            <input
              className="signup-form__input"
              type="password"
              name="password"
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
            />
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
    // if (!isLoggedIn) return this.renderLogin();
    // if (this.props.location.pathname === "/login") {
    //   return <LoginPage />;
    // }

    //return <div>hello from signup page</div>;
  }
}

export default SignUpPage;
