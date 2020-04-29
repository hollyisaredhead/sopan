const path = require("path");

module.exports = (app, io) => {

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname + '/../client/build/index.html'));
    });

    require("./api/apiRoutes.js")(app);
    require("./io/ioRoutes.js")(io);
}