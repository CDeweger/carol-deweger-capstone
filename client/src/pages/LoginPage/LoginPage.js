import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./LoginPage.scss";

const API_URL = process.env.REACT_APP_API_URL;
const loginURL = `${API_URL}login`;

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [LoginError, setLoginError] = useState(false);

  const login = (e) => {
    e.preventDefault();
    axios
      .post(loginURL, {
        username: e.target.username.value,
        password: e.target.password.value,
      })

      .then((res) => {
        console.log(res);
        sessionStorage.setItem("token", res.data.token);

        setIsLoggedIn(true);
        setUsername(e.target.value);
        setPassword(e.target.value);

        history.push(`/profile`);
      })

      .catch((err) => {
        console.log(err);

        setLoginError(true);
      });
  };

  const history = useHistory();

  return (
    <>
      {" "}
      <Helmet>
        <title>Donation Hub | Login</title>
      </Helmet>
      <div className="loginPage">
        <div className="loginPage-container">
          <h1>Login</h1>
          <form onSubmit={login}>
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
              {LoginError && <p>Please check your username and password.</p>}
            </div>
            <div className="loginPage-button">
              <button className="loginPage-button__login" type="submit">
                Login
              </button>
              <Link className="loginPage-button__signup" to={"/signup"}>
                Sign Up
                <span className="loginPage-button__signup--msg">
                  Don't have an account yet?
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
