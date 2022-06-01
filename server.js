/////////////////
// DEPENDENCIES
////////////////
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

///////////////////
// MIDDLEWARE
///////////////////
app.use(express.json());
app.use(cors());
app.use(logger('dev'));


//////////////
// ROUTES
/////////////
app.get('/', (req, res) => {
  res.status(200).json('root directory')
});


//////////////////
// SERVER LISTENER
//////////////////
app.listen(PORT, () => {
  console.log(`Server is live on Port: ${PORT}`)
});
