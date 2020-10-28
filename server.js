const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const app = express()
const PORT = process.env.PORT || 3001
const path = require("path")

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// Static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

// Routes
app.use(routes)

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

// Connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userlist", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true

})

// Listen on port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})
