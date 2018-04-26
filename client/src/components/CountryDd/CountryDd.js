// import React from "react";
// import "./CountryDd.css";

// *********** trying this button stuff ************

import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./CountryDd.css";

class CountryDd extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Country Selection
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem header>Header</DropdownItem> */}
          <DropdownItem>USA</DropdownItem>
          <DropdownItem>Europe</DropdownItem>
          <DropdownItem disabled>Africa</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default CountryDd;