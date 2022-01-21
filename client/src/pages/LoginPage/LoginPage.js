import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfilePage from "../ProfilePage/ProfilePage";

const API_URL = process.env.REACT_APP_API_URL;
const loginURL = `${API_URL}login`;

class LoginPage extends Component {
  state = {
    isLoggedIn: false,
    username: null,
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

        this.setState({
          isLoggedIn: true,
          username: e.target.username.value,
        });

        sessionStorage.setItem("token", response.data.token);
        this.props.history.push("/profile");
      })

      .catch((err) => {
        console.log(err);
        // this.setState({ isLoginError: true, errorMessage: err });
      });

    this.getUserinfo(this.state.username);
  };

  getUserinfo = (username) => {
    axios
      .get(`${API_URL}login/${username}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((_err) => {
        console.log("err");
      });
  };

  renderLogin = () => {
    return (
      <div className="LoginPage">
        <h1>Login</h1>
        <form onSubmit={this.login}>
          <div className="form-group">
            Username: <input type="text" name="username" />
          </div>
          <div className="form-group">
            Password: <input type="password" name="password" />
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <Link to={"/signup"}>Sign Up</Link>
        </form>
      </div>
    );
  };

  render() {
    const { isLoggedIn } = this.state;
    if (!isLoggedIn) return this.renderLogin();

    return null;
  }
}

export default LoginPage;
