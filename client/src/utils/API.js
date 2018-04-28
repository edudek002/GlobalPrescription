import axios from "axios";


const BASEURL = "https://api.fda.gov/drug/label.json"


export default {

  // Gets all drugs
  addUser: function(userData){
    return axios.post("/api/landing", userData);
  },
  findUser: function (userData) {
    console.log("this login button is working")
    return axios.get("/api/landing/loginn", {params: userData});
  },
  displayUser: function (userData) {
    console.log("this display function is working")
    return axios.get("/api/landing/logged", { params: userData });
  },
  redirect: function (Token) {
    
    window.location = "/drugs"
  },
  getDrugs: function() {
    return axios.get("/api/drugs");
  },
  // Gets the drug with the given id
  getDrug: function(id) {
    return axios.get("/api/drugs/" + id);
  },
  // Deletes the drug with the given id
  deleteDrug: function(id) {
    return axios.delete("/api/drugs/" + id);
  },
  // Saves a drug to the database
  saveDrug: function(drugData) {
    return axios.post("/api/drugs", drugData);
  },
  searchDrug: function(query){
    console.log("My full query " + BASEURL + query); 
    return axios.get(BASEURL + query);
  }, 
  drugSearch : function(v) {
    return axios.get("/api/drugs/search")
  }

};