import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./LoginPage.scss";

const API_URL = process.env.REACT_APP_API_URL;
const loginURL = `${API_URL}login`;

class LoginPage extends Component {
  state = {
    isLoggedIn: false,
    username: null,
    password: null,
    LoginError: false,
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post(loginURL, {
        username: e.target.username.value,
        password: e.target.password.value,
      })

      .then((response) => {
        console.log(response);
        sessionStorage.setItem("token", response.data.token);

        this.setState({
          isLoggedIn: true,
          [e.target.name]: e.target.value,
        });

        //sessionStorage.setItem("token", response.data.token);
        this.props.history.push(`/profile`);
      })

      .catch((err) => {
        console.log(err);
        this.setState({
          LoginError: true,
        });
      });
  };

  renderLogin = () => {
    return (
      <div className="loginPage">
        <div className="loginPage-container">
          <h1>Login</h1>
          <form onSubmit={this.login}>
            <div className="loginPage-group">
              <label htmlFor="username">Username:</label>
              <input type="email" name="username" />
            </div>
            <div className="loginPage-group">
              <label htmlFor="password"> Password:</label>
              <input type="password" name="password" />
            </div>
            <div>
              {" "}
              {this.state.LoginError && (
                <p>Please check your username and password.</p>
              )}
            </div>
            <div className="loginPage-button">
              <button className="loginPage-button__login" type="submit">
                Login
              </button>
              <Link className="loginPage-button__signup" to={"/signup"}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  };

  render() {
    const { isLoggedIn } = this.state;
    if (!isLoggedIn)
      return (
        <>
          {" "}
          <Helmet>
            <title>Donation Hub | Login</title>
          </Helmet>
          {this.renderLogin()};
        </>
      );

    return null;
  }
}

export default LoginPage;
