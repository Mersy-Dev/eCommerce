const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String, 
    lastName:String,
    email:{required:true, type:String, unique:true},
    password:String,
    cpassword:String,
    image:String,
  

});


let userModel = mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema);



module.exports = userModel
