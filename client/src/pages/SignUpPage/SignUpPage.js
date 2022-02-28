import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./SignUpPage.scss";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const signupURL = `${API_URL}signup`;
const MIN_PASSWORD_LENGTH = 8;

const SignUpPage = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  //form validation
  const [signupError, setSignupError] = useState(false);
  // const [usernameError, setUsernameError] = useState(false);
  const signup = (e) => {
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
      .then((_res) => {
        setSignupError(false);
        //setPasswordError(false);
        history.push("/login");
      })
      .catch((err) => {
        setSignupError(true);
        console.log(err);
      });
  };

  const history = useHistory();

  const handleChange = (e) => {
    setPassword(e.target.value);
    setConfirmPassword(e.target.value);
  };

  const isPasswordValid = () => {
    if (password.length < MIN_PASSWORD_LENGTH) {
      return false;
    }
  };

  const isConfirmPasswordValid = () => {
    return password === confirmPassword;
  };

  const isFormValid = () => {
    // if (!username) {
    //   setUsernameError(true);
    //   return false;
    // }

    if (!isPasswordValid()) {
      setSignupError(true);
      return false;
    }

    if (!isConfirmPasswordValid()) {
      setSignupError(true);
      return false;
    }
    return true;
  };

  if (!isSignedUp) return null;

  return (
    <div className="signupPage">
      <Helmet>
        <title>Donation Hub | Sign Up</title>
      </Helmet>
      <h1 className="signupPage__heading">Sign Up</h1>
      <form className="signup-form" onSubmit={signup}>
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
              <option>First Nations</option>
            </select>
          </div>
          <div className="signup-form__field">
            <label className="signup-form__label">Location</label>
            <input className="signup-form__input" type="text" name="location" />
          </div>
        </div>
        <div className="signup-form__field signup-form__field--website ">
          <label className="signup-form__label">Website</label>
          <input className="signup-form__input" type="text" name="website" />
        </div>
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
              value={password}
              onChange={handleChange}
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
              value={confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="signup-form__field">
          <button className="signup-form__button">Sign Up</button>
        </div>
        {signupError && (
          <>
            <p className="signup-form__error">
              Please check your username password and confrim password.
            </p>
            <p className="signup-form__note">
              Password should be at least{" "}
              <span className="signup-form__note--highlight">8 characters</span>
              .
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default SignUpPage;
