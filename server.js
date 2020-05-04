const express = require("express");
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const mongoose = require("mongoose");
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
var PORT = process.env.PORT || 3001

require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require("./routes")(app, io);

mongoose.connect(process.env.MONGODB_URI);

http.listen(PORT, function () {
    console.log('listening on *:' + PORT);
});