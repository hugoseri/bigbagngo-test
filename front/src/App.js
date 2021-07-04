import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "components/NavBar";
import Shops from "components/Shops";
import Backoffice from "components/Backoffice";
import NoMatch from "components/NoMatch";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Shops />
        </Route>
        <Route path="/admin">
          <Backoffice />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
