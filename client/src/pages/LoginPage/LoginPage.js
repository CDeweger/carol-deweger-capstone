import React, { Component } from "react";

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        {/* login form */}
        <form>
          <label>Account Name</label>
          <input type="text" name="account" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Confrim Password</label>
          <input type="password" name="confrimPassword" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
