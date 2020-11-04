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

                // Use bcrypt hashes password entered by the user and checks it against the password stored in the database
                bcrypt.compare(req.body.password, dbModel.password, function(err, result){

                    // if the hashed user entered password does not match the password in the database then return that the user entered an incorrect password
                    if (result == false) {
                        res.json("Password Incorrect")
                        console.log("passowrd incorrect")
                    }
                    // If the hashed passwords do match then a new object is created to send back to the front-end. The new object does not contain the hashed password.
                    else if (result == true) {
                        const userReturn = {
                            username: dbModel.username,
                            userBooks: dbModel.userBooks,
                            following: dbModel.following
                        }
                        res.json(userReturn)
                        console.log("userReturn", userReturn)
                        console.log("controller endpoint", dbModel)
                    }
                    else {
                        throw err
                    }
                })
            })
            .catch(err => res.status(422).json(err))
    },
    createUser: function(req, res) {
        console.log("createUser End Point")
        console.log("createUser req.body", req.body)

        // Salt and hash password sent from front-end
        const plainTextPassword = req.body.password

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
                            password: hash,
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
    },
    addBook: function(req, res) {
        console.log("addBook endpoint hit, req: ", req)
        const newBook = {
            id: req.body.id,
            title: req.body.title,
            author: req.body.author,
            image: req.body.image
        }
        console.log(`User ${req.params.username} adding new book`, newBook)
        db.User
            .findOneAndUpdate({username: req.params.username}, {$push: {userBooks: newBook}})
            .then(dbModel => {
                res.json(dbModel)
                console.log("addBook response", dbModel)
            })
            .catch(err => {
                res.status(422).json(err)
                console.log("getbook res error", err)
            })
    }
}