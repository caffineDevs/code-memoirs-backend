const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const routes = require('./Routes/Routes.js');
const cors = require("cors");
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");


const db = config.get('mongoURI')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("", routes);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.listen(port, ()=>console.log('listing on port ', port));