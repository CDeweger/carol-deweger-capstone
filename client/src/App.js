import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import FirstNationPage from "./pages/FirstNationPage/FirstNationPage";
import DonationPage from "./components/DonationPage/DonationPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/test" exact component={DonationPage} />

          <Route path="/first-nation" exact component={FirstNationPage} />

          {/* <Route path="*" exact>
            <Redirect to="/" exact component={HomePage} />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
