
import React, { Component } from "react";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../SearchBar";
import { InputMedList, TextAreaMedList, FormBtnMedList } from "../FormMedList";
import CountryDd from "../CountryDd";
import MedList from "../MedList";


class MyDrugs extends Component {
  state = {
    drugs: [],
    drug: "",
    active_ingredient: "",
    dosage: "",
    frequency: "",
    note: "",
    deleted: false,
    results: [],
    saved: [], 
    search : "morphine"
  }; 
  
  componentDidMount() {
    this.loadDrugs();
  }

  loadDrugs = () => {
    //const v = "test2";
    API.getDrugs()
      .then(res =>
        this.setState({ drugs: res.data, drug: "", active_ingredient: "",
        dosage: ""})
      )
      .catch(err => console.log("Error from loadDrugs ", err));
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

    // this.setState({
    //   drug: this.state.drug,
    //   active_ingredient: this.state.active_ingredient,
    //   dosage: this.state.dosage,
    //   frequency: this.state.frequency,
    //   note: this.state.note
      
    // })
    // console.log("My API =========================");
    // console.log("My state " + this.state);
    // console.log("My drug  " + this.state.drug);
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
            <h2>Enter Your Medicine</h2>
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
              <h3>No Results to Display</h3>
            )}
          </Col>
          </Row>



          <Row>
            <Col size="md-6">
              <h2>Pick The Country</h2>
              <CountryDd></CountryDd>
              
              <MedList></MedList>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
           <h2>Let's search my drugs</h2>
          </Col>

          </Row>

          <Row>
            <Col size="md-6">

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
           <Col size="md-6">
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
           </Col>
           
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