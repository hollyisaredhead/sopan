const express = require("express");
const app = express();
const path = require("path")
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 3001

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

io.on('connection', function (socket) {
    console.log("user connected");

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });

    socket.on('video', function (link) {
        console.log("Changing video to", link)
        io.emit('video', link);
    });
});

http.listen(PORT, function () {
    console.log('listening on *:' + PORT);
});