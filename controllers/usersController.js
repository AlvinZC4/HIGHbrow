const db = require("../models")

module.exports = {
    findAllUserBooks: function(req, res) {
        console.log("findAllUserBooks End Point")
        console.log("UserBooks req.body", req.body)
        db.User
            .findOne({username: req.body.username}, "userBooks")
            .sort({title: 1})
            .then(dbModel => {
                console.log("UserBooks Response", dbModel)
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err))
    },
    findUsername: function(req, res) {
        console.log("findUser End Point")
        console.log("findUserName req.body", req.body)
        db.User
            .findOne({username: req.body.username}, "username password userBooks following")
            .then(dbModel => {
                // Check if password passed from front-end matches the password stored in the database"
                // If the passwords do not match return "Password Incorrect"
                if (dbModel.password !== req.body.password) {
                    res.json("Password Incorrect")
                    console.log("password incorrect")
                }
                // If passwords match store username, userBooks, and following in userReturn variable. This is to prevent sending the password back to the front-end.
                else {
                    const userReturn = {
                        username: dbModel.username,
                        userBooks: dbModel.userBooks,
                        following: dbModel.following
                    }
                    res.json(userReturn)
                    console.log("userReturn", userReturn)
                }
            console.log("controller endpoint", dbModel)
        })
            .catch(err => res.status(422).json(err))
    },
    createUser: function(req, res) {
        console.log("createUser End Point")
        console.log("createUser req.body", req.body)
        db.User
            .create(req.body)
            .then(dbModel =>{
                res.json(dbModel)
                console.log("createUser res", dbModel)
            })
            .catch(err => res.status(422).json(err))
    }
}