import React, { Component } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const loginURL = `${API_URL}login`;

class LoginPage extends Component {
  state = {
    isLoggedIn: false,
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
        });

        sessionStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoginError: true, errorMessage: err });
      });
  };

  renderLogin = () => {
    <div className="LoginPage">
      <h1>Login</h1>
      {/* {isLoginError && <label style={{ color: "red" }}>{errorMessage}</label>} */}
      {/* <form ref={(form) => (this.loginForm = form)} onSubmit={this.login}> */}
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
      </form>
    </div>;
  };

  render() {
    const { isLoggedIn } = this.state;
    if (!isLoggedIn) return this.renderLogin;

    return <div>Hello</div>;
  }
}

export default LoginPage;
