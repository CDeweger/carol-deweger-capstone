import React from "react";
import { Helmet } from "react-helmet";
import "./LogoutPage.scss";

const LogoutPage = (props) => {
  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  console.log(props);

  return (
    <div className="logout">
      <Helmet>
        <title>Donation Hub | Logout</title>
      </Helmet>
      <h1>See you again soon!</h1>
      <button className="button logout-button" onClick={logout}>
        Confrim logout
      </button>
    </div>
  );
};

export default LogoutPage;
