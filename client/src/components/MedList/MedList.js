import React from 'react';
import { Table } from 'reactstrap';
import "./MedList.css";

class MedList extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>List</th>
            <th>Drug Name</th>
            <th>Active Substance</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Tylenol</td>
            <td>Acetaminophen</td>
            <td>20mg</td>
            <td>1 per day</td>
            <td>good stuff</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Tylenol extra strength</td>
            <td>Acetaminophen</td>
            <td>50mg</td>
            <td>1 per day</td>
            <td>Really good stuff</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Tylenol PM</td>
            <td>Acetaminophen</td>
            <td>30mg</td>
            <td>1 per day</td>
            <td>good stuff for bed time</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default MedList;