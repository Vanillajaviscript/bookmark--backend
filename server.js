require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const Bookmark = require('./models/Bookmark');


app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.status(200).json('root directory')
});

//Get all bookmarks
app.get('/bookmarks', async (req, res) => {
  try {
    res.json(await(await Bookmark.find({})).reverse())
  } catch (error) {
    res.status(400).json(error)
  }
});

//Delete bookmark
app.delete('/bookmarks/:id', async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndDelete(req.params.id))
  } catch (error) {
    console.log(error)
  }
});

//Update bookmark
app.put('/bookmarks/:id', async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true}))
  } catch (error) {
    console.log(error)
  }
});

//Create bookmark
app.post('/bookmarks', async(req, res) => {
  try{  res.status(201).json(await Bookmark.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
});


app.listen(PORT, () => {
  console.log(`Server is live on Port: ${PORT}`)
});
