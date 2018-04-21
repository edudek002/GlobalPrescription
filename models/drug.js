const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drugSchema = new Schema({
  drug: { type: String, required: true },
  active_ingredient: { type: String, required: true },
  dosage: String
});

const Drug = mongoose.model("Drug", drugSchema);

module.exports = Drug;
