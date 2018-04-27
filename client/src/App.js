import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Drugs from "./components/MyDrugs";
import Login from "./components/Login";


import Drugs from "./components/MyDrugs";





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
