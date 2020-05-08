const userController = require("../../controllers/userController");

module.exports = (app) => {
  app.post("/api/users", userController.create)

  app.get("/api/users/:id", userController.findOne);

  app.put("/api/users/:id", userController.update);

}
