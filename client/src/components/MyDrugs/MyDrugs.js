
import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";

import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../SearchBar";
// import { Input, FormBtn } from "../Form";
import CountryDd from "../CountryDd";
import MedList from "../MedList";


class MyDrugs extends Component {
  state = {
    drugs: [],
    drug: "",
    active_ingredient: "",
    dosage: "",
    deleted: false,
    results: [],
    saved: [], 
    search : "morphine"

  };      






  

   searchAPI = () => {
    const search = this.state.search
    const query = "?search=" + search
    console.log("query: " + query);

    API.searchDrug(query)
      .then(res => 
        {
          console.log( res.data.results[0]);
          this.setState({
            results : res.data.results[0].openfda.generic_name
          })
          let drugData = res.data.results[0].purpose
         

      
        })
      
      .catch(err => console.log(err));
  };

  handleSearchSubmit = event => {
        this.searchAPI();
    
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

     return <Container fluid>
         <Row>
           <Col size="md-12">
           <Jumbotron>
             <h1> HELLO WORLD!</h1>
           </Jumbotron>
           </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <CountryDd></CountryDd>
              <MedList></MedList>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
           <h1>Let's search my drugs</h1>
          </Col>

          </Row>

          <Row>
            <Col size="md-4">

           <form>
             <Input value={this.state.title} onChange={this.handleInputChange} name="search" placeholder="Search Prescription (required)" />
             <Input value={this.state.author} onChange={this.handleInputChange} name="active-ingredient" placeholder="Active Ingredient (required)" />
             {/* <TextArea value={this.state.synopsis} onChange={this.handleInputChange} name="synopsis" placeholder="Synopsis (Optional)" /> */}
             <FormBtn enabled={!(this.state.author && this.state.title)} onClick={this.handleFormSubmit}>
               Submit Prescription
             </FormBtn>
           </form>
           </Col>
           </Row>

           <Row>
           <div>
             {this.state.drugs.length ? <List>
                 {this.state.drugs.map(drug => <ListItem key={drug._id}>
                     <Link to={"/drugs/" + drug._id}>
                       <strong>
                         {drug.drug} === {drug.active_ingredient}
                       </strong>
                     </Link>
                     <DeleteBtn onClick={() => this.deleteDrug(drug._id)} />
                   </ListItem>)}
               </List> : <h3>No Results to Display</h3>}
           </div>
           
         </Row>
         <Row>
          <div>
          <p>{this.state.results}</p>
          <button onClick={() => this.searchAPI()}> API Call  </button>
          
        </div>
        </Row>
       </Container>
     };
  } 

export default MyDrugs;