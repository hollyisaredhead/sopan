const path = require("path");

module.exports = (app, io) => {

    require("./api/apiRoutes.js")(app);
    require("./io/ioRoutes.js")(io);
}