const router = require("express").Router()
const userRoutes = require("./users")
const bookRoutes = require("./books");

router.use("/users", userRoutes)
router.use("/books", bookRoutes)

module.exports = router