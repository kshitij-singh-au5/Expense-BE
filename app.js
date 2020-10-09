var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors")

var usersRouter = require('./routes/user');


var app = express();

app.use(
    cors()
  );
  
  
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var url = "mongodb+srv://kshitij7:12345@cluster0-6awrx.mongodb.net/Expense?retryWrites=true&w=majority"
var DB = ""

mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    },() => {console.log("connected")}
);


app.use('/users', usersRouter);

module.exports = app;
