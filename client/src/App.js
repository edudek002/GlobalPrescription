import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Drugs from "./Components/MyDrugs";
import Login from "./Components/Login";

const App = () => (

    <Router>
    <div>     
      <Switch>
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/drugs" component={Drugs} />
      </Switch>
    </div>
  </Router>
);

export default App;
