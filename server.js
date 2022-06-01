require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const Bookmark = require('./models/Bookmark')

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.status(200).json('root directory')
});

app.get('/bookmarks', async(req, res) => {
  try {
    res.json(await(await Bookmark.find({})).reverse())
  } catch (error) {
    res.status(400).json(error)
  }
})

app.post('/bookmarks', async(req, res) => {
  try{  res.status(201).json(await Bookmark.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})


app.listen(PORT, () => {
  console.log(`Server is live on Port: ${PORT}`)
});
