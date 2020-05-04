const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const userController = require("../../controllers/userController");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-h60-ggjt.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'UlmTKS3bSNjG0v1pOs3Q0R7ZdBiIwtXG',
  issuer: `https://dev-h60-ggjt.auth0.com/`,
  algorithms: ['RS256']
});


module.exports = (app) => {
  app.post("/user", checkJwt, (req, res) => {
    userController.create(req.data);
  })

  // app.get("/api/user/:id", (req, res) => {
  //   userController.findById;
  // });

  // app.post("/api/user/create", (req, res) => {
  //   userController.create;
  // });
}

