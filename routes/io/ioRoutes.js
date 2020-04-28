module.exports = (io) => {
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
}