import React, { Component } from "react";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn";
import SimpleMap from "../Map";
import Jumbotron from "../Jumbotron";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../SearchBar";
import { InputMedList, TextAreaMedList, FormBtnMedList } from "../FormMedList";
import CountryDd from "../CountryDd";
import {MedList} from "../MedList";
import MapBtn from "../MapBtn";
import "./MyDrugs.css";



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
    country : "",
    search : "",
    showMore : {
      color : 'black',
      display : 'none'
    },
    showLess : {
      display : 'none',
      color : 'black'
    },
    largeResultsShow : {
      height : '245px',
      overflow : 'hidden'
    },
    apiSearch : "",
    activeUser : ""
    
  }; 
  
  componentDidMount() {
    this.loadDrugs();
    this.displayUser();
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
    

    
    // FIRST SEARCH OUR DATABASE
    API.getDrugs()
      .then(res => {
        for (let i = 0; i <res.data.length; i++) {
          if (search === res.data[i].drug) {
            console.log(res.data[i].active_ingredient)
            this.setState({
              apiSearch : res.data[i].active_ingredient,
              country : res.data[i].country
            })
            console.log(this.state.country);
            newSearch = res.data[i].active_ingredient
            let searchReplaced = newSearch.split(' ').join('+');
            console.log(searchReplaced);
            
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

  displayUser = () => {
    const x = localStorage.getItem("User");
    console.log(x);
    this.setState({
      activeUser : x
    });
  }

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
    this.setState({
      showMore : {
        display : 'block'
      },
      largeResultsShow : {
        display : 'block'
      }
    })

  }


    handleShowMoreButton = event => {
      this.setState({
        largeResultsShow : {
          height : '100%',
          display : 'block'
        },
        showLess : {
          display : 'block'
        },
        showMore : {
          display : 'none'
        }
      })
    }

      handleShowLessButton = event => {
        this.setState({
          showMore : {
            color: 'black',
            display : 'block'
          },
          largeResultsShow : {
            height : '245px',
            overflow : 'hidden',
            display: 'block'
          },
          showLess : {
            display : 'none'
          }
          
        })
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
      return (
        <div>
          <Col size="md-12">
          <Row>
          <Nav></Nav>
          </Row>
          </Col>
          
        {/* <Container fluid> */}

        {/* Main header of app */}
        <div className="jumbotron">
        <Row>
          <Col size="md-12">
            <Jumbotron
              activeUser = {this.state.activeUser}
            />
          </Col>
        </Row>
        </div>

        {/* User enter point for search */}
        <div className="container">
        <Row>
          <Col size="md-8">
              <h2>Search for Drug</h2>
              <Input value = {this.state.search} onChange={this.handleInputChange} name="search" placeholder="Search Your Drug" />                
          </Col>
        </Row>
        <Row>

          {/* Choose Country to search */}
          <Col size="md-3">
            <h2></h2>
            <FormBtn onClick={() => this.handleDrugSubmit()}> Search For This Drug  </FormBtn>              
          </Col>

          {/* Return answer to desplay window */}
          
        </Row>
        <Row>
          <Col size="md-12">
            
            <div className="largeResults" style={this.state.largeResultsShow}>
            <p className="DrugLabel">FDA Generic Name: <span id="generic">{this.state.generic_name}</span></p> 
            <p className="DrugLocation">Region This Drug Can Be Found: <span id="countryLoc">{this.state.country}</span></p>
            <p className="DrugInfo">{this.state.administration}</p>


              </div> 

              <button className="showMore" style={this.state.showMore} onClick= {() => this.handleShowMoreButton()}>Show More</button>
              <button className="showLess" style={this.state.showLess} onClick = {() => this.handleShowLessButton()}>Show Less</button>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        
        <div className="medlist">
        <Row>
          {/* <div className="inputmed"> */}
          <Col size="md-3">
            <h3>Save Medication List</h3>
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
          {/* </div> */}

          {/* List of users medications  */}
          <Col size="md-9">
            {this.state.drugs.length ? (
              <MedList drugs={this.state.drugs} deleteDrug={this.deleteDrug}>              
              </MedList>
            ) : <h4>No Results to Display</h4>}
            
          </Col>
        </Row>
        </div>
        <br></br>
        <br></br>
      
        {/* adding map button */}
        {/* <h3>Pharmacy Location</h3> */}
        <MapBtn></MapBtn>        
        <SimpleMap></SimpleMap> 
        
        <br></br>
        <br></br>
    

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
        {/* </Container> */}
        </div>
      </div>
      
      )
    };
  } 
export default MyDrugs;