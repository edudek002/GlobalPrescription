const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3030;
const axios = require("axios");



// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/internationaldb");

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});


const BASEURL = "https://api.fda.gov/drug/label.json?search=ibuprofen"

// GET request for remote image
axios({
  method:'get',
  url: BASEURL,
})
  .then(function(response) {
  console.log(response.data.results[0].active_ingredient);
});



