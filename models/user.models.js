//this will hold the sechema for user
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required :true
    },
    userId :{
        type :String,
        required :true,
        unique : true
    },
    password:{
        type: String,
        require : true
    },
    email :{
        type :String,
        require: true,
        unique :true,
        lowercase: true
    },
    userType:{
        type: String,
        require:true,
        default:"Customer",
        enum : ["Customer","Admin"]
    }
},{timestamps:true});

module.exports= mongoose.model("User",userSchema);