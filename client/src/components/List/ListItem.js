import React from "react";

export const ListItem = props => (
  <li className="list-group-item" id="drugName">
    {props.children}
  </li>
);