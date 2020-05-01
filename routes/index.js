const path = require("path");

module.exports = (app, io) => {

    require("./io/ioRoutes.js")(io);
    require("./youtube/youtubeRoutes.js")(app);
    require("./api/apiRoutes.js")(app);


    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname + '/../client/build/index.html'));
    });
}