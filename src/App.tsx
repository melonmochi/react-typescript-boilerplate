import React, { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { BasicLayout } from "@/layouts";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/welcome" />
        <Route path=":menu?/:submenu?" component={BasicLayout} />
      </Switch>
    </Router>
  );
};

export default App;
