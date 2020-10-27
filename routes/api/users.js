const router = require("express").Router()
const usersController = require("../../controllers/usersController")


router.route("/")
    .get(usersController.findUsername)

router.route("/mywishlist")
    .get(usersController.findAll)

    module.exports = router