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

        socket.on('chat message', function (msg, user) {
            io.emit('chat message', msg, user);
        });

        socket.on('video', function (link) {
            console.log("Changing video to", link)
            io.emit('video', link);
        });

        socket.on('new user', function (user) {
            let newUser = {
                _id: socket.id,
                name: user
            };

            currentUsers.push(newUser);
            io.emit('new user', currentUsers);
        });

    });
}