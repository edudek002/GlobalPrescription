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


// ****** this part works as a drop down ***********
// class CountryDd extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Country of choice ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Choose country for conversion           
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="USA">USA</option>
//             <option value="Europe">Europe</option>
//             <option value="Africa">Africa</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

export default CountryDd;