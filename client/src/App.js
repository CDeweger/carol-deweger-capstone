import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="*" exact>
            <Redirect to="/" exact component={HomePage} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
