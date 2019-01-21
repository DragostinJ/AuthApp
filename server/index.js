// Main starting pojnt of app
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require('./router')
const mongoose = require('mongoose')
const mongo = require('mongodb')
const cors = require('cors')

// var mongoose = require('mongoose');

// var mongoURI = "mongodb://localhost:27017/test";
// var MongoDB = mongoose.connect(mongoURI).connection;
// MongoDB.on('error', function(err) { console.log(err.message); });
// MongoDB.once('open', function() {
//   console.log("mongodb connection open");
// });


// db setup

mongoose.connect('mongodb://localhost:auth/auth',  { useNewUrlParser: true })

//App setup
app.use(morgan("combined"));
app.use(cors())
app.use(bodyParser.json({ type: "*/*" }));
router(app)
//commen

//Server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log("server listening on : ", port);
