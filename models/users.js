const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now},
    userBooks: [
        {
            id: {type: String, required: true},
            title: {type: String, required: true},
            author: {type: String, required: true},
            wishlist: {type: Boolean},
            shared: {type: Boolean},
        }
    ],
    following: [
        {
            username: {type: String}
        }
    ]
})

const User = mongoose.model("User", UserSchema)

module.exports = User
