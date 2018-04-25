import axios from "axios";


const BASEURL = "https://api.fda.gov/drug/label.json"


export default {
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

  searchDrug: function(query){
    console.log("My full query " + BASEURL); 
    return axios.get(BASEURL + query);
  }, 
  drugSearch : function(v) {
    return axios.get("/api/drugs/search")
  }

};