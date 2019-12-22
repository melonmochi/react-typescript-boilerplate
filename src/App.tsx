import React, { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "@/services/GraphQL";
import { BasicLayout } from "@/layouts";

const App: FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/welcome" />
          <Route path=":menu?/:submenu?" component={BasicLayout} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
