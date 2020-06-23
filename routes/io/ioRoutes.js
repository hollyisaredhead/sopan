module.exports = (io) => {
    const currentUsers = [];


    io.on('connection', function (socket) {
        console.log("user connected");

        socket.on('disconnect', function () {
            console.log('user disconnected!');

            var i = currentUsers.findIndex(user => user._id === socket.id);
            if (i !== -1) {
                currentUsers.splice(i, 1);
            }

            io.emit('update users', currentUsers);
        });

        socket.on("join room", function (room) {
            socket.join(room);
        });

        socket.on('chat message', function (msg, user, room) {
            io.to(room).emit('chat message', msg, user);
        });

        socket.on('video', function (link, room) {
            console.log("Changing video to", link)
            io.to(room).emit('video', link);
        });

        socket.on('new user', function (img, name, email) {
            let newUser = {
                _id: socket.id,
                avatar: img,
                name: name,
                email: email
            };

            currentUsers.push(newUser);
            io.emit('new user', currentUsers, newUser);
        });

    });
}