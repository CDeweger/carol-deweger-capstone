import React from "react";

const LogoutPage = () => {
  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <button onClick={logout}>Confrim logout</button>
    </div>
  );
};

export default LogoutPage;
