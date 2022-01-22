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
//import DonationPage from "./components/DonationPage/DonationPage";
//import EditDonationCard from "./components/EditDonationCard/EditDonationCard";
import DonationCard from "./components/DonationCard/DonationCard";
import EditDonationCardModal from "./components/EditDonationCardModal/EditDonationCardModal";
// import UploadImage from "./components/UploadImage/UploadImage";
import AlexSample from "./components/AlexSample/AlexSample";
import FirstNationDetailPage from "./pages/FirstNationDetailPage/FirstNationDetailPage";

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
          <Route path="/test" exact component={AlexSample} />
          <Route
            path="/login"
            exact
            component={!isLoggedIn ? LoginPage : ProfilePage}
          />
          <Route path="/logout" exact component={LogoutPage} />
          <Route path="/first-nation" exact component={FirstNationPage} />
          <Route
            path="/first-nation/:id"
            exact
            component={FirstNationDetailPage}
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
