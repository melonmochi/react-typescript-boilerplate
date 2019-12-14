import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BasicLayout } from "@/layouts";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Redirect from="/" to="/welcome" /> */}
          <Route
            path="/"
            component={BasicLayout}
            routes={[{ name: "welcome", icon: "smile" }]}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
