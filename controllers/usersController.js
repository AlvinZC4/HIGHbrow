const db = require("../models")
const bcrypt = require("bcrypt")
const saltRounds = 10

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

        // Salt and hash password sent from front-end
        const plainTextPassword = req.body.password
        let hashedPassword

        console.log("plainTextPassword", plainTextPassword)

        bcrypt.genSalt(saltRounds, function(err, salt){
            if (err) {
                console.log("genSalt Error")
                throw err
            }
            else {
                console.log("genSalt Ran")
                bcrypt.hash(plainTextPassword, salt, function(err, hash){
                    if (err) {
                        console.log("hash error")
                        throw err
                    }
                    else {
                        console.log("hash ran, result:", hash)

                        // create new object with salted and hashed password to post into database
                        const newUser = {
                            username: req.body.username,
                            password: hashedPassword,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            phone: req.body.phone,
                            email: req.body.email
                        }
                        console.log("newUser", newUser)

                        db.User
                            .create(newUser)
                            .then(dbModel => {
                                res.json(dbModel)
                                console.log("createUser res", dbModel)
                            })
                            .catch(err => {
                                res.status(422).json(err)
                                console.log(err)
                            })
                                    }
                                })
                            }
                        })
    }
}