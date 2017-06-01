//var userLogin = require('./mongoose.model');

var express = require('express');
var mongoose = require('mongoose');

var app = express();
var db = 'mongodb://localhost:27017/userLogin';
mongoose.connect(db);

//create login Schema
var Schema = mongoose.Schema;
var LoginSchema = new Schema({
  username: String,
  password: String
});


//Create mongoose model

var Login = mongoose.model("Login", LoginSchema);

Login.find(function(err , data){
  console.log(err);
  console.log(data);
});

var Login1 = new Login({
  username:"Sagar",
  password:"saagar"
});
Login1.save();





app.get("*", function(request , response){
  Login.find(function(err , data) {
  });
  response.end(data);
  });


app.listen(9090);
