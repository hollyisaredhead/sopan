const path = require("path");
const apiUsersRoutes = require("./api/user");

module.exports = (app, io) => {

    require("./api/apiRoutes.js")(app);
    require("./io/ioRoutes.js")(io);

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname + '/../client/build/index.html'));
    });
}