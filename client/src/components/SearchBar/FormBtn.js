import React from "react";
import "./FormBtn.css";

export const FormBtn = props => (
  <button {...props} style={{ float: "left", marginBottom: 30 }} className="btn btn-success submit">
    {props.children}
  </button>
);
