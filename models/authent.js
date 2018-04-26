const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true },
    passWord: { type: String, required: true }
    
});


const User = mongoose.model("user", userSchema);
module.exports = User;