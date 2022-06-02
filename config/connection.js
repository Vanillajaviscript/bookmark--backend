///////////////
// DEPENDENCIES
///////////////
require('dotenv').config();

const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

////////////////////////
// ESTABLISH CONNECTION
////////////////////////
mongoose.connect(DATABASE_URL);

//////////////////
// SAVE CONNECTION
//////////////////
const cnx = mongoose.connection;


/////////////
// RUN
/////////////
logConnection();



////////////////
// FUNCTIONS
///////////////
function logConnection() {
    cnx
        .on("open", ()=> console.log("MongoDb connection OPEN"))
        .on("close", () => console.log("MongoDb connection CLOSED"))
        .on("error", (err) => console.log(err));
};

module.exports = cnx;