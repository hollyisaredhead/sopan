const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;