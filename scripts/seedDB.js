const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/userlist"
)

const userSeed = [
    {
        username: "AlvinZC4",
        password: "mypassword",
        firstName: "Alvin",
        lastName: "Cox",
        phone: "555-555-5555",
        email: "alvinzvcoxiv@gmail.com",
        date: new Date(Date.now()),
        userBooks: [
            {
                id: "1",
                Title: "A Game of Thrones",
                author: "George R. R. Martin",
                wishlist: false,
                shared: true
            },
            {
                id: "2",
                Title: "The Hunt for the Red October",
                author: "Tom Clancy",
                wishlist: true,
                shared: false  
            }
        ], 
        following: [
            {
                username: "purilisa"
            }
        ]
    },
    {
        username: "purilisa",
        password: "areallygoodpassword",
        firstName: "Lisa",
        lastName: "Suvarna",
        phone: "555-555-5554",
        email: "lisa@heremail.net",
        date: new Date(Date.now()),
        userBooks: [
            {
                id: "3",
                Title: "Grapes of Wraith",
                author: "John Steinbeck",
                wishlist: true,
                shared: false
            },
            {
                id: "4",
                Title: "It",
                author: "Stephen King",
                wishlist: false,
                shared: true  
            }
        ], 
        following: [
            {
                username: "AlvinZC4"
            }
        ]
    }
]

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data)
        process.exit(0)
    })
    .catch(err => {
        console.error(err)
        process.exit(1)
    })