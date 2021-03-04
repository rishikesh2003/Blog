import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Subscribe from "./components/Subscribe";
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/subscribe"} component={Subscribe} />
      </Switch>
    </Router>
  );
}

export default App;
