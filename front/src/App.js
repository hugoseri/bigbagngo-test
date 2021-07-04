import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

import NavBar from "components/NavBar";
import Shops from "components/Shops";
import Backoffice from "components/Backoffice";
import NoMatch from "components/NoMatch";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
