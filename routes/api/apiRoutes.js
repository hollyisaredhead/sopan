const axios = require("axios");
const router = require("express").Router();
const userController = require("../../controllers/userController");

module.exports = (app) => {
  app.post("/user", (req, res) => {
    userController.create(req.data);
  })

  // app.get("/api/user/:id", (req, res) => {
  //   userController.findById;
  // });

  // app.post("/api/user/create", (req, res) => {
  //   userController.create;
  // });
}

// router.use("/user", userRoutes);

// router.route("/")
//   .get(userController.findAll)
//   .post(userController.create);

// // Matches with "/api/user/:id"
// router
//   .route("/:id")
//   .get(userController.findById)


// module.exports = router;