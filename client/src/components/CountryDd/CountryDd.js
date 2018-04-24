import React from "react";
import "./CountryDd.css";


class CountryDd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Country of choice ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose country for conversion           
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="USA">USA</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CountryDd;