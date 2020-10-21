const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// Static assets
if (process.env.NODE.ENV === "production") {
    app.use(express.static("client-build"))
}

// Routes
app.use(routes)

// Connect to database
mongoose.connect(process.env.MONGOD_URI || "mongoddb://localhost/users", {
    useNewUrlParser: true,
    useFindAndModify: false
})

// Listen on port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})
