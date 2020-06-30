const db = require("../models");
const bcrypt = require("bcrypt");

const saltRounds = 10;





module.exports = {
    createRoom: function (req, res) {

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                let newRoom = {
                    roomName: req.body.roomName,
                    password: hash
                }

                db.Room
                    .create(newRoom)
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            });
        });
    },

    joinRoom: function (req, res) {
        console.log("joining")

        db.Room
            .findOne({ roomName: req.body.roomName })
            .then(result => {
                if (!result)
                    res.json("room not found");
                else
                    bcrypt.compare(req.body.password, result.password, function (err, result) {
                        if (result === true)
                            res.json("authentication successful");
                        else
                            res.json("incorrect password");
                    })
            })
            .catch(err => res.status(422).json(err));
    }
}