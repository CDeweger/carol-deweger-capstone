import React, { Component } from "react";

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        {/* signup form */}
        <form className="Signup-Form">
          <label>Account Name</label>
          <input type="text" name="account" />
          <label>Organization Name</label>
          <input type="text" name="NPOName" />
          <label>Location</label>
          <input type="text" name="location" />
          <label>Phone Number</label>
          <input tpye="tel" name="tel" />
          <label>E-mail</label>
          <input type="email" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Confrim Password</label>
          <input type="password" name="confrimPassword" />
          <button>Sign Up</button>
        </form>

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
