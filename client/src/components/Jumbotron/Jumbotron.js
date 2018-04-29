import React from "react";
import "./jumbotron.css";

const Jumbotron = (props) => (
  // <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">GLOBAL PRESCRIPTION</h1>
      <p className="lead">Prescptions on the Go!.</p>
      <h2>Welcome : {props.activeUser} </h2>
    </div>
  // </div>
);

export default Jumbotron;
