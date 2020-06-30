const userController = require("../../controllers/userController");
const roomController = require("../../controllers/roomController");

module.exports = (app) => {
  app.post("/api/users", userController.create)

  app.get("/api/users/:id", userController.findOne);

  app.put("/api/users/:id", userController.update);

  app.post("/api/rooms/create", roomController.createRoom);

  app.post("/api/rooms/join", roomController.joinRoom);
}
