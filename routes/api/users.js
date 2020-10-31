const router = require("express").Router()
const usersController = require("../../controllers/usersController")


router.route("/username")
    .post(usersController.findUsername)

router.route("/mywishlist")
    .post(usersController.findAllUserBooks)

module.exports = router