import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <form className="Signup-Form">
        <label>E-mail/Account</label>
        <input type="email" name="email" />
        <label>Organization Name</label>
        <input type="text" name="NPOName" />
        <label>Location</label>
        <input type="text" name="location" />
        <label>Phone Number</label>
        <input tpye="tel" name="tel" />
        <label>Password</label>
        <input type="password" name="password" />
        <label>Confrim Password</label>
        <input type="password" name="confrimPassword" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
