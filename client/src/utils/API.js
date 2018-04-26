import axios from "axios";

const BASEURL = "https://api.fda.gov/drug/label.json?search=ibuprofen"

export default {

  addUser: function(userData){
    return axios.post("/api/drugs", userData);
  },
  findUser: function (userData) {
    console.log("this login button is working")
    return axios.get("/api/drugs/loginn", {params: userData});
  },
  displayUser: function (userData) {
    console.log("this display function is working")
    return axios.get("/api/drugs/logged", { params: userData });
  },
  redirect: function (Token) {
    
    window.location = "http://localhost:3000/drugs"
  },
  // Gets all drugs
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
  searchDrug: function(){
    console.log("My full query " + BASEURL); 
    return axios.get(BASEURL);
  } 


};