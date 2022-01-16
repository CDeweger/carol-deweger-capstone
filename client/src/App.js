import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/test" exact component={LoginPage} />

          <Route path="*" exact>
            <Redirect to="/" exact component={HomePage} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
