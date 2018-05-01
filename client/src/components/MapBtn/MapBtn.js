import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./MapBtn.css";

class MapBtn extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplesearch" id="searches" className="mr-sm-2"></Label>
          <Input type="search" name="search" id="examplesearch" placeholder="Enter location (City)" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default MapBtn;