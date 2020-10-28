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
        console.log("findUser End Point")
        console.log("req.body", req.body)
        db.User
            .findOne({username: req.body.username}, "username password userBooks following")
            .then(dbModel => {res.json(dbModel)
            console.log("controller endpoint", dbModel)})
            .catch(err => res.status(422).json(err))
    }
}