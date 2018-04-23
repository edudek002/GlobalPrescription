import React from "react";
import "./jumbotron.css";

// const Jumbotron = ({ children }) => (
//   <div
//     style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//     className="jumbotron"
//   >
//     {children}
//   </div>
// );

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">GLOBAL PRESCRIPTION</h1>
      <p className="lead">GLOBAL PRESCRIPTION.</p>
    </div>
  </div>
);

export default Jumbotron;
