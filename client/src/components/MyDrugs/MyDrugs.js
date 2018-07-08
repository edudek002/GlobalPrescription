import React, { Component } from "react";
import API from "../../utils/API";
// import DeleteBtn from "../DeleteBtn";
// import MapAutocomplete from "../Map";
import MapWrapper from "../Map";
import Jumbotron from "../Jumbotron";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { Col, Row } from "../Grid"; //'Container' was removed not used
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../SearchBar";
import { InputMedList, TextAreaMedList, FormBtnMedList } from "../FormMedList";
// import CountryDd from "../CountryDd";
import {MedList} from "../MedList";
// import MapBtn from "../MapBtn";
import "./MyDrugs.css";
import Footer from "../Navbar";
import DemoCarousel from "../Carousel";
// import SearchBar from "../FormBtn";


class MyDrugs extends Component {
  state = {
    drugs: [],
    allDrugs: [],
    drug: "",
    internationalDrug : "Not Found",
    active_ingredient: "",
    dosage: "",
    frequency: "",
    note: "",
    search2 : "",
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
    smallResultsShow : {
      height : '245px',
      overflow : 'hidden'
    },
    apiSearch : "",
    activeUser : "",
    allDrugsShow : {
      display : 'none'
    }
    
  }; 
  
  componentDidMount() {
    this.displayUser();
    this.loadDrugs();
    this.databaseDrugs();
    
  }

  

  databaseDrugs = () => {

    let dbDrugs = [];

    API.searchAllDrugs()
      .then(res => {
        res.data.forEach(function(data) {
          dbDrugs.push(data.active_ingredient)
        });
        console.log(dbDrugs);
        this.setState({
          allDrugs : dbDrugs
        })
      });
  }

  loadDrugs = () => {

    const x = localStorage.getItem("User");
    API.getDrugs(x)
      .then(res => {
        this.setState({drugs : res.data[0].userDrugs, drug : "", active_ingredient : "", dosage : ""})
      }  
      )
      .catch(err => console.log("Error from loadDrugs ", err));
  };
  
  searchAPI = () => {


    let search = this.state.search
    let displaySearch = this.state.search
    let newSearch = this.state.apiSearch
    
    const query = "?search=" + search;
    console.log("query: " + query);

        API.getDbDrugs(search)
          .then(res => {
            console.log(res.data.length);
            if (res.data.length == 0) {
              console.log("No Results Found!!!");
              alert("No Results Found");
            }
            else if (search === res.data[0].active_ingredient) {
              console.log(res.data[0].drug)
              this.setState({
                apiSearch : res.data[0].active_ingredient,
                internationalDrug : res.data[0].drug,
                country : res.data[0].country
              })
              console.log(this.state.country);
              newSearch = res.data[0].active_ingredient
              let searchReplaced = newSearch.split(' ').join('+');
              console.log(searchReplaced);
              
              //THEN OPEN FDA API CALLL
              const query = "?search=" + searchReplaced;
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
          
      }); 
      // })
    //.catch(err => console.log(err));
    
    // FIRST SEARCH OUR DATABASE
       
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
    var x = id;
    console.log(x);
    API.deleteDrug(x)
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
    event.preventDefault();
    // if (this.state.drug) {
      const drugsToSend = {
        drug : this.state.drug,
        active_ingredient : this.state.active_ingredient,
        dosage : this.state.dosage,
        frequency : this.state.frequency,
        note : this.state.note,
        user : this.state.activeUser
      }


      API.testUpdate(drugsToSend)
        .then(res => {
          console.log(res);
          this.loadDrugs();
        })
        .catch(err => console.log(err));
    // }
  };

  handleDrugSubmit = event => {

    this.searchAPI();
    this.setState({
      showMore : {
        display : 'block'
      },
      largeResultsShow : {
        display : 'block'
      },
      smallResultsShow : {
        display : 'block'
      },
      showLess : {
        display : 'none'
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
  
  handleSeeAllDrugs = event => {
    this.setState({
      allDrugsShow : {
        display : 'block'
      }
    })
  }

  handleHideAllDrugs = event => {
    this.setState({
      allDrugsShow : {
        display : 'none'
      }
    })
  }

  handleStrongSearch = event => {
    let strongSearch = event.drug;
    this.setState({
      search : strongSearch,
      allDrugsShow : {
        display : 'none'
      }
    })

  }


  render() {
    let authenticate = localStorage.getItem("ActiveUser");
    console.log(authenticate);
    if (authenticate === 'true') {
      return ( 
        <div className="backimage">
          <Col size="md-12">
            <Row>
              <Nav />
            </Row>
          </Col>

          {/* <Container fluid> */}

          {/* Main header of app */}
          <div className="jumbotron">
            <Row>
              <Col size="md-12">
                <Jumbotron activeUser={this.state.activeUser} />
              </Col>
            </Row>
          </div>
          <Row>
            <Col size="md-12">
              <DemoCarousel />
            </Col>
          </Row>

          {/* User enter point for search */}
          <div className="container">
            <Row>
              <Col size="md-8">
                <br></br>
                <h2>Search Medications</h2>
                <Input value={this.state.search} onChange={this.handleInputChange} name="search" placeholder="Enter Medication to search" />
              </Col>
            </Row>
            <div className="row" id="mainButtonRow">
              {/* Choose Country to search */}
              <Col size="md-3">
                <FormBtn onClick={() => this.handleDrugSubmit()}>{"Search this Medication"}</FormBtn>
              </Col>
              <Col size="md-3"><FormBtn onClick={() => this.handleSeeAllDrugs()}>{"See All Drugs"}</FormBtn>
              <div className="allDrugsShow" style={this.state.allDrugsShow}><span className="titleDrug">Drug Names</span>
              
              {this.state.allDrugs.length ? (
              <List>
                {this.state.allDrugs.map(drug => (
                  <ListItem key={drug}>
                      <strong value={drug} onClick={() => this.handleStrongSearch({drug})}>
                      {drug} 
                      </strong>
                    
                  </ListItem>
                ))}
              </List>

            ) : (
              <h3>No Result to Display</h3>
            ) }
              <button className="closeBtn" onClick={() => this.handleHideAllDrugs()}>{"X"}</button>
              </div>
              </Col>

              {/* Return answer to desplay window */}
            </div>


            <Row>
              <Col size="md-6">
                <div className="largeResults" style={this.state.largeResultsShow}>
                  <p className="flag1"></p>  
                  <p className="DrugLabel">
                    Name of US Drug: <span id="generic">
                      {this.state.search}
                    </span>
                  </p>
                  <p className="DrugLocation">
                    Active Ingredient: <span id="countryLoc">
                      {this.state.generic_name}
                    </span>
                  </p>
                  <p className="DrugLocation">
                    Region This Drug Can Be Found: <span id="countryLoc">
                      {this.state.country}
                    </span>
                  </p>
                  <p className="DrugLocation">
                    International Name : <span id="countryLoc">
                      {this.state.internationalDrug}
                    </span>
                  </p>
                  <p className="DrugInfo">{this.state.administration}</p>
                </div>
                <button className="showMore" style={this.state.showMore} onClick={() => this.handleShowMoreButton()}>
                  Show More
                </button>
                <button className="showLess" style={this.state.showLess} onClick={() => this.handleShowLessButton()}>
                  Show Less
                </button>
              </Col>
              <Col size="md-6">
                <div className="smallResults" style={this.state.smallResultsShow}>
                  <p className="flag2"></p> 
                  <p className="DrugLabel">
                    International Drug Name : <span id="countryLoc">
                      {this.state.internationalDrug}
                    </span>
                  </p>
                  <p className="DrugLocation">
                    Active Ingredient : <span>
                      {this.state.generic_name}
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
            <br />


            <br />
            <br />
            <br />

            <div className="medlist">
              <Row>
                {/* <div className="inputmed"> */}
                <Col size="md-3">
                  <h3>Save Medication List</h3>
                  <form>
                    <InputMedList value={this.state.drug} onChange={this.handleInputChange} name="drug" placeholder="Name of your medicine (required)" />
                    <InputMedList value={this.state.active_ingredient} onChange={this.handleInputChange} name="active_ingredient" placeholder="Active Ingredient (required)" />
                    <InputMedList value={this.state.dosage} onChange={this.handleInputChange} name="dosage" placeholder="Dosage" />
                    <InputMedList value={this.state.frequency} onChange={this.handleInputChange} name="frequency" placeholder="Frequency" />
                    <TextAreaMedList value={this.state.note} onChange={this.handleInputChange} name="note" placeholder="Note" />

                    <FormBtnMedList onClick={this.handleFormSubmit}>
                      Submit
                    </FormBtnMedList>
                  </form>
                </Col>
                {/* </div> */}

                {/* List of users medications  */}
                <Col size="md-9">
                  {this.state.drugs.length ? (
                    <MedList
                      drugs={this.state.drugs}
                      deleteDrug={this.deleteDrug}
                    />
                  ) : (
                    <h4>No Results to Display</h4>
                  )}
                </Col>
              </Row>
            </div>
            <br />
            <br />

            <div>
              <Row>
                <h3>Pharmacy Locations</h3>
              </Row>
              <Row>
                <h4>
                  Enter a city name and then click on the map to see the
                  list of pharmacies.
                </h4>
                <Col size="md-12">
                  <MapWrapper />
                </Col>
              </Row>
            </div>

            <br />
            <br />

            {/* </Container> */}
          </div>
          <Footer />
        </div>
      )
    }
    else if (authenticate === 'false') {
      return (
        <div>
          <h1>Please Log In!
          </h1>
        </div>
      )
    }
    }
    };
  

export default MyDrugs;