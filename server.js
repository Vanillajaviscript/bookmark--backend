require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.status(200).json('root directory')
});

app.listen(PORT, () => {
  console.log(`Server is live on Port: ${PORT}`)
});
