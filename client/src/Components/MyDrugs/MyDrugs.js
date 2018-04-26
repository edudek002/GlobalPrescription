
import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../List";
//import { Input, TextArea, FormBtn } from "../../components/Form";
//import { Input, FormBtn } from "../Form";

class MyDrugs extends Component {
  state = {
    drugs: [],
    drug: "",
    active_ingredient: "",
    dosage: "",
    deleted: false,
    results: [],
    saved: []  
  };      



  // GET request for remote image
  /*axios({
      method:'get',
      url: BASEURL,
    })
      .then(function(response) {
      console.log(response.data.results[0].active_ingredient);
    });*/


  

  handleSearchSubmit = event => {
        this.displayUser();
    
  };

  componentDidMount() {
    this.loadDrugs();
  }

  loadDrugs = () => {
    API.getDrugs()
      .then(res =>
        this.setState({ drugs: res.data, drug: "", active_ingredient: "",
        dosage: ""})

      )
      .catch(err => console.log("Error from loadDrugs ", err));
  };

  showUser = () => {
    API.displayUser()
      .then(console.log("working in here as well")

      )
      .catch(err => console.log("Error from loadDrugs ", err));
  };
// showUser();

  deleteDrug = id => {
    API.deleteDrug(id)
      .then(res => this.loadDrugs())
      .catch(err => console.log(err));
  };



  handleInputChange = event => {
    const name = event.target.name;
    let value  = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (

      <div>

        <h1>Let's search my drugs</h1>
        

        <div>

          {this.state.drugs.length ? (
            <List>
              {this.state.drugs.map(drug => (
                <ListItem key={drug._id}>
                  <Link to={"/drugs/" + drug._id}>
                    <strong>
                      {drug.drug} === {drug.active_ingredient}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => this.showUser()} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>

      </div>
    )

  }

  
}

export default MyDrugs;