import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BasicLayout } from "@/layouts";
import "./App.less";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={BasicLayout} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
