const router = require("express").Router()
const usersController = require("../../controllers/usersController")


router.route("/username")
    .post(usersController.findUsername)

router.route("/mywishlist")
    .get(usersController.findAllUserBooks)

    module.exports = router