const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomName: { type: String, required: true, unique: true },
    password: { type: String },
    authorizedUsers: { type: [String] }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
