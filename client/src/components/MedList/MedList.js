import React from 'react';
//import { Table } from 'reactstrap';
import {MedItem} from './MedItem'
import "./MedList.css";

export const MedList= ({ drugs, deleteDrug }) => {
  return (
    <div>
      <table className="table">

        <thead>
          <tr>
            <th scope="col">List</th>
            <th scope="col">Drug Name</th>
            <th scope="col">Active Substance</th>
            <th scope="col">Dosage</th>
            <th scope="col">Frequency</th>
            <th scope="col">Notes</th>
            <th scope="col"></th> 
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row">1</th>
            <td>Tylenol</td>
            <td>Acetaminophen</td>
            <td>20mg</td>
            <td>1 per day</td>
            <td>good stuff</td>
          </tr> */}
         
            {drugs.map((drug, index) => (
              <MedItem {...drug} index={index + 1} deleteDrug={deleteDrug}/>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedList;