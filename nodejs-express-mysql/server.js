// require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./_middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/users', require('./users/user.controller'));

// global error handler
app.use(errorHandler);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});