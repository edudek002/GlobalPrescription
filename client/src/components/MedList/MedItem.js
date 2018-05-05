import React from "react";
import DeleteBtn from "../DeleteBtn";

export const MedItem = props => (


  <tr>
  <th scope="row">{props.index}</th>
  <td>{props.drug}</td>
  <td>{props.active_ingredient}</td>
  <td>{props.dosage}</td>
  <td>{props.frequency}</td>
  <td>{props.note}</td> 
  <td><DeleteBtn id={props.drug} onClick={() => props.deleteDrug(props._id)}/></td>
  </tr>
 
);