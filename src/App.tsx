import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppLayout } from "@/components";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={AppLayout} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
