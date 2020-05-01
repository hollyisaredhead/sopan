const axios = require("axios");
const router = require("express").Router();
const userController = require("../../controllers/userController");

module.exports = (app) => {
<<<<<<< HEAD
=======
  app.get('/api/youtube/:query', (req, res) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${req.params.query}&type=video&videoEmbeddable=true&maxResults=15&key=${process.env.YOUTUBE_API_KEY}`)
      .then(results => res.json(results.data))
      .catch(err => console.log(err));
  });

>>>>>>> 0eb22e9aadbb8127a4649ffcbe8d50e1dac623d7
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