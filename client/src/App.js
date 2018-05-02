import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Drugs from "./components/MyDrugs";
import Login from "./components/Login";
import Search from "./components/GlobalSearchBar";
import UserMedList from "./components/UserMedList";
import UserMap from "./components/UserMap";

const App = () => (
    <Router>
    <div>     
      <Switch>
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/drugs" component={Drugs} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/medlist" component={UserMedList} />
        <Route exact path="/map" component={UserMap} />
      </Switch>
    </div>
  </Router>
);
export default App;