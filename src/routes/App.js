import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../views/pages/landing/LandingPage";
import Units from "../views/pages/landing/css/units/Unit";
import Heading from "../views/pages/css/heading/Heading";
import MiniDrawer from "../views/common/sideBar/SideBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Units" component={Units} />
          <Route exact path="/Heading" component={Heading} />
          <Route exact path="/MiniDrawer" component={MiniDrawer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
