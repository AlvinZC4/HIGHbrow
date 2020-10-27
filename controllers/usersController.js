const db = require("../models")

module.exports = {
    findAllUserBooks: function(req, res) {
        db.User
            .find({username: req.body}, "userBooks")
            .sort({title: 1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findUsername: function(req, res) {
        db.User
            .findOne({username: req.body})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}