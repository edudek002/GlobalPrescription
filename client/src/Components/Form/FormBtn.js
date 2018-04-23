import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "center", marginBottom: 10 }} className="btn btn-lg btn-dark">
    {props.children}
  </button>
);