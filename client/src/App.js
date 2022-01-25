import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditOrganization from "./components/EditOrganization/EditOrganization";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import FirstNationPage from "./pages/FirstNationPage/FirstNationPage";
import ShelterPage from "./pages/ShelterPage/ShelterPage";
import FoodProgramPage from "./pages/FoodProgramPage/FoodProgramPage";
import AllOrganizations from "./pages/AllOrganizations/AllOrganizations";
import DetailPage from "./pages/DetailPage/DetailPage";

const App = () => {
  const isLoggedIn = sessionStorage.getItem("token");
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/profile/:id/edit" exact component={EditOrganization} />

          <Route path="/test" exact component={AllOrganizations} />

          <Route
            path="/login"
            exact
            component={!isLoggedIn ? LoginPage : ProfilePage}
          />
          <Route path="/logout" exact component={LogoutPage} />
          <Route
            path="/organization/first-nation"
            exact
            component={FirstNationPage}
          />
          <Route
            path="/organization/homeless-shelter"
            exact
            component={ShelterPage}
          />
          <Route
            path="/organization/food-program"
            exact
            component={FoodProgramPage}
          />

          <Route path="/organization/first-nation/:id" component={DetailPage} />
          <Route
            path="/organization/homeless-shelter/:id"
            component={DetailPage}
          />
          <Route path="/organization/food-program/:id" component={DetailPage} />

          <Route path="/organization/:id" exact component={DetailPage} />
          {/* <Route path="*" exact>
            <Redirect to="/" exact component={HomePage} />
          </Route> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
