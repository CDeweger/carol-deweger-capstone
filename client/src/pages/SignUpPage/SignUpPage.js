import React from "react";
import "./SignupPage.scss";

const API_URL = process.env.REACT_APP_API_URL;
const signupURL = `${API_URL}signup`;

const SignupPage = () => {
  return (
    <div>
      <form className="signup-form">
        <div className="signup-form__field">
          <label>E-mail/Account</label>
          <input type="email" name="email" />
        </div>
        <div className="signup-form__field">
          <label>Organization Name</label>
          <input type="text" name="NPOName" />
        </div>
        <div className="signup-form__field">
          <label>Program Type</label>
          <select>
            <option disabled>Please select</option>
            <option>Homeless Shelter</option>
            <option>Food Bank and Soup Kitchen</option>
            <option>First Nation</option>
          </select>
        </div>
        <div className="signup-form__field">
          <label>Location</label>
          <input type="text" name="location" />
        </div>
        <div className="signup-form__field">
          <label>Website</label>
          <input type="text" name="website" />
        </div>
        <div className="signup-form__field">
          <label>Description</label>
          <input type="text" name="description" />
        </div>
        <div className="signup-form__field">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div className="signup-form__field">
          <label>Confrim Password</label>
          <input type="password" name="confrimPassword" />
        </div>
        <div className="signup-form__field">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
