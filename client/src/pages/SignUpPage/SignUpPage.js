import React, { Component } from "react";
import "./SignupPage.scss";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const signupURL = `${API_URL}signup`;

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
        name: e.target.name.value,
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        console.log(response);
        this.setState({
          isSignedUp: true,
        });
      })
      .catch((err) => console.log(err));
  };

  renderSignUp() {
    return (
      <div className="signupPage">
        <h1 className="signupPage__heading">Sign Up</h1>
        <form className="signup-form" onSubmit={this.signup}>
          <div className="signup-form__field">
            <label className="signup-form__label">E-mail/Account</label>
            <input className="signup-form__input" type="email" name="email" />
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label">Organization Name</label>
            <input className="signup-form__input" type="text" name="NPOName" />
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label">Program Type</label>
            <select className="signup-form__input">
              <option disabled>Please select</option>
              <option>Homeless Shelter</option>
              <option>Food Bank and Soup Kitchen</option>
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
            <label className="signup-form__label">Confrim Password</label>
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
    if (!isLoggedIn) return this.renderLogin();

    return <div>hello from signup page</div>;
  }
}

export default SignUpPage;
