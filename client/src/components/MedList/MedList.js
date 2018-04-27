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








// class MedList extends React.Component {

//     render() {
//       return (
//         <Table hover>
//           <thead>
//             <tr>
//               <th>List</th>
//               <th>Drug Name</th>
//               <th>Active Substance</th>
//               <th>Dosage</th>
//               <th>Frequency</th>
//               <th>Notes</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th scope="row">1</th>
//               <td>Tylenol</td>
//               <td>Acetaminophen</td>
//               <td>20mg</td>
//               <td>1 per day</td>
//               <td>good stuff</td>
//             </tr>
//             <tr>
//               <th scope="row">2</th>
//               <td>children.drug</td>
//               <td>children.active_ingredient</td>
//               <td>children.dosage</td>
//               <td>children.frequency</td>
//               <td>children.note</td>
//             </tr> 
//             <tr>
//               <th scope="row">2</th>
//               <td>Tylenol extra strength</td>
//               <td>Acetaminophen</td>
//               <td>50mg</td>
//               <td>1 per day</td>
//               <td>Really good stuff</td>
//             </tr>
//             <tr>
//               <th scope="row">3</th>
//               <td>Tylenol PM</td>
//               <td>Acetaminophen</td>
//               <td>30mg</td>
//               <td>1 per day</td>
//               <td>good stuff for bed time</td>
//             </tr>
//           </tbody>
//         </Table>
//       );
//     }
//   }


export default MedList;