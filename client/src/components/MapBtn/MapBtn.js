import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./MapBtn.css";

class MapBtn extends React.Component {
  render() {
    return (
      <Form inline>
        <h3>Pharmacy Locations (Rx)</h3>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplesearch" className="mr-sm-2"></Label>
          <Input type="search" name="search" id="examplesearch" placeholder="Enter your location (example: 1200 Main st, Boston MA)" />
        </FormGroup>
        <Button className="mapbtn1">Submit</Button>
      </Form>
    );
  }
}

export default MapBtn;