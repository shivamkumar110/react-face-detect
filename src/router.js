import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import LoginPage from "./containers/Login/LoginPage";
import { Provider } from "react-redux";

const AppRouter = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default AppRouter;
