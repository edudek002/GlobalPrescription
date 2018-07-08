const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true, unique : true },
    passWord: { type: String, required: true },
    userDrugs: {type: Array, required: false},
    isAuthenticated : {required : true, type: Boolean}
    
});


const User = mongoose.model("user", userSchema);
module.exports = User;