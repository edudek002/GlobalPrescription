import React, { Component } from "react";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../SearchBar";
import { InputMedList, TextAreaMedList, FormBtnMedList } from "../FormMedList";
import CountryDd from "../CountryDd";
import {MedList} from "../MedList";


class MyDrugs extends Component {
  state = {
    drugs: [],
    drug: "",
    active_ingredient: "",
    dosage: "",
    frequency: "",
    note: "",
    deleted: false,
    generic_name : "",
    administration : "",
    saved: [], 
    search : "",
    apiSearch : ""
  }; 
  
  componentDidMount() {
    this.loadDrugs();
  }

  loadDrugs = () => {
    API.getDrugs()
      .then(res => 
      
        this.setState({drugs : res.data, drug : "", active_ingredient : "", dosage : ""})
      )
      .catch(err => console.log("Error from loadDrugs ", err));
  };
  searchAPI = () => {
    let search = this.state.search
    let newSearch = this.state.apiSearch
    console.log(newSearch);
    
    // FIRST SEARCH OUR DATABASE
    API.getDrugs()
      .then(res => {
        for (let i = 0; i <res.data.length; i++) {
          if (search === res.data[i].drug) {
            console.log(res.data[i].active_ingredient)
            this.setState({
              apiSearch : res.data[i].active_ingredient
            })
            newSearch = res.data[i].active_ingredient
            
            //THEN OPEN FDA API CALLL
            const query = "?search=" + newSearch
            console.log("query: " + query);
            API.searchDrug(query)
              .then(res => 
                {
                  console.log( res.data.results[0]);
                  this.setState({
                    generic_name : res.data.results[0].openfda.generic_name,
                    administration : res.data.results[0].dosage_and_administration
                  })
                })
              .catch(err => console.log(err));
            }
          }
      });    
  };

  handleSearchSubmit = event => {
        this.searchAPI();  
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

  handleFormSubmit = event => {
    if (this.state.drug) {
      API.saveDrug({
        drug: this.state.drug,
        active_ingredient: this.state.active_ingredient,
        dosage: this.state.dosage,
        frequency: this.state.frequency,
        note: this.state.note
      })
        .then(res => this.loadDrugs())
        .catch(err => console.log(err));
    }
  };

  handleDrugSubmit = event => {
    this.searchAPI();
    }

  handleFormSubmit = event => {
    if (this.state.drug) {
      API.saveDrug({
        drug: this.state.drug,
        active_ingredient: this.state.active_ingredient,
        dosage: this.state.dosage,
        frequency: this.state.frequency,
        note: this.state.note
      })
        .then(res => this.loadDrugs())
        .catch(err => console.log(err));
    }
  };
    
  render() {
      return <Container fluid>

        {/* Main header of app */}
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1> HELLO WORLD!</h1>
            </Jumbotron>
          </Col>
        </Row>

        {/* User enter point for serch */}
        <Row>
          <Col size="md-5">
            <div>
              <FormBtn onClick={() => this.handleDrugSubmit()}> Search For This Drug  </FormBtn>
              <Input value = {this.state.search} onChange={this.handleInputChange} name="search" placeholder="Search Your Drug" />
              <p>{this.state.generic_name}</p>
              <p>{this.state.administration}</p>                   
            </div>
          </Col>

          {/* Choose Country to search */}
          <Col size="md-2">
            <h2>Select Country</h2>
            <CountryDd></CountryDd>              
          </Col>

          {/* Return answer to desplay window */}
          <Col size="md-5">
            <div>
            <h2>Return your search</h2>
              <Input value = {this.state.search} onChange={this.handleInputChange} name="search" placeholder="Search return" />
              <p>{this.state.generic_name}</p>
              <p>{this.state.administration}</p>                   
            </div>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        
        <Row>
          <Col size="md-3">
            <h2>Save Medication List</h2>
            <form>
  
              <InputMedList
                value={this.state.drug}
                onChange={this.handleInputChange}
                name="drug"
                placeholder="Name of your medicine (required)"
              />
              <InputMedList
                value={this.state.active_ingredient}
                onChange={this.handleInputChange}
                name="active_ingredient"
                placeholder="Active Ingredient (required)"
              />
              <InputMedList
                value={this.state.dosage}
                onChange={this.handleInputChange}
                name="dosage"
                placeholder="Dosage"
              />
              <InputMedList
                value={this.state.frequency}
                onChange={this.handleInputChange}
                name="frequency"
                placeholder="Frequency"
              />
              <TextAreaMedList
              value={this.state.note}
              onChange={this.handleInputChange}
              name="note"
              placeholder="Note"
            />
              
              <FormBtnMedList
                disabled={!(this.state.drug)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtnMedList>
            </form>
          </Col>

          {/* List of users medications  */}
          <Col size="md-9">
            {this.state.drugs.length ? (
              <MedList drugs={this.state.drugs} deleteDrug={this.deleteDrug}>
                
              </MedList>
            ) : <h4>No Results to Display</h4>}
            
          </Col>
        </Row>

        <Row>
          <Col size="md-6 sm-12">
            
            <h2>Medicine I Take</h2>
            
            {this.state.drugs.length ? (
              <List>
                {this.state.drugs.map(drug => (
                  <ListItem key={drug._id}>
                    <Link to={"/drugs/" + drug._id}>
                      <strong>
                      {drug.drug} take {drug.dosage} {drug.frequency}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteDrug(drug._id)} />
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Result to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    };
  } 
export default MyDrugs;