import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import FeaturedNPG from "./components/FeaturedNPG/FeaturedNPG";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/test" exact component={FeaturedNPG} />

          <Route path="*" exact>
            <Redirect to="/" exact component={HomePage} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
