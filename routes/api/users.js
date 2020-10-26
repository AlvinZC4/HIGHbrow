const router = require("express").Router()
const usersController = require("../../controllers/usersController")

router.route("/mywishlist")
    .get(usersController.findAll)

    module.exports = router