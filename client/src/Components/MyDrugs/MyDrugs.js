
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
    saved: [], 
    search : "ibuprofen"
  };      



  // // GET request for remote image
  // axios({
  //     method:'get',
  //     url: BASEURL,
  //   })
  //     .then(function(response) {
  //     console.log(response.data.results[0].active_ingredient);
  //   });

   searchAPI = () => {
    const search = this.state.search
    const query = "?search=" + search
    // let startDate = this.state.startDate;
    // let endDate = this.state.endDate;
    // let query = "&q=" + search + 
    // "&begin_date=" + 
    // startDate + "0101" +
    // "&end_date=" +  
    // endDate + "1231";
    console.log("query: " + query);

    API.searchDrug(query)
      .then(res => 
        {
          console.log( res.data.results[0]);
          this.setState({
            results : res.data.results[0].purpose
          })
          let drugData = res.data.results[0].purpose
          console.log(drugData);

      
        })
      
      .catch(err => console.log(err));



    // this.setState({
    //   search: "",
    //   startDate: "",
    //   endDate: ""
    // })
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
                  <DeleteBtn onClick={() => this.deleteDrug(drug._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
        <div>
          <p>{this.state.results}</p>
          <button onClick={() => this.searchAPI()}> API Call  </button>
          
        </div>
      </div>
    )

  }

  
}

export default MyDrugs;