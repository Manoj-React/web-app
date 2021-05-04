import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../views/pages/landing/LandingPage";
import Units from "../views/pages/landing/css/units/Unit.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Units" component={Units} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
