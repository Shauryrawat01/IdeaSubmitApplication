const express = require('express'); 
const serverConfig = require('./configs/server.config');
const mongoose =require("mongoose");
const dbConfig =require('./configs/db.configs');
const userModel =require('./models/user.models');

const app = express();

//here we are writting logic for cnnect mongoDB  and create an Admin user
mongoose.connect(dbConfig.DB_URL);
const db =mongoose.Connection;

db.on("error",()=>{
    console.log("Error while connecting database");
});


db.once("open",()=>{
    console.log("Database is connected");
    
        init();
});

async function init(){
    const admin= await userModel.create({
        name: "Shaury rawat",
        userId :"admin",
        email: "shauryrawat191@gmail.com",
        userType :"Admin",
        password:"shaury123"
    });
    console.log(admin);
}


app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started on the port number ${serverConfig.PORT}`)
})