
const mongoose = require("mongoose");

const db = require("../models");
mongoose.Promise = global.Promise;


console.log("Is this working???????");

// const authent = new Mongoose();
// authent.connect(process.env.MONGODB_URI || "mongodb://localhost/authenticationdb",);

// const drugdata = new Mongoose();
// drugdata.connect(process.env.MONGODB_URI || "mongodb://localhost/internationaldb",);


// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/internationaldb"

);



const drugSeed = [
  {
    drug : "test",
    active_ingredient : "test2",
    dosage : "never",
    country : "na"
  },
  {
    drug: "Duvadilan",
    active_ingredient: "Isoxsuprine",
    dosage: "10 to 20mg, three or four times daily",
    country : "Asia"
  },
  {
    drug : "Biseptol",
    active_ingredient : "Sulfamethoxazole",
    dosage :  "One drop every three hours",
    country : "Europe"
  },
  {
    drug : "Ciclobenzaprina",
    active_ingredient : "Cyclobenzaprine",
    dosage : "5 mg three times a day",
    country : "United States"
  },
  {
    drug : "Curam",
    active_ingredient : "clavulanic acid",
    dosage : "one to two drops, four times a day",
    country : "Europe"
  },
  {
    drug : "Disflatyl",
    active_ingredient : "Dimeticone",
    dosage : "apply three to four times a day to infected area",
    country : "Europe"
  },
  {
    drug : "Efedrin",
    active_ingredient : "Ephedrine sulfate",
    dosage : "30mL every 12 hours",
    country : "Europe"
  },
  {
    drug : "Flanax",
    active_ingredient : "Naproxen",
    dosage : "1 tablet every 8-12 hours",
    country : "South America"
  },
  {
    drug : "Navidoxine",
    active_ingredient : "Pyridoxine",
    dosage : "300mg daily",
    country : "Asia"
  },
  {
    drug : "Olfen",
    active_ingredient : "Diclofenac",
    dosage : "500mg daily",
    country : "europe"
  },
  {
    drug : "Pentrexyl",
    active_ingredient : "Ampicillin",
    dosage : "600 - 1200mg per day",
    country : "Europe"
  },
  {
    drug : "Primperan",
    active_ingredient : "Metoclopramide",
    dosage : "160mg per day",
    country : "Asia"
  },
  {
    drug : "Terramicina Oftalmica",
    active_ingredient : "Oxytetracycline",
    dosage : "100mg every 12 hours",
    country : "Europe"
  },
  {
    drug : "Glucosamine",
    active_ingredient: "Viartril-S",
    dosage : "one to two drops every four hours",
    country : "Asia"
  },
  {
    drug : "morphine",
    active_ingredient : "gabapentin", 
    dosage : "300mg/day",
    country : "United States"
  },
  {
    drug : "Burana",
    active_ingredient : "Advil",
    dosage : "200 to 400 mg orally every 4 to 6 hours as needed",
    country : "Europe"
  }

];

const userSeed = [
  {
    userName: "",
    passWord: "",
    userDrugs: []
  }
] 
db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.length);
    // console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Drug
  .remove({})
  .then(() => db.Drug.collection.insertMany(drugSeed))
  .then(data => {

    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

