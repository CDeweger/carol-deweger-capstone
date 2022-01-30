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
      <h1>Carol DeWeger</h1>
      <h1>caroljydeweger@gmail.com</h1>
      <h2 className="see-you">See you again soon!</h2>
      <button className="button logout-button" onClick={logout}>
        Confrim logout
      </button>
    </div>
  );
};

export default LogoutPage;
