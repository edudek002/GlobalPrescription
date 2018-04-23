const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


console.log("Is this working???????");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/internationaldb",
  {
    useMongoClient: true
  }
);

const drugSeed = [
  {
    drug : "test",
    active_ingredient : "test2",
    dosage : "never"
  },
  {
    drug: "Duvadilan",
    active_ingredient: "Isoxsuprine",
    dosage: "10 to 20mg, three or four times daily"
  },
  {
    drug : "Biseptol",
    active_ingredient : "Sulfamethoxazole",
    dosage :  "One drop every three hours"
  },
  {
    drug : "Ciclobenzaprina",
    active_ingredient : "Cyclobenzaprine",
    dosage : "5 mg three times a day"
  },
  {
    drug : "Curam",
    active_ingredient : "clavulanic acid",
    dosage : "one to two drops, four times a day"
  },
  {
    drug : "Disflatyl",
    active_ingredient : "Dimeticone",
    dosage : "apply three to four times a day to infected area"
  },
  {
    drug : "Efedrin",
    active_ingredient : "Ephedrine sulfate",
    dosage : "30mL every 12 hours"
  },
  {
    drug : "Flanax",
    active_ingredient : "Naproxen",
    dosage : "1 tablet every 8-12 hours"
  },
  {
    drug : "Navidoxine",
    active_ingredient : "Pyridoxine",
    dosage : "300mg daily"
  },
  {
    drug : "Olfen",
    active_ingredient : "Diclofenac",
    dosage : "500mg daily" 
  },
  {
    drug : "Pentrexyl",
    active_ingredient : "Ampicillin",
    dosage : "600 - 1200mg per day"
  },
  {
    drug : "Primperan",
    active_ingredient : "Metoclopramide",
    dosage : "160mg per day"
  },
  {
    drug : "Terramicina Oftalmica",
    active_ingredient : "Oxytetracycline",
    dosage : "100mg every 12 hours"
  },
  {
    drug : "Glucosamine",
    active_ingredient: "Viartril-S",
    dosage : "one to two drops every four hours"
  },
  {
    drug : "morphine",
    active_ingredient : "gabapentin", 
    dosage : "300mg/day"
  }

];

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


