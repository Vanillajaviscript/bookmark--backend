const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title : {type: String},
    url: {type: String}
});

module.exports = mongoose.model('Link', linkSchema);