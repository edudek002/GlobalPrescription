import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Drugs from "./components/MyDrugs";


const App = () => (

    <Router>
    <div>     
      <Switch>
        <Route exact path="/" component={Drugs} />
        <Route exact path="/drugs" component={Drugs} />
      </Switch>
    </div>
  </Router>
);

export default App;
