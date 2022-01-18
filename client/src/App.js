import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SignupPage from "./pages/SignupPage/SignupPage";
import FirstNationPage from "./pages/FirstNationPage/FirstNationPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/test" exact component={SignupPage} />
          <Route path="/first-nation" exact component={FirstNationPage} />

          <Route path="*" exact>
            <Redirect to="/" exact component={HomePage} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
