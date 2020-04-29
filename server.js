const express = require("express");
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const mongoose = require("mongoose");
var PORT = process.env.PORT || 3001

require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

require("./routes")(app, io);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userlist");

http.listen(PORT, function () {
    console.log('listening on *:' + PORT);
});