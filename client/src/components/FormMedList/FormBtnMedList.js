import React from "react";

export const FormBtnMedList = props => (
  <button {...props} style={{ float: "center", marginBottom: 10 }} className="btn btn-lg btn-dark">
    {props.children}
  </button>
);