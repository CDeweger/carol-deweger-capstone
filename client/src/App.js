import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditOrganization from "./components/EditOrganization/EditOrganization";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import FirstNationPage from "./pages/FirstNationPage/FirstNationPage";
import ShelterPage from "./pages/ShelterPage/ShelterPage";
import FoodProgramPage from "./pages/FoodProgramPage/FoodProgramPage";
import AlexSample from "./components/AlexSample/AlexSample";
import OrganizationDetailPage from "./pages/OrganizationDetailPage/OrganizationDetailPage";
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
          {/* <Route path="/:id/edit" exact component={EditOrganization} /> */}

          <Route path="/test" exact component={AlexSample} />
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

          <Route
            path="/organization/:id"
            exact
            component={OrganizationDetailPage}
          />
          {/* <Route path="*" exact>
            <Redirect to="/" exact component={HomePage} />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
